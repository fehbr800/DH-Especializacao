import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function MonthOrdersCard(){
    return(
        <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between py-2">
            <CardTitle className="text-base font-semibold">
               Pedidos total no (mês)
            </CardTitle>
            <Utensils className="h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1 ">
            <span className="text-2xl font-bold tracking-tight">30 pedidos</span>

            <p className="text-sm text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">+8%</span>
                {" "}    em relação ao mês passado
            </p>

        </CardContent>
    </Card>
    )
}