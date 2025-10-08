export function InProgressKanban() {
  return (
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
  )
}
