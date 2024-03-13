import { BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useEffect, useState } from "react";

export const ItemCart = () => {
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<number>(0);
    
    const sum = () => setCount(count + 1)
    const sub = () => setCount(count - 1)
    
    useEffect(() => {
        const totalValue = () => setValue(value * count)
        totalValue()
    },[count, value])
       
    return (
        <Card className="w-full">
            <CardContent className="gap-4 border rounded m-3">
                <div className=" flex items-center space-x-4 p-4">
                    <BellRing />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                        Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                        Send notifications to device.
                        </p>
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <div className="flex">
                        <Button className="w-full rounded-e-none" onClick={sub}>-</Button>
                        <Button variant={'ghost'} className="max-w-20 rounded-none border">{count}</Button>
                        <Button className="w-full rounded-l-none" onClick={sum}>+</Button>
                    </div>
                    <div>
                        <h3 className="text-primary text-sm mt-3">R$ 15,00</h3>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-3 border-t">
                <h3 className="text-slate-800 text-lg mt-3">
                    <span className="mr-1">Total R$</span><span>{value},00</span>
                </h3>
                <Button className="w-full">Enviar Pedido</Button>
            </CardFooter>
            </Card>
    )
}