import type { CharacterCounterProps } from "../../Types"
import { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

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
        const words = trimmed === "" ? [] : trimmed.split(' ');

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
        <section>
            <TextInput
            onTextChange={handleTextChange}>
            </TextInput>
            <div className="bg-white flex flex-col rounded-2xl p-5 w-full">
                <StatsDisplay stats={stats} showReadingTime={showReadingTime} color={color}/>
                <p className="mx-auto">Min: {minWords} | Max: {maxWords}</p>
            </div>
        </section>
    )
}