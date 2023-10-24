import React, { useState } from 'react'
import './Input.css'
import data from '../Data'

function Input(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  

  function handleForm() {
    const newUser = {
      name,
      description,
      status:['incomplete', 'complete'],
      id: Math.random()
    }
    console.log(newUser)
    console.log([...props.datas, newUser])
    props.setDatas([...props.datas, newUser])

  }
  return (
    <>
      <h3 className='app-name'>My Todos</h3>
      <div className='input-containers'>
        <div>
          <input onChange={(event) => setName(event.target.value)} className='input-container' type='name' placeholder='Name' />
        </div>
        <div >
          <input onChange={(event) => setDescription(event.target.value)} className='input-container' type='name' placeholder='Description' />
        </div>
        <div>
          <button onClick={handleForm} className='button'>Add Todo</button>
        </div>
      </div>

    </>
  )
}

export default Input