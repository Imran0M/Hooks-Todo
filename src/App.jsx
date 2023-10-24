import { useState } from 'react'
import './App.css'
import Input from './Components/Input/Input'
import UserList from './Components/UserList/UserList'
import data from './Components/Data'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [datas, setDatas] = useState(data)

  return (
    <>
    <Input datas={datas} setDatas={setDatas} />
    <UserList datas={datas} setDatas={setDatas}  />
    </>
  )
}

export default App
