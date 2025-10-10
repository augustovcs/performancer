import { api } from "@/lib/api"

type Task = {
  id: number
  title: string
  description: string
  status: number
  priority?: number
  created_At?: string
  updated_At?: string
  finished_At?: string
  user_ID?: number
}

export async function updateTaskStatus(taskId: number, newStatus: number, tasks: Task[]) {
  const currentTask = tasks.find(t => t.id === taskId)
  if (!currentTask) {
    console.error("Tarefa não encontrada no estado local.")
    return
  }

  // envia todos os campos exigidos pelo DTO
  const updatedTask = {
    title: currentTask.title,
    description: currentTask.description,
    status: newStatus,
    priority: currentTask.priority ?? 0,
    created_At: currentTask.created_At ?? new Date(),
    updated_At: new Date(),
    finished_At: currentTask.finished_At ?? new Date(),
  }
  try {
    await api.patch(`api/auth/${taskId}`, updatedTask)
    console.log(`✅ Task ${taskId} atualizada para status ${newStatus}`)
  } catch (err) {
    console.error("Erro ao atualizar status:", err)
  }
}
