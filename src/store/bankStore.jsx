import { create } from "zustand";
import house from "../assets/house.jpeg";
import bank from "../assets/bank.jpeg";
import car from "../assets/car.png";
export const useBankStore = create((set) => ({
  user: {
    name: "Robert Del Naja",
    phone: "+1-541-754-3010",
    balance: 2302.0,
  },
 loans: [
    { icon: house, title: "Family house loan", amount: "-$120,000" }, // Added icon: house
    { icon: bank, title: "Eurotrip loan", amount: "-$21,489" },       // Added icon: bank
    { icon: car, title: "Car loan", amount: "-$2,312" },            // Added icon: car
  ],
  docs: [
    { name: "ID Card", status: "Verified", time: "19 Mar, at 2:51 PM" },
    { name: "Photo with ID Card", status: "Declined", time: "09 Mar, at 1:22 AM" },
    { name: "Bank information", status: "Waiting", time: "07 Mar, at 6:44 PM" },
    { name: "IBANK", status: "Declined", time: "08 Mar, at 4:50 PM" },
    { name: "Registration", status: "Verified", time: "07 Mar, at 10:01 AM" },
  ],
  stats: {
    income: 3430,
    expense: 2430,
  },
}));
