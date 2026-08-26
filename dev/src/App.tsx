import './App.css'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

/**
 * App Component
 * -------------
 * Root component of the application. Responsible for providing configuration
 * values to the CharacterCounter component and rendering it as the main UI.
 *
 * This component does not contain any business logic. Instead, it defines
 * the initial settings for:
 * - minimum required words
 * - maximum allowed words
 * - target reading speed (words per minute)
 *
 * These values are passed as props to CharacterCounter, which handles all
 * text processing, validation, and UI updates.
 *
 * Example:
 * <CharacterCounter
 *   minWords={25}
 *   maxWords={100}
 *   targetReadingTime={200}
 * />
 */
function App() {
  
  const minWords: number = 25;
  const maxWords: number = 100;
  const targetReadingTime = 200
  
  return (
    <CharacterCounter minWords={minWords} maxWords={maxWords} targetReadingTime={targetReadingTime}/>
  )
}

export default App
