import { Slider } from "@mui/joy"
/**
 * @todo Make this component stateful in NewSession and replace it for GymRatingSelector
 * @param {*} param0 
 * @returns 
 */
const GymRatingSlider = ({ value, onChange}) => {
    
    const marks = [
        {
            value: 0,
            label: 'V0'
        },
        {
            value: 1,
            label: 'V1'
        },
        {
            value: 2,
            label: 'V2'
        },
        {
            value: 3,
            label: 'V3'
        },
        {
            value: 4,
            label: 'V4'
        },
        {
            value: 5,
            label: 'V5'
        },
        {
            value: 6,
            label: 'V6'
        },
        {
            value: 7,
            label: 'V7'
        },
        {
            value: 8,
            label: 'V8'
        },
        {
            value: 9,
            label: 'V9'
        },
        {
            value: 10,
            label: 'V10'
        }
    ]


    return (
        <Slider
            defaultValue={1}
            step={1}
            max={10}
            valueLabelDisplay="auto"
            value={value}
            onChange={onChange}
            marks={marks}
        />
    ) 
}

export default GymRatingSlider