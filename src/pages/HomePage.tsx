import { Link, useNavigate } from "react-router"

const HomePage = () => {
   const navigate = useNavigate();

  const handleNavigateToTerms = () => {
    navigate({
      pathname: "/terms"
    })
  }
  return (
    <div>
      <h1>ini home page</h1>
      <p>Setujui syarat di bawah ini</p>
      <Link to='/terms'>Menuju Halaman Terms</Link>
      {/* Hanya Ganti di Client tidak request ke server */}
      <hr/>
      <button onClick={handleNavigateToTerms}>Redirect to Terms</button>

    </div>
  )
}

export default HomePage
