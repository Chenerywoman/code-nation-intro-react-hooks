import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App(){

    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        
        setUsers(res.data)
    }

    const allUsers = users.map((user, ind) => {
        return (
        <div key={ind}>
            <h4>name: {user.name}</h4>
            <h5>city: {user.address.city}</h5>
            <h5>company: {user.company.name}</h5>
            <hr/>
        </div>
        )
    })
    
    return(
        <>
        <h1>All users</h1>
        {allUsers}
        </>

        
    )
}

export default App;