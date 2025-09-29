import Image from "next/image"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export default function Profile() {
  return (
    <section className="bg-white flex-1 p-8 rounded-2xl shadow-md w-[500px]">
        <header>
          <h2 className="text-2xl font-semibold mb-2">My Profile</h2>
        </header>

        {/* Foto */}
        <figure className="gap-6 mb-8 text-center">
          <Image
            src="/person.jpg"
            alt="Profile photo"
            width={130}
            height={100}
            className="m-auto rounded-4xl"
          />
          <figcaption className="m-5 space-y-1">
            <h3 className="text-xl">Lucas Dias</h3>
            <Button variant="outline" className="mt-2">Alterar Foto</Button>
          </figcaption>
        </figure>

        {/* Formulário de perfil */}
        <form className="space-y-6 max-w-lg">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" defaultValue="Lucas Dias" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="lucasdias@gmail.com" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="cargo">Position</Label>
            <Input id="Position" type="text" defaultValue="Software Engineer" required />
          </div>

          <footer className="flex justify-end gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Salvar Alterações</Button>
          </footer>
        </form>
      </section>
  )
}
