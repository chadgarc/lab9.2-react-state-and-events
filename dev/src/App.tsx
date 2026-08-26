import './App.css'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  
  const minWords: number = 25;
  const maxWords: number = 100;
  const targetReadingTime = 200
  
  return (
    <CharacterCounter minWords={minWords} maxWords={maxWords} targetReadingTime={targetReadingTime}/>
  )
}

export default App
