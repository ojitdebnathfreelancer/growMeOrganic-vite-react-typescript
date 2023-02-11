import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './Componets/Form/Form'
import SecondPage from './Componets/SecondPage/SecondPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />}></Route>
      <Route path='/secondpage' element={<SecondPage />}></Route>
    </Routes>
  )
}

export default App
