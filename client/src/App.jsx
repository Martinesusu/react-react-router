import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ViewProductPage />} />
        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/product/:id/edit" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
