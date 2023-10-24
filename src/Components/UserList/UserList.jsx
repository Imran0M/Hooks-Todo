import React, { useState } from 'react'
import './UserList.css'
function UserList(props) {
    const [change, setChange] = useState('')
    function handleChange(e) {
        setChange(e.target.value)
    }
  
    function deleteHandler(items){
       const deleteUser = props.datas.filter((data)=>(data.id !== items))
       props.setDatas(deleteUser)
       console.log(deleteUser)
    }

    function statusHandler(){

    }

    console.log(change, "status");
    return (
        <div >
            <div className='todo_containers'>
                <p>My Todos</p>
                <p>Status Filter: <span> <button onClick={statusHandler} className='filterButton'>Filter</button></span></p>
            </div>
            <div className='contain'>{props.datas.map((items, id ) => (
                <div key={id} className='card-container'>
                    <p>Name:{items.name}</p>
                    <p>Description:{items.description}</p>
                    <span>Status:
                        <select className='option-style' onChange={handleChange}>
                            {items.status.map((i,inx) => (<option key={inx}>{i}</option>))}
                        </select>
                    </span>
                    <div className='butto'>
                        <button onClick={()=>editHandler(items.id)} className='edit'>Edit</button>
                        <button onClick={()=>deleteHandler(items.id)}className='delete'>Delete</button>
                    </div>
                </div>
            ))}</div>
        </div>
    )
}

export default UserList