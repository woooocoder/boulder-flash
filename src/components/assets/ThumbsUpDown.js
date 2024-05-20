import up from './../../photos/thumbs/thumbs-up.svg'
import down from './../../photos/thumbs/thumbs-down.svg'

const ThumbsUpDown = ({isComplete}) => {
    return (
        <div className='flex justify-center align-middle text-center mb-4 hover:bg-black hover:rounded-lg'>
            <img 
                src={ isComplete === true ? up : down } 
                className='h-[75px]'
                alt='TUD' 
            />
            
            <h1 
                className='ml-2 mt-6 text-center text-3xl font-semibold text-[#c6c6c6]'
            >
                {isComplete === true ? 'Completed' : 'Failed'}
            </h1>
        </div>
    )
}

export default ThumbsUpDown