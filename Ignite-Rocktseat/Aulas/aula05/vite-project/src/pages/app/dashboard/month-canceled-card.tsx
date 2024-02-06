import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledCard(){
    return(
        <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between py-2">
            <CardTitle className="text-base font-semibold">
               Cancelamentos no (mês)
            </CardTitle>
            <DollarSign className="h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1 ">
            <span className="text-2xl font-bold tracking-tight">3</span>

            <p className="text-sm text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">-2%</span>
                {" "}    em relação a ontem
            </p>

        </CardContent>
    </Card>
    )
}