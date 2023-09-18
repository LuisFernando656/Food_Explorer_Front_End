import {Routes , Route} from 'react-router-dom'

import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Home } from '../pages/Home'
import { DishPreview } from '../pages/DishPreview'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/new' element={<NewDish/>}/>
      <Route path='/edit/:id' element={<EditDish/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/dishpreview/:id' element={<DishPreview/>}/>
    </Routes>
  )
}
