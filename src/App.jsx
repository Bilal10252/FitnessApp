import './App.css'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import Footer from './Components/Footer'

function App() {
 

  return (
    <Box >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail></ExerciseDetail>}></Route>
      </Routes>

      <Footer></Footer>
      
    </Box>

  )
}

export default App
