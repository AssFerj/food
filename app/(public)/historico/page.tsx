import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { pedidos } from "@/data";
import React from "react";

export default function Historico() { 
  return (
    <main className="flex h-full flex-col justify-start pt-10">
      <section className="py-5">
        <h1 className="text-4xl font-extrabold text-center mb-10">Histórico de Pedidos</h1>
        <div className="flex justify-center items-start gap-3 px-10">
          <Table className="border">
          {/* <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="w-[100px] text-white">PEDIDO</TableHead>
              <TableHead className="text-white">DATA</TableHead>
              <TableHead className="text-right text-white">TOTAL</TableHead>
            </TableRow>
          </TableHeader>  */}
            {
              pedidos.length <= 0 ? <TableCaption>Não há pedidos.</TableCaption> : 
              pedidos.map((pedido:any) => 
                <React.Fragment key={pedido.id}>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold">Pedido {pedido.id}</TableCell>
                      <TableCell>{pedido.data}</TableCell>
                      <TableCell className="text-right text-primary">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(pedido.total)}</TableCell>
                    </TableRow>
                  </TableBody>
                </React.Fragment>
              )
            }
          </Table>
        </div>
      </section>
    </main>
  );
}
