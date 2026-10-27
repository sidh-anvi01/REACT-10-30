import React, { useEffect, useState } from 'react'

const ApiIntegration = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState([])


    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err))

    // useEffect(()=>{

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err))

    // },[])




    // this is the example for post api method

    // useEffect(() => {

    //     fetch("https://jsonplaceholder.typicode.com/users",{
    //         method:"POST",
    //         headers:{},
    //         body:JSON.stringify({

    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //         .catch(err => console.log(err))

    // }, [])
    // // console.log(user)





    // useEffect(() => {

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //         .catch(err => console.log(err))

    // }, [])




  useEffect(() => {

        fetch("https://dummyjson.com/docs/recipes")
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <h1>api inetragtion</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>change</button>

            {
                recipes.user.map((u) => (
                    <div key={u.id}>
                        <h1>{u.name}</h1>
                        {/* <h1>{u.email}</h1> */}
                    </div>
                ))
            }

        </div>
    )
}

export default ApiIntegration
