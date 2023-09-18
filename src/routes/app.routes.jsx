import {Routes , Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishPreview } from '../pages/DishPreview'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dishpreview/:id' element={<DishPreview/>}/>
    </Routes>
  )
}
