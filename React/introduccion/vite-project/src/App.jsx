import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Padre from './components/Padre'
import { Hijo } from './components/Hijo'

function App() {
  //count es la variable  y los setXxxx son las funciones 
  const [count, setCount] = useState(0)
  const [like , setLike] = useState("🥥")
  const [star, setStar] = useState("💫")

  const handleToggleLike=()=>{
    return like==="🌴"? setLike("😂") : setLike("😊")
  }



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="cardLike">
      <button onClick={handleToggleLike}>
      like is {like}
      </button>
      </div>
          <div className="cardStar">
      <button onClick={() => setStar((currentStar) => {
        // Check if the current star string length is less than 5
        if (currentStar.length < 10) {
          return currentStar + "💫"; // If yes, add a star
      }
      return currentStar; // If no, return the state unchanged
    })}>
  star is {star}
</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Padre props="Hola mundo" nombre="Fernando" edad={30} datos={{edad:30, isRoot:false}}>
        <Hijo />
      </Padre>
      <Card props= "Card" text="Card text" src="https://via.placeholder.com/150" />
    </>
  )
}

export default App
