import {Routes , Route} from 'react-router-dom'

import { NewDishe } from '../pages/NewDishe'
import { EditDishe } from '../pages/EditDishe'
import { Home } from '../pages/Home'
import { DishePreview } from '../pages/DishePreview'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/new' element={<NewDishe/>}/>
      <Route path='/edit' element={<EditDishe/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/dishepreview/:id' element={<DishePreview/>}/>
    </Routes>
  )
}
