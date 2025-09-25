import { CalendarDays } from "lucide-react";
import { Badge } from "./ui/badge";

export default function MyNotes() {
  return (
    <main className="mx-11 mt-9 flex flex-col space-y-4">
      <h1 className="uppercase text-3xl text-amber-50">My Notes</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <article className="bg-[#FFFFFF] p-4 rounded-lg shadow-md space-y-3">
          <div className="flex items-start justify-between">
            <Badge
              variant="secondary"
              className="bg-blue-300 text-white dark:bg-blue-600"
            >
              client
            </Badge>
            <button>...</button>
          </div>
          <h2 className="font-serif px-3">Reviw UX Feedback</h2>
          <p className="text-sm text-gray-600 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero accusamus dolores amet ipsum, ex fuga nisi alias. Quaerat est ipsam cum vero pariatur aspernatur. Cum aspernatur distinctio doloremque vitae.
          </p>
          <hr className="border-t border-gray-300" />
          <div className="flex items-center mt-6">
            <time dateTime="2024-03-13" className="flex items-center text-sm text-gray-500 ml-auto">
              <CalendarDays className="w-4 h-4 mr-1" />
              Mar 13, 2024
            </time>
          </div>
        </article>
        <article className="bg-[#FFFFFF] p-4 rounded-lg shadow-md space-y-3">
          <div className="flex items-start justify-between">
            <Badge
              variant="secondary"
              className="bg-blue-300 text-white dark:bg-blue-600"
            >
              client
            </Badge>
            <button>...</button>
          </div>
          <h2 className="font-serif px-3">Reviw UX Feedback</h2>
          <p className="text-sm text-gray-600 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero accusamus dolores amet ipsum, ex fuga nisi alias. Quaerat est ipsam cum vero pariatur aspernatur. Cum aspernatur distinctio doloremque vitae.
          </p>
          <hr className="border-t border-gray-300" />
          <div className="flex items-center mt-6">
            <time dateTime="2024-03-13" className="flex items-center text-sm text-gray-500 ml-auto">
              <CalendarDays className="w-4 h-4 mr-1" />
              Mar 13, 2024
            </time>
          </div>
        </article>
        <article className="bg-[#FFFFFF] p-4 rounded-lg shadow-md space-y-3">
          <div className="flex items-start justify-between">
            <Badge
              variant="secondary"
              className="bg-blue-300 text-white dark:bg-blue-600"
            >
              client
            </Badge>
            <button>...</button>
          </div>
          <h2 className="font-serif px-3">Reviw UX Feedback</h2>
          <p className="text-sm text-gray-600 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero accusamus dolores amet ipsum, ex fuga nisi alias. Quaerat est ipsam cum vero pariatur aspernatur. Cum aspernatur distinctio doloremque vitae.
          </p>
          <hr className="border-t border-gray-300" />
          <div className="flex items-center mt-6">
            <time dateTime="2024-03-13" className="flex items-center text-sm text-gray-500 ml-auto">
              <CalendarDays className="w-4 h-4 mr-1" />
              Mar 13, 2024
            </time>
          </div>
        </article>
        <article className="bg-[#FFFFFF] p-4 rounded-lg shadow-md space-y-3">
          <div className="flex items-start justify-between">
            <Badge
              variant="secondary"
              className="bg-blue-300 text-white dark:bg-blue-600"
            >
              client
            </Badge>
            <button>...</button>
          </div>
          <h2 className="font-serif px-3">Reviw UX Feedback</h2>
          <p className="text-sm text-gray-600 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero accusamus dolores amet ipsum, ex fuga nisi alias. Quaerat est ipsam cum vero pariatur aspernatur. Cum aspernatur distinctio doloremque vitae.
          </p>
          <hr className="border-t border-gray-300" />
          <div className="flex items-center mt-6">
            <time dateTime="2024-03-13" className="flex items-center text-sm text-gray-500 ml-auto">
              <CalendarDays className="w-4 h-4 mr-1" />
              Mar 13, 2024
            </time>
          </div>
        </article>
        <article className="bg-[#FFFFFF] p-4 rounded-lg shadow-md space-y-3">
          <div className="flex items-start justify-between">
            <Badge
              variant="secondary"
              className="bg-blue-300 text-white dark:bg-blue-600"
            >
              client
            </Badge>
            <button aria-label="More options">...</button>
          </div>
          <h2 className="font-serif px-3">Reviw UX Feedback</h2>
          <p className="text-sm text-gray-600 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero accusamus dolores amet ipsum, ex fuga nisi alias. Quaerat est ipsam cum vero pariatur aspernatur. Cum aspernatur distinctio doloremque vitae.
          </p>
          <hr className="border-t border-gray-300" />
          <div className="flex items-center mt-6">
            <time dateTime="2024-03-13" className="flex items-center text-sm text-gray-500 ml-auto">
              <CalendarDays className="w-4 h-4 mr-1" />
              Mar 13, 2024
            </time>
          </div>
        </article>
        <article className=" p-4 rounded-lg space-y-3">
          <button className="flex items-center justify-center w-full h-full text-gray-400 hover:text-gray-600 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
            + Add New Note
          </button>
        </article>
      </section>
    </main>
  )
}
