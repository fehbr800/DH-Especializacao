import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line,
} from 'recharts'

import colors from 'tailwindcss/colors'

const data = [
    { date: '10/12', revenue: 1000 },
    { date: '11/12', revenue: 1050 },
    { date: '12/12', revenue: 2000 },
    { date: '13/12', revenue: 1200 },
    { date: '14/12', revenue: 1300 },
    { date: '15/12', revenue: 1000 },
]


export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between py-8">

                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita no periodo
                    </CardTitle>
                    <CardDescription>
                        Receita diária no periodo
                    </CardDescription>
                </div>

            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey={"date"} axisLine={false} tickLine={false} dy={16} />
                        <YAxis stroke="#888" axisLine={false} tickLine={false} width={70} tickFormatter={(value: number) => value.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })} />
                        <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['500']} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}