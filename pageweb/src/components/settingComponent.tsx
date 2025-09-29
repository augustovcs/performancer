import Image from "next/image"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { X } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"

export default function SettingsComponents() {
  return (
    <main className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 space-x-2 mx-11 mt-9 flex-col 2xl:items-center space-y-3">

      {/* Perfil */}
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

      {/* Notificações */}
      <section className="bg-white flex-1 p-8 rounded-2xl shadow-md w-[500px]">
        <header>
          <h2 className="text-2xl font-semibold mb-5">Your Notifications</h2>
        </header>

        <div className="mx-2">
          <span className="bg-gray-200 p-2 rounded-t-2xl">View all</span>
          <ScrollArea className="h-[500px] rounded-md border bg-gray-200">
            <div className="flex flex-col mt-1 bg-gray-200 rounded-b-4xl rounded-tr-2xl">

              <article className="p-3 flex bg-white m-1 rounded-2xl items-center">
                <Image src="/sino.jpg" width={50} height={50} alt="Bell" className="rounded-4xl" />
                <div className="px-2">
                  <h3 className="font-semibold">Tasks pending</h3>
                  <p className="text-sm text-gray-400">Congratulations, another few tasks completed today</p>
                </div>
                <Button className="bg-white hover:bg-white text-red-700 cursor-pointer"><X fontSize={12} /></Button>
              </article>

              <article className="p-3 flex bg-white m-1 rounded-2xl items-center">
                <Image src="/sino.jpg" width={50} height={50} alt="Bell" className="rounded-4xl" />
                <div className="px-2">
                  <h3 className="font-semibold">Tasks pending</h3>
                  <p className="text-sm text-gray-400">Congratulations, another few tasks completed today</p>
                </div>
                <Button className="bg-white hover:bg-white text-red-700 cursor-pointer"><X /></Button>
              </article>
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* Segurança */}
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

      {/* Gerenciamento de conta */}
      <section className="bg-white flex-1 p-8 rounded-2xl shadow-md w-[500px] lg:h-[250px]">
        <header>
          <h2 className="text-2xl font-semibold mb-4 text-center">Account Management</h2>
        </header>

        <article>
          <h3 className="text-2xl font-bold">Delete account</h3>
          <p className="ml-2">You can delete your account, but remember that this action is irreversible.</p>
          <Button className="bg-red-600 text-white m-2">Delete Account</Button>
        </article>
      </section>
    </main>
  )
}
