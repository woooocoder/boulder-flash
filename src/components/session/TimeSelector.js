import { FormControl, FormHelperText, Input } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";

const TimeSelector = (props) => {
    const { name, value, onChange, label } = props
    const error = value === '00:00'
    return (
        <div>
            <FormControl error={error}>
                <div>
                    {label}
                </div>

                <Input
                    type="time"
                    name={name}
                    value={value}
                    onChange={onChange}
                />

                { error && (
                    <FormHelperText>
                        <InfoOutlined />
                        Select a time
                    </FormHelperText>
                )}
            </FormControl>
        </div>
    )
}

export default TimeSelector