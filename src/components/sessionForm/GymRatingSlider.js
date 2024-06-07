import { Slider, Input } from "@mui/joy" 
import { useMediaQuery } from "@mui/material"


/**
 * @param {*} param0 
 * @returns 
 */
const GymRatingSlider = ({ value, onChange }) => {
    const isSmallScreen = useMediaQuery('(max-width:640px)')
    const marks = Array.from({ length: 11 }, 
        (_, i) => (
            { 
                value: i, 
                label: `V${i}`
            }
        )
    )



    return (
        <>
            { !isSmallScreen ? (
                <Slider
                    defaultValue={1}
                    step={1}
                    max={10}
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={(e, newValue) => onChange(newValue)}
                    marks={marks}
                    name='ratingSlider'
                />
            ) : (
                <Input 
                    type="number" 
                    value={value} 
                    onChange={(e, newValue) => onChange(newValue)} 
                    min={0}
                    max={10}
                    name='ratingSlider' 
                />
            )}
        </>
    ) 
}

export default GymRatingSlider