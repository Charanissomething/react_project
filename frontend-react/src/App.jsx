import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  //let number  = 0;
  const [number,setnumber] = useState(0);
  const [person,setPerson] = useState({
    name:"Navneet",
    age:22,
  })
  // const   
  const Increasecount  = () =>{
     setnumber(number+1);
     console.log(number);
  }
  const changeName = () =>{
    setPerson(previousValue =>{
       return{...previousValue,name:"cherry"};
    })
  }
    // useEffect(() =>{
    //    console.log("this function is mounted!!!");
    // },[])

    return(
        <div>
          <h1>hello !!!!</h1>
          <button onClick={Increasecount}>click to increase count {number}</button>
        </div>
    )
}

export default App
