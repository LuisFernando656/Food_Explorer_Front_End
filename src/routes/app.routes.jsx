import {Routes , Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishePreview } from '../pages/DishePreview'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dishepreview/:id' element={<DishePreview/>}/>
    </Routes>
  )
}
