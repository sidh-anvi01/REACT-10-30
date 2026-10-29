import { createContext, useState } from "react";


const UserContext = createContext()


export function UserProvider({ children }) {


    const [lightMode, setLightMode] = useState(true)

    const user = {
        name: "rohan",
        age: 21,
        email: "rohan@gmail.com"

    }

    const showMessage = () => {
        alert(user.name)
    }


    const toggelMode = () => {
        setLightMode(!lightMode)
    }



    return (
        <UserContext.Provider value={{ user, showMessage, toggelMode, lightMode, setLightMode }}>
            {children}
        </UserContext.Provider>
    )



}



export default UserContext