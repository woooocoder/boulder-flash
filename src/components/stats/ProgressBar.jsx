const ProgressBar = (totalCompletedClimbs, totalFailedClimbs) => {
    const completedP = Math.floor(100 * totalCompletedClimbs / (totalCompletedClimbs + totalFailedClimbs))
    const failedP = Math.floor(100 * totalFailedClimbs / (totalCompletedClimbs + totalFailedClimbs))
    
    return (
        <div className="font-semibold">
            <div className="flex h-[35px] w-full">
                <div 
                    className='bg-[#4cAf50]' 
                    style={
                        { width: `${completedP}%`, borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }
                    }>
                        <h2 className="flex justify-center">{completedP >= 25 ? completedP : ''}%</h2>
                    </div>
                <div 
                    className='bg-red-600' 
                    style={
                        { width: `${failedP}%`, borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }
                    }>
                        <h2 className="flex justify-center">{failedP >= 25 ? failedP : ''}%</h2>
                </div>
            </div>

            

        </div>
    );
};

export default ProgressBar