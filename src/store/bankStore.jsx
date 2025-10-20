import { create } from "zustand";
import { persist } from "zustand/middleware";
const defaultDashboardData  = {
  Info: [
    { icon: "/src/assets/house.jpeg", title: "Total Income", amount: "$1000" },
    { icon: "/src/assets/bank.jpeg", title: "Expenses", amount: "$0" },
    { icon: "/src/assets/car.png", title: "Remaining Balance", amount: "$1000" },
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
      users: [],
    
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
             dashboard: JSON.parse(JSON.stringify(defaultDashboardData)),
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

        const updatedDashboard = { ...currentUser.dashboard };
        updatedDashboard.Info = updatedDashboard.Info.map((item) => {
          if (item.title === "Total Income") return { ...item, amount: `$${newIncome}` };
          if (item.title === "Remaining Balance") return { ...item, amount: `$${newBalance}` };
          return item;
        });

        const updatedUser = {
          ...currentUser,
          balance: newBalance,
          stats: { ...currentUser.stats, income: newIncome },
          dashboard: updatedDashboard,
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

        const updatedDashboard = { ...currentUser.dashboard };
        updatedDashboard.Info = updatedDashboard.Info.map((item) => {
          if (item.title === "Expenses") return { ...item, amount: `$${newExpense}` };
          if (item.title === "Remaining Balance") return { ...item, amount: `$${newBalance}` };
          return item;
        });

        const updatedUser = {
          ...currentUser,
          balance: newBalance,
          stats: { ...currentUser.stats, expense: newExpense },
          dashboard: updatedDashboard,
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
