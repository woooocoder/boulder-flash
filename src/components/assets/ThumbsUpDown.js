const ThumbsUpDown = (props) => {
    const p = process.env.PUBLIC_URL
    return (
        <div className='flex items-center w-min'>
            <img 
                src={ props.isComplete === true ? `${p}/thumbs/thumbs-up.svg` : `${p}/thumbs/thumbs-down.svg` } 
                className='h-[50px]'
                alt=''
            />
            
            <h1 
                className='ml-[1vw] text-center text-3xl font-semibold text-[#c6c6c6]'
            >
                { props.isComplete === true ? 'Completed' : 'Failed' }
            </h1>
        </div>
    )
}

export default ThumbsUpDown