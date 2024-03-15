import { useCart } from "@/app/contexts/cartContaxt";
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
import React, { useState } from "react"

interface Props {
    product: Product;
}

export const ItemCard: React.FC<Props> = ({product}) => { 
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      console.error('Size not selected');
      return;
    }

    const selectedPrice = product.precos?.find(
      (preco) => preco.tamanho === selectedSize
    );
    if (!selectedPrice) {
      console.error(`Price for size ${selectedSize} not found`);
      return;
    }

    const selectedProduct: Product = {
        ...product,
        precos: [selectedPrice],
      };

      addToCart(selectedProduct);
    };

    const isMultiSize = product.precos && product.precos.length > 1;

    const selectedPrice = selectedSize
      ? product.precos?.find((preco) => preco.tamanho === selectedSize)?.preco
      : product.precos && product.precos.length === 1
      ? product.precos[0].preco
      : product.preco ?? 0;

    const priceToShow = selectedPrice !== undefined
      ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedPrice)
      : product.preco !== undefined
      ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.preco)
      : '';

    return (
      <>
        <Card className="w-72">
          <CardHeader className="min-h-32">
            <CardTitle>{product.nome}</CardTitle>
            <CardDescription>{product.descricao}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {product.precos && product.precos.length > 1 ? (
              <div className="flex flex-col items-center p-4">
                <label className="text-sm font-medium leading-none mb-2">Escolha o tamanho:</label>
                <select
                  value={selectedSize || ''}
                  onChange={handleSizeChange}
                  className="border rounded-md p-1"
                >
                  <option value="" disabled hidden>Selecione o tamanho</option>
                  {product.precos.map((preco) => (
                    <option key={preco.tamanho} value={preco.tamanho}>{preco.tamanho}</option>
                  ))}
                </select>
              </div>
            ) : null}
            <div className="flex flex-col items-center p-4">
              <label className="text-sm font-medium leading-none mb-2">Valor:</label>
              <p>{priceToShow}</p>
            </div>
          </CardContent>
          <CardFooter>
            {isMultiSize ? (
              <Button
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                Adicionar a Sacola
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={handleAddToCart}
                disabled={product.preco === undefined}
              >
                Adicionar a Sacola
              </Button>
            )}
          </CardFooter>
        </Card>
      </>   
    )
}