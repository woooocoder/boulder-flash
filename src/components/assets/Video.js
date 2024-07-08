import { useMediaQuery } from "@mui/material"
const Video = ({url, title}) => {
    const minWidth = useMediaQuery('(min-width:768px)')
    return (    
        <iframe 
            src={url}
            title={title} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            className="video-iframe"
            style={{
                width: '100%',
                height: `${ minWidth ? '768px' : '518px' }`,
                borderRadius: '8px', 
            }}
            >
        </iframe>
    )
    
}

export default Video