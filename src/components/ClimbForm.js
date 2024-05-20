import Easy from './../photos/difficulty/Easy'
import Challenging from './../photos/difficulty/Challenging'
import Impossible from './../photos/difficulty/Impossible'
import ThumbsUpDown from './ThumbsUpDown'
const ClimbForm = () => {
    const submitClimbForm = async (climbData, userId, sessionId) => {
        try {
            const response = await fetch(`/api/users/${userId}/sessions/${sessionId}/climbs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(climbData)
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Climb added successfully:', data);
                // Handle success
            } else {
                console.error('Failed to add climb:', response.statusText);
                // Handle error
            }
        } catch (error) {
            console.error('Error adding climb:', error);
            // Handle error
        }
    };
    
    // Call submitClimbForm with the climb data, userId, and sessionId when the form is submitted
    


    return (
        <div className="flex-col justify-start mt-12">
            <h2 className="font-bold text-lg">Add A Climb</h2>
            <p className="mb-4">
                Lorem ipsum dolor at stamium fernic copum di me dolore careful shade.
                Ipsum dolor at stamium fernic copum di me dolore careful shade
            </p>

            <label for="title" >
                <div className="font-semibold">Title</div>
                <input id="title" min={1} max={25} title="Title" className="px-4 rounded-lg border-2 border-[#c5c5c5] bg-[#2a313c] mb-6" />
            </label>

            <label for="description">
                <div className="font-semibold">Description</div>
                <textarea title="Description" type="text" className="h-[100px] w-full p-1 rounded-lg border-2 border-[#c5c5c5] bg-[#2a313c] text-start mb-6 bg-inherit" />
            </label>

            <label for="Gym Rating">
                <div className="font-semibold">Gym Rating</div>
            <div className='bg-[#2a313c] border-2 border-[#c5c5c5] p-2 rounded-lg'>    
                <div className='flex justify-between mb-2'>
                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>VB</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V1</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V2</div>
                    </div>
                </div>
                
                <div className='flex justify-between mb-2'>
                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V3</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V4</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V5</div>
                    </div>
                </div>

                <div className='flex justify-between mb-2'>
                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V6</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V7</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V8</div>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V9</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg ml-7'>
                        <input type='radio' className='mr-1' />
                        <div>V10</div>
                    </div>

                    <div className='flex border-2 bg-[#222831] p-2 rounded-lg'>
                        <input type='radio' className='mr-1' />
                        <div>V11+</div>
                    </div>
                </div>
            </div>    
            </label>

            <label for="completed">
                <div className="font-semibold mt-6">Did You Complete The Climb?</div>
                <div className='bg-[#2a313c] border-2 border-[#c5c5c5] p-2 rounded-lg'>
                    <div className="flex justify-center pt-12 mb-24 [&_*]:w-[120px] [&_*]:h-[120px] ">
                        <div className='mr-24 '>
                            <ThumbsUpDown isComplete={true}/>
                            <div className='text-center text-lg font-medium'>Completed</div>
                        </div>

                        <div>
                            <ThumbsUpDown isComplete={false}/>
                            <div className='text-center text-lg font-medium'>Failed</div>
                        </div>
                    </div>
                </div>
            </label>
            

            <label for="difficulty">
                <div className="font-semibold mt-6">Difficulty</div>
                
                <div className='bg-[#2a313c] border-2 border-[#c5c5c5] p-2 rounded-lg'>
                    <div className="flex justify-center pt-12 mb-24 [&_*]:mx-1 [&_*]:w-[120px] [&_*]:h-[120px] ">
                        <div>
                
                            <Easy />
                            <div className='text-center text-lg font-medium'>Easy</div>
                        </div>

                        <div>
                            <Challenging />
                            <div className='text-center text-lg font-medium'>Challenging</div>
                        </div>

                        <div>
                            <Impossible />
                            <div className='text-center text-lg font-medium'>Impossible</div>
                        </div>
                    </div>
                </div>
            </label>

            <label for="style">
                <div className="font-semibold mt-6">Style</div>
                <div className='flex-col bg-[#2a313c] p-2 rounded-lg border-2 border-[#c5c5c5] mb-6'>
                    <div className='flex justify-center font-medium'>Holds</div>
                    <div className='flex justify-center mb-2'>
                        
                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Crimp
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Jug
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Sloper
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Pinch
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Pocket
                        </div>
                    </div>
                    <div className='flex justify-center font-medium'>Wall Angle</div>
                    <div className='flex justify-center mb-2 h-[35px]'>
                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Overhang
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Slab
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 text-nowrap hover:text-[#2a313c]'
                        >
                            Flat Wall
                        </div>

                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Crack
                        </div>
            
                    </div>
                    
                    <div className='flex justify-center font-medium'>Motion</div>
                    <div className='flex justify-center mb-4'>
                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Dyno
                        </div>
                        <div 
                          className='rounded-md bg-[#222831] mr-2 border-2 border-[#c5c5c5] w-min px-2
                           hover:bg-[#c5c5c5] hover:pr-6 hover:text-[#2a313c]'
                        >
                            Static
                        </div>
                    </div>

                    
                </div>
            </label>    

            <div className='mt-6 font-semibold'>Video (Optional)</div>
            <div className="flex items-center justify-center w-full">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#c5c5c5] border-dashed
                 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-[#c5c5c5]
                  dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                             d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">
                            Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            MP4, PNG, JPG, GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 

        </div>
    )
}

export default ClimbForm