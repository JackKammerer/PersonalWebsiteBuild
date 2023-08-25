import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Homelab from "./pages/Homelab"
import About from "./pages/About"

export function Router() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/homelab" element={<Homelab />} />
        <Route path="*" element={<About />} />
      </Routes>
    </>
  )
}

