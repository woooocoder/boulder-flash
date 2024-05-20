import Impossible from "../../photos/difficulty/Impossible"
import Challenging from "../../photos/difficulty/Challenging"
import Easy from "../../photos/difficulty/Easy"

const Difficulty = ({difficulty, hideText, setWidth, textDirection}) => {
    const arr = [
        {
            icon: <Easy setWidth={setWidth ? setWidth : 60} />,
            string: "Easy"
        },
        {
            icon: <Challenging setWidth={setWidth ? setWidth : 60} />,
            string: "Challenging"
        },
        {
            icon: <Impossible setWidth={setWidth ? setWidth : 60} />,
            string: "Impossible"
        }, 
    ]

    const handleDifficulty = () => {
        if (difficulty <= 4) {
            return (
                <div className={`${(textDirection === '' || textDirection === undefined) ? 'flex' : textDirection} mb-8`}>
                    { arr[0].icon }

                    { !hideText ? <div className={`text-3xl font-semibold mt-2 ${textDirection ? '': 'ml-3'}`}>
                        { arr[0].string }
                    </div> : ''}
                </div>
            )
        }

        if (difficulty <= 7 && difficulty >=5) {
            return (
                <div className="flex mb-8">
                    { arr[1].icon }

                    { !hideText ? <div className="text-3xl font-semibold mt-2 ml-3">
                        { arr[1].string }
                    </div> : ''}
                </div>
            )
        }

        if (difficulty >= 8) {
            return (
                <div className="flex mb-8">
                    { arr[2].icon }

                    { !hideText ? <div className="text-3xl font-semibold mt-2 ml-3">
                        { arr[2].string }
                    </div> : ''}
                </div>
            )
        }
    }



    return (
        <div className="flex justify-center text-[#c6c6c6]">
             {handleDifficulty()}
        </div>
    )
}

export default Difficulty