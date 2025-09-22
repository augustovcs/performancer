export default function KanbanBoard() {
  return (
    <main className="ml-36 mr-14 top-6">
      <h1 className="uppercase text-3xl text-amber-50">Kanban board</h1>

      {/* Container horizontal para as colunas */}
      <section className="flex gap-6 overflow-x-auto p-6">

        {/* Coluna To Do */}
        <div className="flex-1 min-w-[280px] space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-amber-50">To do</h2>
            <button className="text-gray-100 hover:text-amber-50">+</button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Make a new Post</h3>
              <p className="text-sm text-gray-500">
                In a new post you need to tell about our new action...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 10/28/21</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Make a new Post</h3>
              <p className="text-sm text-gray-500">
                In a new post you need to tell about our new action...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 10/28/21</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Make a new Post</h3>
              <p className="text-sm text-gray-500">
                In a new post you need to tell about our new action...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 10/28/21</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Doing */}
        <div className="flex-1 min-w-[280px] space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-amber-50">In progress</h2>
            <button className="text-gray-100 hover:text-amber-50">+</button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Check design materials</h3>
              <p className="text-sm text-gray-500">
                Please have a look at Barone LLC marketing materials...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 5/7/21</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[280px] space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-amber-50">Code review</h2>
            <button className="text-gray-100 hover:text-amber-50">+</button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Check design materials</h3>
              <p className="text-sm text-gray-500">
                Please have a look at Barone LLC marketing materials...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 5/7/21</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Check design materials</h3>
              <p className="text-sm text-gray-500">
                Please have a look at Barone LLC marketing materials...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 5/7/21</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[280px] space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-amber-50">Completed</h2>
            <button className="text-gray-100 hover:text-amber-50">+</button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Check design materials</h3>
              <p className="text-sm text-gray-500">
                Please have a look at Barone LLC marketing materials...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 5/7/21</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Check design materials</h3>
              <p className="text-sm text-gray-500">
                Please have a look at Barone LLC marketing materials...
              </p>
              <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                <span>📅 5/7/21</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
