'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(11),
    endereco: z.string().min(2).max(100),
    bairro: z.string().min(2).max(50),
    cidade: z.string().min(2).max(50),
    estado: z.string().min(2).max(50),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      endereco: "",
      bairro: "",
      cidade: "",
      estado: ""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <main className="flex h-full flex-col justify-start pt-10">
      <section className="py-5">
        <h1 className="text-4xl font-extrabold text-center mb-10">Finalzar Pedido</h1>
        <div className="flex justify-center items-start flex-wrap gap-3">
          <Card>
            <CardHeader>
              <CardTitle>Dados Pessoais</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" />
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" />
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="text" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Endereço de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="endereco">Endereço</Label>
              <Input id="endereco" type="text" />
              <Label htmlFor="bairro">Bairro</Label>
              <Input id="bairro" type="text" />
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" type="text" />
              <Label htmlFor="estado">Estado</Label>
              <Input id="estado" type="text" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="totalValue">Total <span className="font-bold">R$ 50,00</span></Label>
            </CardContent>
            <CardFooter>
              <Button variant={'default'} className="w-full">Finalizar Pedido</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
