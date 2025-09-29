import { X } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";

export default function Notifications() {
  return (
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
  )
}
