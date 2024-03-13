import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Login() {
    return (
        <main className="flex h-screen justify-center items-center">
            <Tabs defaultValue="login" className="w-[400px] mx-10">
                <TabsList className="grid w-full grid-cols-2 bg-primary">
                    <TabsTrigger value="login" className={`${'bg-primary'?'text-white':'text-slate-700'}`}>Acessar</TabsTrigger>
                    <TabsTrigger value="register" className={`${'bg-primary'?'text-white':'text-slate-700'}`}>Cadastrar</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                    <CardHeader>
                        <CardTitle>Acesse sua conta</CardTitle>
                        {/* <CardDescription>
                        Make changes to your login here. Click save when done.
                        </CardDescription> */}
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" placeholder="axemplo@mail.com" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Entrar</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                        Change your password here. After saving, be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    )
}