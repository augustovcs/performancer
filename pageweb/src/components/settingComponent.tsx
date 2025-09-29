import Profile from "./profile"
import Notifications from "./notifications"
import Security from "./security"
import AcoountManagement from "./acoount-magement"

export default function SettingsComponents() {
  return (
    <main className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 space-x-2 mx-11 mt-9 flex-col 2xl:items-center space-y-3">

      {/* Perfil */}
      <Profile />
      {/* Notificações */}
      <Notifications />
      {/* Segurança */}
      <Security />
      {/* Gerenciamento de conta */}
      <AcoountManagement />
    </main>
  )
}
