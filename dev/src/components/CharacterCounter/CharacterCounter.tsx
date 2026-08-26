import type { CharacterCounterProps } from "../../Types"
import { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

/**
 * CharacterCounter Component
 * --------------------------
 * Parent component responsible for managing all text‑related state, computing
 * statistics, enforcing optional word limits, and coordinating communication
 * between TextInput and StatsDisplay.
 *
 * This component implements the core logic of the character counter feature:
 * - Tracks the user's input text
 * - Computes character count, word count, and reading time
 * - Determines visual styling (e.g., word count color) based on min/max rules
 * - Passes processed statistics to StatsDisplay
 * - Receives raw text updates from TextInput via callback
 *
 * Props:
 * @param {number} [minWords=25]
 *   Minimum number of words required. Used to determine whether the word count
 *   should be styled as valid or invalid. StatsDisplay does not know this rule;
 *   only CharacterCounter applies it.
 *
 * @param {number} [maxWords=100]
 *   Maximum number of words allowed. When the word count exceeds this value,
 *   the counter is styled as invalid. This component does not block input;
 *   it only evaluates the count.
 *
 * @param {number} [targetReadingTime=200]
 *   Estimated reading speed in words per minute. Used to compute reading time
 *   as: readingTime = wordCount / targetReadingTime.
 *
 * Component Behavior:
 * -------------------
 * - Maintains `inputValue` as the current text entered by the user.
 * - Computes statistics inside `handleTextChange()` every time the user types.
 * - Determines the color of the word counter based on min/max rules.
 * - Passes the computed `stats` object and `color` to StatsDisplay.
 * - Passes `handleTextChange` to TextInput so the child can notify the parent
 *   whenever the user types.
 *
 * Data Flow:
 * ----------
 * TextInput → (onTextChange) → CharacterCounter → StatsDisplay
 *
 * CharacterCounter is the single source of truth for all text and statistics.
 *
 * Example Usage:
 * --------------
 * <CharacterCounter
 *   minWords={30}
 *   maxWords={120}
 *   targetReadingTime={180}
 * />
 */
export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 25,
    maxWords = 100,
    targetReadingTime = 200
    }) => {

    const [color,setColor] = useState('text-red-800');
    const showReadingTime = true;
    const [inputValue, setInputValue] = useState('');
    const [stats,setStats]= useState({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0
    })

    
    const handleTextChange = (newText: string) => {
        const trimmed = newText.trim();
        let words = trimmed === "" ? [] : trimmed.split(' ');
        words = words.filter(element => element !== '');

        setColor(words.length < minWords || words.length > maxWords ? 'text-red-800' : 'text-green-900')

        setInputValue(trimmed);

        const wordCount = words.length;

        setStats({
            characterCount: trimmed.length,
            wordCount,
            readingTime: wordCount / targetReadingTime
        });

        console.log(inputValue);
    };

    return (
        <section className="bg-white rounded-2xl p-5 w-140">
            <TextInput
            onTextChange={handleTextChange}>
            </TextInput>
            <div className="flex flex-col p-5 w-full">
                <StatsDisplay stats={stats} showReadingTime={showReadingTime} color={color}/>
                <p className="mx-auto">Min: {minWords} | Max: {maxWords}</p>
            </div>
        </section>
    )
}