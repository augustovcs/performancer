interface Task {
  id: number
  title: string
  description: string
  status: number // 0 = To Do, 1 = In Progress, 2 = Code Review, 3 = Completed
  created_At: string
}
