import { FormControl, FormHelperText, Input } from "@mui/joy";

const DateInput = ({ value, handleChange }) => (
    <FormControl>
        <FormHelperText className="font-semibold">
            Date
        </FormHelperText>
        <Input
            type="date"
            value={value}
            onChange={handleChange}
            name="date"
            required
        />
    </FormControl>
);

export default DateInput;
