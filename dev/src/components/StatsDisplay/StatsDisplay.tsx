import type { StatsDisplayProps } from "../../Types"

/**
 * StatsDisplay Component
 * ----------------------
 * Displays text statistics computed by the parent CharacterCounter component.
 * This component is purely presentational: it does not calculate any values
 * itself and relies entirely on the `stats` object passed via props.
 *
 * Props:
 * @param {TextStats} stats
 *   An object containing pre‑computed statistics about the user's input:
 *   - characterCount: total number of characters
 *   - wordCount: total number of words
 *   - readingTime: estimated reading time in minutes (decimal)
 *
 * @param {boolean} [showReadingTime=false]
 *   Determines whether the reading time section should be displayed.
 *   The parent component decides when this is relevant.
 *
 * @param {string} [color='text-red-800']
 *   Tailwind CSS class applied to the word count value. This allows the parent
 *   to dynamically style the word counter (e.g., red when below minWords,
 *   green when within range). StatsDisplay does not decide styling rules.
 *
 * Component Behavior:
 * -------------------
 * - Renders three statistic blocks: Characters, Words, and optionally Reading Time.
 * - Uses `convertTime()` to convert decimal minutes into a formatted mm:ss string.
 * - Does not enforce any business logic such as minimum or maximum word limits.
 *   All logic and decisions are handled by the parent component.
 *
 * Example Usage:
 * --------------
 * <StatsDisplay
 *   stats={stats}
 *   showReadingTime={true}
 *   color="text-green-600"
 * />
 */
export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = false,
    color = 'text-red-800'
    }) => {

    const convertTime = (minutes: number): string => {
        const wholeMinutes = Math.floor(minutes);
        const seconds = Math.floor((minutes - wholeMinutes) * 60);
        return `${wholeMinutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };


    return (
        <>
            <section className="flex justify-center gap-9">
                <div className="flex flex-col">
                    <p>Characters</p>
                    <h3 className="font-bold">{stats.characterCount}</h3>
                </div>
                <div className="flex flex-col">
                    <p>Words</p>
                    <h3 className={`${color} font-bold`}>{stats.wordCount}</h3>
                </div>
                {showReadingTime &&
                    <div className="flex flex-col">
                        <p>Reading Time:</p>
                        <h3>{convertTime(stats.readingTime)}</h3>
                    </div>
                }
            </section>
        </>
    )
}