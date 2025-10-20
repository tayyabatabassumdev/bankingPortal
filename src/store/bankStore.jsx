import { create } from "zustand";
import { persist } from "zustand/middleware";

const staticDashboardData = {
  loans: [
    { icon: "/src/assets/house.jpeg", title: "Family house loan", amount: "-$120,000" },
    { icon: "/src/assets/bank.jpeg", title: "Eurotrip loan", amount: "-$21,489" },
    { icon: "/src/assets/car.png", title: "Car loan", amount: "-$2,312" },
  ],
  docs: [
    { name: "ID Card", status: "Verified", time: "19 Mar, at 2:51 PM" },
    { name: "Photo with ID Card", status: "Declined", time: "09 Mar, at 1:22 AM" },
    { name: "Bank information", status: "Waiting", time: "07 Mar, at 6:44 PM" },
  ],
};

export const useBankStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      currentUser: null,
      users: [], // Each user will now store stats inside
      ...staticDashboardData,

      signUp: (newUser) => {
        const users = Array.isArray(get().users) ? get().users : [];
        const emailExists = users.some((u) => u.email === newUser.email);
        if (emailExists) {
          alert("Email already exists!");
          return false;
        }

        const updatedUsers = [
          ...users,
          {
            ...newUser,
            balance: newUser.balance ?? 1000,
            stats: { income: 1000, expense: 0 },
          },
        ];

        set({ users: updatedUsers });
        return true;
      },

      signIn: (email, password) => {
        const users = Array.isArray(get().users) ? get().users : [];
        const existingUser = users.find((u) => u.email === email && u.password === password);
        if (existingUser) {
          set({ isAuthenticated: true, currentUser: existingUser });
          return true;
        }
        return false;
      },

      signOut: () => {
        set({ isAuthenticated: false, currentUser: null });
      },

      creditMoney: (amount) => {
        const { currentUser, users } = get();
        if (!currentUser) return;

        const newBalance = currentUser.balance + amount;
        const newIncome = currentUser.stats.income + amount;

        const updatedUser = {
          ...currentUser,
          balance: newBalance,
          stats: { ...currentUser.stats, income: newIncome },
        };

        const updatedUsers = users.map((u) =>
          u.email === currentUser.email ? updatedUser : u
        );

        set({ currentUser: updatedUser, users: updatedUsers });
      },

      cashOutMoney: (amount) => {
        const { currentUser, users } = get();
        if (!currentUser) return;

        if (currentUser.balance < amount) {
          alert("Insufficient funds!");
          return;
        }

        const newBalance = currentUser.balance - amount;
        const newExpense = currentUser.stats.expense + amount;

        const updatedUser = {
          ...currentUser,
          balance: newBalance,
          stats: { ...currentUser.stats, expense: newExpense },
        };

        const updatedUsers = users.map((u) =>
          u.email === currentUser.email ? updatedUser : u
        );

        set({ currentUser: updatedUser, users: updatedUsers });
      },
    }),
    {
      name: "bank-storage",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
        users: state.users,
      }),
    }
  )
);
