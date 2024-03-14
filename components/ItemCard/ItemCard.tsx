import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/types/productType"
import React from "react"

interface Props {
    product: Product;
}

export const ItemCard: React.FC<Props> = ({product}) => { 
    return (
        <Card className={"w-72"}>
            {
                <React.Fragment key={product.id}>
                <CardHeader>
                    <CardTitle>{product.nome}</CardTitle>
                    <CardDescription>{product.descricao}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                        {product.preco}
                        </p>
                    </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                    Adicionar a Sacola
                    </Button>
                </CardFooter>
                </React.Fragment>
            }    
        </Card>
    )
}