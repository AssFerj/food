import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/productType";
import { useCart } from "@/app/contexts/cartContaxt";

interface Props {
    product: Product;
}

export const ItemCart: React.FC<Props> = ({ product }) => {
    const { cartItens, removeItemFromCart } = useCart();
    const [count, setCount] = useState<number>(1);

    const sum = () => setCount((prevCount) => prevCount + 1);
    const sub = () => setCount((prevCount) => Math.max(prevCount - 1, 0));

    // Encontra o produto no carrinho com base no ID
    // const cartProduct = cartItens.find((cartItem) => cartItem.id === product.id);

    // Quantidade do produto no carrinho
    // const count = cartProduct && cartProduct.quantity ? cartProduct.quantity : 0;

    // Preço total do produto (preço unitário multiplicado pela quantidade)
    const totalPrice = product.preco ? product.preco * count : 0;

    // Verifica se o produto está no carrinho
    const isInCart = cartItens.length > 0;

    return (
        <>
            {isInCart && count <= 0 ? removeItemFromCart(product.id) : (
            <Card className="w-full">
                <CardContent className="gap-4 m-3">
                    <div className="flex items-center space-x-4 p-4">
                        <Image src={product.img} width={70} height={70} alt={product.nome} className="rounded-full" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">{product.nome}</p>
                            <p className="text-sm text-muted-foreground">{product.preco ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.preco) : 'Preço indisponível'}</p>
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
            )}
        </>
    );
}