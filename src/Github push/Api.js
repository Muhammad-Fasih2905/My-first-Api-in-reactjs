import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const Api = () => {
 
const [list,setList] = useState([])

useEffect(() =>{
    let Data = {
        method: "Get",
        url:`https://jsonplaceholder.typicode.com/users`,
        headers: {
            "content-type" : "application/json", 
        }
    }

    axios(Data)
.then((response) => {
   setList(response.data)
}).catch((err) => {
   alert(err)
})
})

  return (
    list.map((each, index) => {
     let {id, name, username, email, address} = each
     return(
      <div className="shadow-none p-3 mb-5 bg-light rounded">
 <p>{id}</p>
<p>{name}</p>
<p>{username}</p>
<p>{email}</p>
<p>{address.street}</p> 
<p>{address.city}</p>

      </div>

     )
    })
  )
}

export default Api