const Video = ({url, title}) => {
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
                height: '100%',
                borderRadius: '8px',
                marginTop: '12px'
            }}
            >
        </iframe>
    )
    
}

export default Video