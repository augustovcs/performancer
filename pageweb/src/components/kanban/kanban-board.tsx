'use client'
import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { DndContext, useSensors, useSensor, PointerSensor, DragEndEvent } from "@dnd-kit/core"
import ColumnKanban from "./column-kanban"
import { updateTaskStatus } from "./update-task-status"

// Tipagem
interface Task {
  id: number
  title: string
  description: string
  status: number // 0 = To Do, 1 = In Progress, 2 = Code Review, 3 = Completed
  created_At: string
}

// --- COMPONENTE PRINCIPAL (BOARD) ---
export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([])

  // Buscar tasks do backend
  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5197/api/auth/get-all`)
      setTasks(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => { fetchTasks() }, [fetchTasks])

  // Drag & Drop
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    if (over.id.toString().startsWith("column-")) {
    const destinationStatus = Number(over.id.toString().replace("column-", ""));
    const activeTaskId = Number(active.id.toString().replace("task-", ""));
    const activeTask = tasks.find(t => t.id === activeTaskId);
    if (!activeTask) return;

    if (activeTask.status !== destinationStatus) {
      const updatedTasks = tasks.map(task =>
        task.id === activeTaskId ? { ...task, status: destinationStatus } : task
      );
      setTasks(updatedTasks);

      // passa o array de tasks junto
      await updateTaskStatus(activeTask.id, destinationStatus, tasks);
    }
  }
  }

  // Separar tasks por coluna
  const toDo = tasks.filter(t => t.status === 0)
  const inProgress = tasks.filter(t => t.status === 1)
  const codeReview = tasks.filter(t => t.status === 2)
  const completed = tasks.filter(t => t.status === 3)

  return (
    <main className="mx-11 mt-9 flex flex-col space-y-4">
      <h1 className="uppercase text-3xl text-amber-50">Kanban board</h1>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <section className="flex gap-6 overflow-x-auto p-6">
          <ColumnKanban status={0} title="To Do" tasks={toDo} />
          <ColumnKanban status={1} title="In Progress" tasks={inProgress} />
          <ColumnKanban status={2} title="Code Review" tasks={codeReview} />
          <ColumnKanban status={3} title="Completed" tasks={completed} />
        </section>
      </DndContext>
    </main>
  )
}
