import "./App.css"
import NavbarComponent from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoutes from "./routes/AppRoutes"
import  ReactDOM  from "react-dom"

function App() {
  return (
    <>
      <NavbarComponent />
      <AppRoutes/>
    </>
  )
}

export default App