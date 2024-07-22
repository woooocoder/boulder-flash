import { ToggleButtonGroup } from "@mui/material"
import ToggleButton from '@mui/material/ToggleButton' 
import { useState } from "react"

export default function ToggleSort()  {
const [sort, setSort] = useState('date') // difficulty
const handleSort = (event, newSort) => {
    setSort(newSort)
}
    return (
        <ToggleButtonGroup
            value={sort}
            exclusive
            onChange={handleSort} 
        >
            <ToggleButton value="date">
                By Date
            </ToggleButton>
            <ToggleButton value="difficulty">
                By Difficulty
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

