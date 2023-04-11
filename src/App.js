import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Starred from './pages/Starred'
import Navs from './components/Navs'
import MainLayout from "./components/MainLayout"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navs />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="*" element={<div> Not Found </div>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
