import "./App.css"
import NavbarComponent from './components/Navbar/Navbar/Navbar.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <NavbarComponent />
      <AppRoutes />
    </>
  )
}

export default App