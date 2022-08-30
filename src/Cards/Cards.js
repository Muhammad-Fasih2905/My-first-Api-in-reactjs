import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cards = () => {

    const [list, setList] = useState([])

    useEffect(() => {
 
        let config = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`,
            headers: {
                "content-type": "application/json"
            }
        }

        axios(config)
            .then((response) => {
                console.log(response.data)
                setList(response.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    return (
        <>
            <div>Cards</div>
            {
                list.map((each, index) => {
                    let { id, title, url } = each
                    return (
                        <div>
                            <img style={{ height: '500px', width: '500px' }} src={url} />
                            <p>{id}</p>
                            <p>{title}</p>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Cards