import './App.css'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Employe from './component/Employe/Employe'
import Form from './component/form/Form'
import { useDispatch } from 'react-redux'
import { getEmployes } from './store/Thunk/FetchEmployes'
import { useEffect } from 'react'
import BinCard from './component/BinCard'

function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(getEmployes())
    })()
  }, [])


  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 p-10 flex justify-center">
          <Form />
          <BinCard />
          <Employe />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
