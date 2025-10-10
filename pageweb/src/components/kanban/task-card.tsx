import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type TaskCardProps = {
  id: number
  title: string
  description: string
  created_At: string
}

export function TaskCard({ task }: { task: TaskCardProps }) {
const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: `task-${task.id}` })

const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab"
  }


  return (
    <div ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-500">
        {task.description}
      </p>
      <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
        <span>📅 {task.created_At}</span>
      </div>
    </div>
  )
}
