import { BrowserRouter } from "react-router-dom";

import { useAuth } from '../hooks/auth'

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes(){
  const { user } = useAuth()

  function AccessRoute() {
    if(user.isAdmin) {
      return <AdminRoutes/>
    }else{
      return <AppRoutes/>
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}