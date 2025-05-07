import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context";
import HomeView from "../src/views/HomeView";
import './App.css'

function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
