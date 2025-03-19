import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={""}>
      <Route index element={<Home/>}/>
      <Route path="/:movieParam" element={<MovieDetail/>}/>
  </Route>
  ))

  return (
    <main className="bg-indigo-400">
    <RouterProvider router={router}/>
    </main>
  )
}

export default App
