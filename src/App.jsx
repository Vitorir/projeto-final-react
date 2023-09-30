import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events/Events"
import EventDetail from "./Pages/EventDetail/EventDetail"
import EventCreate from "./Pages/EventCreate/EventCreate"
import Menu from "./Components/Menu"

function App() {

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/events/:id" element={<EventDetail/>}></Route>
        <Route path="/create-event" element={<EventCreate/>}></Route>
      </Routes>
    </BrowserRouter>    

    </>
  )
}

export default App
