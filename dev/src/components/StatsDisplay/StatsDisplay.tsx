import type { StatsDisplayProps } from "../../Types"

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