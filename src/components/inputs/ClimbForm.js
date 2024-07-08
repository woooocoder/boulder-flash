import { Button, FormControl, FormHelperText, Input, Radio, RadioGroup, Textarea, Typography } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import GymRatingSlider from "../../components/sessionForm/GymRatingSlider";
import DifficultySelector from "../../components/assets/DifficultySelector";
import VideoUploader from "../../components/assets/VideoUploader";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const ClimbForm = ({ 
    climb, 
    index, 
    handleClimbInputChange, 
    handleGymRatingChange, 
    handleCompleteClimb, 
    handleDifficultyChange, 
    handleVideoUpload, 
    deleteClimb 
}) => {
    const [sliderFocusIndex, setSliderFocusIndex] = useState(null);

    const handleSliderFocus = (index) => {
        setSliderFocusIndex(index);
    };

    const isSmallScreen = useMediaQuery('(max-width:768px)');

    return (
        <div className="mt-[4vh] border-2 rounded-lg shadow-lg p-2">
            <Typography level="h2" className="text-lg">
                Climb {index + 1}
            </Typography>
            <div className={`${isSmallScreen ? 'flex-col' : 'flex-row flex'} justify-between`}>
                <div className="lg:w-[45%]">
                    <FormControl>
                        <FormHelperText className="font-semibold">
                            Title
                        </FormHelperText>
                        <Input 
                            placeholder="Climb Title"
                            value={climb.title}
                            onChange={(e) => handleClimbInputChange(index, e)}
                            name="title"
                            minLength={3}
                            maxLength={32}
                            required
                        />
                    </FormControl>
                    <div className="mt-[4vh]">
                        <GymRatingSlider 
                            value={climb.gym_rating}
                            onChange={(e, value) => handleGymRatingChange(index, value)}
                            onFocus={() => handleSliderFocus(index)}
                        />
                    </div>
                    <FormControl className="mt-[2vh]">
                        <FormHelperText className="font-semibold">
                            Climb Style
                        </FormHelperText>
                        <RadioGroup 
                            value={climb.style}
                            onChange={(e) => handleClimbInputChange(index, e)}
                            name="style"
                            required
                        >
                            <Radio value="Boulder" label="Boulder" />
                            <Radio value="Lead" label="Lead" />
                            <Radio value="Top Rope" label="Top Rope" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="lg:w-[45%]">
                    <FormControl>
                        <FormHelperText className="font-semibold">
                            Description 
                        </FormHelperText>
                        <Textarea
                            placeholder="Session Description"
                            value={climb.description}
                            onChange={(e) => handleClimbInputChange(index, e)}
                            name="description"
                            minLength={8}
                            maxLength={100}
                            required
                        />
                    </FormControl>
                    <div className="mt-[4vh]">
                        <FormControl className="mt-[2vh]">
                            <FormHelperText className="font-semibold">
                                Completed
                            </FormHelperText>
                            <RadioGroup 
                                value={climb.completed}
                                onChange={(e) => handleCompleteClimb(index, e.target.value === 'true')}
                                name="completed"
                                required
                            >
                                <Radio value={true} label="Yes" />
                                <Radio value={false} label="No" />
                            </RadioGroup>
                        </FormControl>
                        <div className="mt-[2vh]">
                            <DifficultySelector
                                value={climb.difficulty}
                                onChange={(e, value) => handleDifficultyChange(index, value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[2vh]">
                <VideoUploader
                    value={climb.video}
                    onChange={(e, video) => handleVideoUpload(index, video)}
                />
            </div>
            <div className="mt-[4vh] flex justify-end">
                <Button 
                    variant="solid" 
                    color="danger"
                    onClick={() => deleteClimb(index)}
                >
                    Delete Climb
                </Button>
            </div>
        </div>
    );
};

export default ClimbForm;
