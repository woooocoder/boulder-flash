import { FormControl, FormHelperText, Input } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";

const TimeSelector = (props) => {
    const { name, value, onChange, label, other } = props
    const error = value === other

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
                    className="shadow-lg"
                />

                { error && (
                    <FormHelperText>
                        <InfoOutlined />
                        Times cannot match
                    </FormHelperText>
                )}
            </FormControl>
        </div>
    )
}

export default TimeSelector