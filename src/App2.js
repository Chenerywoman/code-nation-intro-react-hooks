import './App.css';
import {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const [friends, setFriends] = useState([
    {
      name: "John",
      address: "Main Avenue London"
    },
    {
      name: "Holly",
      address: "Avenue Liverpool"
    },
    {
      name: "Peter",
      address: "Gareth Street Newcastle"
    }
  ]);
  
  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  const allFriends = friends.map((friend, ind) => {
  return (  
    <>
      <h3>Name: {friend.name}</h3>
      <p>Address: {friend.address}</p>
    </>
            
          )
  })

  const changeAddress = () => {
   
    const newFriends = [...friends];
    newFriends[2].address = "Berlin"
 
    setFriends(newFriends)
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={increaseCounter}>increase</button>
      <button onClick={decreaseCounter}>decrease</button>
      <div>{allFriends}</div>
      <button onClick={changeAddress}>Update Contact</button>
    </>
  );
}

export default App;

// const App = () => {
//   return (
//     <h1>React Hooks</h1>
//   )
// }