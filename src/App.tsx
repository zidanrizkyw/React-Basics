import Welcome from "./assets/components/Welcome"
import Header from "./assets/components/Header"
import ProfileCard from "./assets/components/ProfileCard"
import Counter from "./assets/components/Counter"
import Likes from "./assets/components/Likes"
import { Route, Routes } from "react-router"
import TermsPage from "./pages/TermsPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductListPage from "./pages/ProductListPage"
import FormPage from "./pages/FormPage"
import RHFPage from "./pages/RHFPage"

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
}

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Dhika",
    year: 1995,
    id: 1,
  },
  {
    job: "Creator",
    name: "Dhika",
    year: 2000,
    id: 2,
  },
  {
    job: "Tech Lead",
    name: "PZN",
    year: 1996,
    id: 3,
  },
  {
    job: "Pengangguran",
    name: "Ega",
    year: 2000,
    id: 4,
  },
]

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/terms" element={<TermsPage/>}/>
      <Route path="/product-list" element={<ProductListPage/>}/>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="/rhf" element={<RHFPage/>}/>

      <Route path="/product/:productSlug" element={<ProductDetailPage/>}/>d

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>

  )
}

export default App
