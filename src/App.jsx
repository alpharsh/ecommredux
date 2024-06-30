import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import CardDetails from './components/CardDetails'
import Cards from './components/Cards'
import {Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart' element={<CardDetails/>}/>
      </Routes>
    </>
  )
}

export default App
