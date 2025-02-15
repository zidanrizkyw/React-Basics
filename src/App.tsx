import { Route, Routes } from "react-router"
import TermsPage from "./pages/TermsPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductListPage from "./pages/ProductListPage"
import FormPage from "./pages/FormPage"
import RHFPage from "./pages/RHFPage"
import EmployeesPage from "./pages/EmployeesPage"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/terms" element={<TermsPage/>}/>
      <Route path="/product-list" element={<ProductListPage/>}/>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="/rhf" element={<RHFPage/>}/>
      <Route path="employees" element={<EmployeesPage/>}/>

      <Route path="/product/:productSlug" element={<ProductDetailPage/>}/>d

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>

  )
}

export default App
