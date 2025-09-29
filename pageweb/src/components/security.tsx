import Image from "next/image"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function Security() {
  return (
    <section className="bg-white flex-1 p-8 rounded-2xl shadow-md w-[500px]">
        <header>
          <h2 className="text-2xl font-semibold mb-4 text-center">Security</h2>
        </header>

        <figure className="gap-6 mb-8">
          <Image src="/senha.jpg" alt="Password illustration" width={200} height={100} className="m-auto rounded-4xl" />
        </figure>

        <form className="space-y-6 max-w-lg">
          <div className="grid gap-2">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" placeholder="*******" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" placeholder="*******" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirm">Confirm new password</Label>
            <Input id="confirm" type="password" placeholder="*******" required />
          </div>

          <footer className="flex justify-end gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Salvar Alterações</Button>
          </footer>
        </form>
      </section>
  )
}
