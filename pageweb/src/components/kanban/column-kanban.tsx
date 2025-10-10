import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { TaskCard } from "./task-card"

interface Task {
  id: number
  title: string
  description: string
  status: number
  created_At: string
}

export default function ColumnKanban({ status, title, tasks }: { status: number, title: string, tasks: Task[] }){
  const { setNodeRef } = useDroppable({ id: `column-${status}` })

  return (
    <div
      ref={setNodeRef}
      className="flex-1 min-w-[280px] min-h-full space-y-3"
    >
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-semibold text-amber-50">{title}</h2>
        <button className="text-gray-100 hover:text-amber-50">+</button>
      </div>
      <SortableContext items={tasks.map(t => `task-${t.id}`)} strategy={verticalListSortingStrategy}>
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </SortableContext>
      {tasks.length === 0 && <p className="text-gray-500 p-3">Nenhuma tarefa.</p>}
    </div>

  )
}
