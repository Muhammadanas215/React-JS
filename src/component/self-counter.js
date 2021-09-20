import React, { useState } from "react";



function SelfCounter() {
    const [Counter, setCounter] = useState(0)
    const [userName, setUserName] = useState("Anas")
    const [genName, setGenNames] = useState(['Bilal', 'Mussab', 'Arsalan', 'Saad', 'Anas'])



    const addCounter = () => {
        setCounter(Counter + 1)
    }
    const minCounter = () => {
        setCounter(Counter - 1)
    }


    const update = () => {
        let ranNum = Math.floor(Math.random() * 5);
        let newName = genName[ranNum];
        setUserName(newName)

        if (newName !== userName) setUserName(newName);
        else update()
    }

    return (
        <div>


            <button onClick={addCounter}>Add</button>
            <h1>{Counter}</h1>
            <button onClick={minCounter}>Subtract</button>

            <h2>{userName}</h2>
            <button onClick={update}>Updated User Name</button>


        </div>
    )
}

export default SelfCounter;