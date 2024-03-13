import { BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export const ItemCart = () => {
       
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
                <div className="flex w-full">
                    <Button className="w-full rounded-e-none">-</Button>
                    <Button variant={'ghost'} className="w-full rounded-none border">0</Button>
                    <Button className="w-full rounded-l-none">+</Button>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-3 border-t">
                <h3 className="text-slate-800 text-lg mt-3">
                    <span className="mr-1">Total R$</span><span>15,00</span>
                </h3>
                <Button className="w-full">Enviar Pedido</Button>
            </CardFooter>
            </Card>
    )
}