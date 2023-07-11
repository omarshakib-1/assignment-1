
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
