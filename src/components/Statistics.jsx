import { useMemo } from "react";
import { useBankStore } from "../store/bankStore";
import StatsSummary from "./StatsSummary";
import BarChart from "./BarChart";
const defaultStats = { income: 0, expense: 0 };
const Statistics = () => {
    const currentUser = useBankStore((state) => state.currentUser);
    const stats = currentUser?.stats || defaultStats;
    const barChartData = useMemo(() => {
        const base = [
            { value: stats.income * 0.3, isGreen: true },
            { value: stats.expense * 0.2, isGreen: false },
            { value: stats.income * 0.1, isGreen: true },
            { value: stats.expense * 0.8, isGreen: false },
            { value: stats.income * 0.6, isGreen: true },
        ];
        return base.map((d) => ({
            ...d,
            value: Math.round(d.value) || 1,
        }));
    }, [stats]); 
    return (
        <div
            className="
                bg-white 
                rounded-xl 
                shadow-md 
                p-5 
                w-full 
                sm:w-full 
                lg:w-[300px] 
                transition-all 
                duration-300 
                ease-in-out
            "
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">Statistics</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400 hover:text-gray-600 transition"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>
            </div>
            <StatsSummary stats={stats} />
            <BarChart barChartData={barChartData} />
        </div>
    );
};
export default Statistics;