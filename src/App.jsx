import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
