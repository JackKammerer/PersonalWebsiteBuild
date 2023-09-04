import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Homelab from "./pages/Homelab"
import WriteUps from "./pages/Writeups"
import NotFound from "./pages/NotFound"

export function Router() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/homelab" element={<Homelab />} />
        <Route path="/writeups" element={<WriteUps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

