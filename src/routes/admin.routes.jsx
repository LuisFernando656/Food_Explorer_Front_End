import {Routes , Route} from 'react-router-dom'

import { NewDishe } from '../pages/NewDishe'
import { EditDishe } from '../pages/EditDishe'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/new' element={<NewDishe/>}/>
      <Route path='/edit' element={<EditDishe/>}/>
    </Routes>
  )
}
