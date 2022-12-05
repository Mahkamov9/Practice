
import { useState } from 'react';
import { useEffect } from 'react';
import './useeffect.css'


const UserData = () =>{
    
    const [users , setUsers] = useState([]);
    
    useEffect( () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( (res) => res.json())
        .then((data) => setUsers(data))
    }, []);
    
    
    return(
        <>
            <ul>
                <li></li>
            </ul>


        </>
    )
}



export default UserData;