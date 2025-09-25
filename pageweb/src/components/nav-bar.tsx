import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { LayoutDashboard, LogOut, Notebook, NotebookPen, SquareDashedKanban, UserRound } from "lucide-react";

export default function NavBar() {
  return (
    <header className="fixed left-0 top-0 h-11/12 w-20 bg-white flex flex-col items-center justify-between py-4 shadow-md mt-6 ml-10 rounded-4xl">
      <Image width={300} height={300} src="/logo.png" alt="logo" />
      <nav className="flex flex-col items-center justify-center space-y-3">
        <Link href="/dashboard" className="hover:animate-bounce hover:underline "><LayoutDashboard size={28} /></Link>
        <Link href="/board" className="hover:animate-bounce hover:underline "><SquareDashedKanban size={28} /></Link>
        <Link href="/notes" className="hover:animate-bounce hover:underline "><NotebookPen size={28} /></Link>
        <Link href="#" className="hover:animate-bounce hover:underline "><UserRound size={28} /></Link>
      </nav>
      <section className="flex flex-col items-center justify-center space-y-4">
        <Image width={50} height={50} src="/person.jpg" alt="logo" className="rounded-full"/>
        <button className="cursor-pointer">
          <LogOut />

        </button>
      </section>
    </header>
  )
}
