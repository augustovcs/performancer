import { CodeReviewKanban } from "./code-review-kanban";
import { InProgressKanban } from "./in-progress-kanban";
import { ToDoKanban } from "./to-do-kanban";

export default function KanbanBoard() {
  return (
    <main className="mx-11 mt-9 flex flex-col space-y-4">
      <h1 className="uppercase text-3xl text-amber-50">Kanban board</h1>

      {/* Container horizontal para as colunas */}
      <section className="flex gap-6 overflow-x-auto p-6">

        {/* Coluna To Do */}
        <ToDoKanban />

        {/* Coluna In progress */}
        <InProgressKanban />

        {/* Coluna Code review */}
        <CodeReviewKanban />

        {/* Coluna Completed */}
        

      </section>
    </main>
  )
}
