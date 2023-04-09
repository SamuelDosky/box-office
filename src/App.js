import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Starred from './pages/Starred'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="*" element={<div> Not Found </div>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
