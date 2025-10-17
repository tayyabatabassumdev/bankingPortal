import { create } from 'zustand';

// Function to safely get data from local storage
const loadState = (key, defaultValue) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return defaultValue;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from local storage", e);
        return defaultValue;
    }
};

// Function to safely save data to local storage
const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.warn("Could not save state to local storage", e);
    }
};

// Default complex data structures for the dashboard (if no user is logged in)
const defaultDashboardData = {
    // Mock user data for the sidebar/card
    user: { 
        name: "Robert Del Naja", 
        phone: "+ 1-541-754-3010", 
        balance: 2302.00 
    },
    // Mock stats data for the Statistics component
    stats: {
        income: 3430,
        expense: 2430
    },
    // Mock loan data for the LoanCard components
    loans: [
        { icon: '/src/assets/house.jpeg', title: "Family house loan", amount: "-$120,000" },
        { icon: '/src/assets/bank.jpeg', title: "Eurotrip loan", amount: "-$21,489" },
        { icon: '/src/assets/car.png', title: "Car loan", amount: "-$2,312" },
    ],
    // Mock document data for the DocRow components
    docs: [
        { name: "ID Card", status: "Verified", time: "19 Mar, at 2:51 PM" },
        { name: "Photo with ID Card", status: "Declined", time: "09 Mar, at 1:22 AM" },
        { name: "Bank information", status: "Waiting", time: "07 Mar, at 6:44 PM" },
        { name: "IBANK", status: "Declined", time: "08 Mar, at 4:50 PM" },
        { name: "Registration", status: "Verified", time: "07 Mar, at 10:01 AM" },
    ],
};


// Main Store
export const useBankStore = create((set, get) => ({
    // Load initial authentication state
    isAuthenticated: loadState('isAuthenticated', false),
    currentUser: loadState('currentUser', null),

    // Dashboard data (can be static or dynamic)
    ...defaultDashboardData,

    // --- Authentication Actions ---
    signIn: (email, password) => {
        // Simple mock sign-in logic (in a real app, you'd check a user list)
        if (email === "test@example.com" && password === "password") {
            const user = { 
                id: 1, 
                email, 
                name: "Test User", 
                phone: "+1-555-555-5555",
                balance: 5000.00 // Default starting balance
            };
            set({ isAuthenticated: true, currentUser: user });
            saveState('isAuthenticated', true);
            saveState('currentUser', user);
            return true;
        }
        return false;
    },

    signOut: () => {
        set({ isAuthenticated: false, currentUser: null });
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('currentUser');
    },

    // --- Account Management Actions ---
    creditMoney: (amount) => {
        set(state => {
            const newBalance = state.currentUser.balance + amount;
            const updatedUser = { ...state.currentUser, balance: newBalance };
            
            // Save updated user data
            saveState('currentUser', updatedUser);
            
            return { currentUser: updatedUser };
        });
    },

    cashOutMoney: (amount) => {
        set(state => {
            if (state.currentUser.balance < amount) {
                alert("Insufficient funds!");
                return state;
            }
            const newBalance = state.currentUser.balance - amount;
            const updatedUser = { ...state.currentUser, balance: newBalance };
            
            // Save updated user data
            saveState('currentUser', updatedUser);

            return { currentUser: updatedUser };
        });
    },
}));

// Expose simplified data structure for components needing static data only
// This is used by your existing components like Sidebar, Statistics, etc., to avoid refactoring them heavily.
export const useBankDashboardStore = create(() => (defaultDashboardData));