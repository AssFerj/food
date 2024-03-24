'use client'
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/data";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex h-full flex-col justify-start pt-10"> 
      <section className="text-center px-10 py-5">
        <h1 className="text-5xl font-extrabold mb-5">Nosso Cardápio</h1>
        <p className="text-slate-400">Clique em adicionar para colocar os produtos na sacola de compras, em seguida envie seu pedido.</p>
      </section>

      <section className="px-10 pt-5 flex flex-row justify-center gap-10">
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
            {
              products.catogorias.pizzas.map(product => (
                <ItemCard key={product.id} product={product}/>
              ))
            }
          </TabsContent>
          <TabsContent value="hamburguers" className="flex justify-center gap-8">
          {
              products.catogorias.hamburgueres.map(product => (
                <ItemCard key={product.id} product={product}/>
              ))
            }
          </TabsContent>
          <TabsContent value="drinks" className="flex justify-center gap-8">
          {
              products.catogorias.bebidas.map(product => (
                <ItemCard key={product.id} product={product}/>
              ))
            }
          </TabsContent>
        </Tabs>
      </section>

    </main>
  );
}
