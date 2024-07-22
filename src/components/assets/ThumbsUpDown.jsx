import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown'; 
const ThumbsUpDown = ( props ) => {
    return (
        <div className='flex items-center w-min'>
            { 
                props.isComplete ? 
                    <ThumbUpIcon 
                        color='success'
                        sx={{ fontSize: '30px'}}
                    /> 
                    : 
                    <ThumbDownIcon 
                        color='error'
                        sx={{ fontSize: '30px'}}
                    /> 
            }

            
            { 
                !props.hideText && 
                <h1 
                    className='ml-[1vw] text-center text-3xl font-semibold text-[#c6c6c6]'
                >
                        <>
                            {  props.isComplete === true ? 'Completed' : 'Failed' }
                        </>
                </h1>
            }
            
        </div>
    )
}

export default ThumbsUpDown