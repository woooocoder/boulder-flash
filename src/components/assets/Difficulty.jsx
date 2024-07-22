import Impossible from "../difficulty/Impossible"
import Challenging from "../difficulty/Challenging"
import Easy from "../difficulty/Easy"

const Difficulty = ({ difficulty, hideText, setWidth = 60, textDirection = 'flex' }) => {

    const difficulties = [
        { component: Easy, label: "Easy", maxDifficulty: 4 },
        { component: Challenging, label: "Challenging", minDifficulty: 5, maxDifficulty: 7 },
        { component: Impossible, label: "Impossible", minDifficulty: 8 },
    ]

    const currentDifficulty = difficulties.find(({ minDifficulty = 0, maxDifficulty = 10 }) => 
        difficulty >= minDifficulty && difficulty <= maxDifficulty
    )

    const Icon = currentDifficulty.component
    const label = currentDifficulty.label

    return (
        <div className="flex items-center text-[#c6c6c6] font-semibold">
             <div className={textDirection}>
                <Icon setWidth={setWidth} />
                { !hideText && (
                    <div className={`text-3xl ${textDirection === 'flex' ? 'ml-[1vw]' : ''}`}>
                        {label}
                    </div>
                )}
             </div>
        </div>
    )
}

export default Difficulty