import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout.tsx";
import Home from "./Pages/Home.tsx";
function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
