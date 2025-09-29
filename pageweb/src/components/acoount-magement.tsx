import { Button } from "./ui/button";

export default function AcoountManagement() {
  return (
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
  )
}
