const LinkUploader = ({index, onUrlUpload}) => {
    const handleUrlChange = (e) => {
        console.log(e)
        const url = e.target.value
        console.log(url)
        onUrlUpload(index, url)
    }
    return (
        <div className="bg-[#2a313c] rounded-b-lg pb-7 pt-3 px-2">
            <div>
                <div className="opacity-75 pb-3">Or</div>
                <div className="text-lg font-semibold text-[#c6c6c6] ">Enter URL</div>
                <input 
                    type="url" 
                    className="bg-[#2a313c] w-full border-b-2 border-b-[#c6c6c6] opacity-30"
                    onChange={handleUrlChange}    
                />
            </div>
        </div>
    )
}

export default LinkUploader