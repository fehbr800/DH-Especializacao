import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
    return (

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Pedido: asdsa45wew54a
                </DialogTitle>
                <DialogDescription>
                    Detalhes do pedido
                </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">Matheus Emanoel</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">(xx)x xxxx-xxxx</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">há 3 minutos</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Produtos</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right" >Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                       
                        <TableRow>
                        <TableCell >Pizza Frango e Catupiry</TableCell>
                        <TableCell className="text-right">2</TableCell>
                        <TableCell className="text-right">50,00</TableCell>
                        <TableCell className="text-right">100,00</TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell>Pizza Frango e Bacon</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">50,00</TableCell>
                        <TableCell className="text-right">50,00</TableCell>
                        </TableRow>

        
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right">150,00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>

            </div>
        </DialogContent>
    )
}