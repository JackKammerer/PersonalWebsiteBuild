import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Homelab from "./pages/Homelab"
import Projects from "./pages/Projects"
import Jobs from "./pages/Jobs"
import NotFound from "./pages/NotFound"

export function Router() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/homelab" element={<Homelab />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

