
import { Helmet } from "react-helmet-async"
import { MonthCard } from "./month-card"
import { MonthOrdersCard } from "./month-orders-card"
import { DayMonthCard } from "./day-month-card"
import { MonthCanceledCard } from "./month-canceled-card"
import { RevenueChart } from "./revenue-chart"
import { PopularProductsChart } from "./popular-products-chart"

export function Dashboard() {
    return (
        <>
            <Helmet title="Dashboard" />
            <div className="flex flex-col gap-4">

                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="grid grid-cols-4 gap-4">
                <MonthCard/>
                <MonthOrdersCard/>
                <DayMonthCard/>
                <MonthCanceledCard/>
                </div>
                <div className="grid grid-cols-9 gap-4">
                    <RevenueChart/>
                    <PopularProductsChart/>
                </div>
            </div>
        </>
    )

}