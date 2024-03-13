'use client'
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { ShoppingBag, History } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ItemCart } from "@/components/ItemCart/ItemCart";

export const Header = () => {
    return (
        <div className="min-w-screen flex justify-between px-10 py-5">
        <Link className={'text-3xl text-primary font-extrabold'} href={'/'}>Food</Link>
        <div className="flex gap-3">
          <Link href={'/historico'} className={`${buttonVariants({ variant: "ghost" })}`}>
            <History className="mr-1"/>
            Histórico
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'default'}>
                <ShoppingBag className="mr-1"/>
                Sacola
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center text-3xl">Meu Pedido</SheetTitle>
                <SheetDescription className="flex flex-col items-center gap-3">
                  <ItemCart/>
                  {/* <h3 className="text-slate-800 text-lg">
                    <span className="mr-1">Total R$</span><span>15,00</span>
                  </h3>
                  <Button className="w-full">Enviar Pedido</Button> */}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
}