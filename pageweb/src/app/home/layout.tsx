import NavBar from "@/components/nav-bar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-10 min-h-screen">
        {children}
      </main>
    </>
  )
}
