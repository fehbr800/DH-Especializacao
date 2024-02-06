import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DayMonthCard(){
    return(
        <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between py-2">
            <CardTitle className="text-base font-semibold">
                Pedidos (dia)
            </CardTitle>
            <Utensils className="h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1 ">
            <span className="text-2xl font-bold tracking-tight">14</span>

            <p className="text-sm text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">-2%</span>
                {" "}    em relação a ontem
            </p>

        </CardContent>
    </Card>
    )
}