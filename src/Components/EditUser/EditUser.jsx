import React from 'react'

function EditUser() {
  return (
   
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
  )
}

export default EditUser