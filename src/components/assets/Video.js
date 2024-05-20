const Video = ({url, title}) => {
    return (
        <div className="flex justify-center">
                {/* <video key={url}>
                    <source src={url} type="video/mp4" />
                </video> */}
            <iframe 
                src={url}
                title={title} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                className="w-max h-[598px] rounded-lg mt-12"
                >

            </iframe>
        </div>
    )
    
}

export default Video