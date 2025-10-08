export function ToDoKanban() {
  return (
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
  )
}
