'use client'
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import { ShoppingBag, History } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div className="min-w-screen flex justify-between px-10 py-5">
        <Button className={'text-xl'} variant={'link'}>Food</Button>
        <div className="flex gap-3">
          <Link href={''} className={`${buttonVariants({ variant: "ghost" })}`}>
            <History className="mr-1"/>
            Histórico
          </Link>
          <Sheet>
            <SheetTrigger>
              <Button variant={'default'}>
                <ShoppingBag className="mr-1"/>
                Sacola
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center text-3xl">Meu Pedido</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <section className="text-center px-10 py-5">
        <h1 className="text-5xl font-extrabold mb-5">Nosso Cardápio</h1>
        <p className="text-slate-400">Clique em adicionar para colocar os produtos na sacola de compras, em seguida envie seu pedido.</p>
      </section>

      <section className="px-10 py-5 flex flex-row justify-center gap-10">
        <Tabs defaultValue="pizzas" className="w-full text-center">
          <TabsList className="bg-primary text-white mb-5">
            <TabsTrigger value="pizzas">
              <Image src={'/pizza.png'} alt="Pizzas" width={20} height={20} className="mr-3"/>
              Pizzas
            </TabsTrigger>
            <TabsTrigger value="hamburguers">
            <Image src={'/burger.png'} alt="Hamguergueres" width={20} height={20} className="mr-3"/>
              Hamburgueres
            </TabsTrigger>
            <TabsTrigger value="drinks">
            <Image src={'/drink.png'} alt="Drinks" width={20} height={20} className="mr-3"/>
              Bebidas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pizzas" className="flex justify-center gap-8">
            <ItemCard/>
            <ItemCard/>
          </TabsContent>
          <TabsContent value="hamburguers" className="flex justify-center gap-8">
            <ItemCard/>
            <ItemCard/>
          </TabsContent>
          <TabsContent value="drinks" className="flex justify-center gap-8">
            <ItemCard/>
            <ItemCard/>
          </TabsContent>
        </Tabs>
      </section>

    </main>
  );
}
