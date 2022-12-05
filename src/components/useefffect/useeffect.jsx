
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
            {users.map( (users , i)  => (
                <div key={i} className='card'>
                    <p>Name: {users.name}</p>
                    <p>Username:{users.username}</p>
                    <p>Email: {users.email}</p>
                    <p>Adress: {users.address.street} Zipcode:{users.address.zipcode}</p>

                </div>    
            ))}
        </>
    )
}



export default UserData;