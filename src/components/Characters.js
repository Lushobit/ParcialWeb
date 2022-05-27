import React from 'react'


const Characters = ({loading, characters }) => {
    
    
  return (
    <div className='"row'>
        <table className='table'>
        <thead className='text-center'>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Username</th>
                <th>Photo</th>
            </tr>
            
        {loading ?
            <h1>Cargando...</h1> 
            : 
            characters.map((item) => (
                <tr>
                    <th>{}</th>
                    <th>{item.name.first}</th>
                    <th>{item.name.last}</th>
                    <th>{item.location.city}</th>
                    <th>{item.login.username}</th>
                    <th><img src= {item.picture.medium}/></th>
                </tr>
            ))
        }
        </thead>
        </table>
        </div>
  )
}

export default Characters