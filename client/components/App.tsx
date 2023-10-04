import Pixel from "./Pixel"

function App() {
  const pixels = []

  for(let i = 0; i < 100000; i++){
    pixels.push(<Pixel/>)
  }
  return (
    pixels
  )    
}

export default App
