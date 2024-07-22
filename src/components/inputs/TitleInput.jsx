import { FormControl, FormHelperText, Input } from "@mui/joy";

const TitleInput = ({ value, handleChange, minLen, maxLen }) => (
    <FormControl>
        <FormHelperText className="font-semibold">
            Session Title
        </FormHelperText>
        <Input
            placeholder="Session Title"
            value={value}
            onChange={handleChange}
            name="title"
            minLength={minLen}
            maxLength={maxLen}
            required
        />
    </FormControl>
);

export default TitleInput;
