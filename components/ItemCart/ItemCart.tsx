import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/productType";
import { useCart } from "@/app/contexts/cartContaxt";

interface Props {
    product: Product;
}

export const ItemCart: React.FC<Props> = ({product}) => {
    const [count, setCount] = useState<number>(0)
    const {addToCart} = useCart()
    
    const sum = () => setCount(count + 1)
    const sub = () => setCount(count - 1)
    
    const totalPrice = product.preco * count
       
    return (
        <Card className="w-full">
   
            <CardContent className="gap-4 m-3">
                <div className=" flex items-center space-x-4 p-4">
                    <Image src={product.img} width={70} height={70} alt={product.nome} className="rounded-full" />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {product.nome}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.preco)}
                        </p>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex w-full justify-between items-center -mt-10">
                <div className="flex">
                    <Button className="w-full rounded-e-none" onClick={sub}>-</Button>
                    <Button variant={'ghost'} className="max-w-20 rounded-none border">{count}</Button>
                    <Button className="w-full rounded-l-none" onClick={sum}>+</Button>
                </div>
                <div>
                    <h3 className="text-primary text-sm font-bold mt-3">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totalPrice)}</h3>
                </div>
            </CardFooter>
            </Card>
    )
}