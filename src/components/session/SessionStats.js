const SessionStats = (
    { title, session_time, avg_difficulty, max_difficulty, total_climbs, num_completed, num_failed, completion_rate, date,
      }
) => {

    const p = process.env.PUBLIC_URL
    const s = 'sessionStats'
    const mu = `${p}/${s}/mu.svg`
    const crown = `${p}/${s}/crown.svg`
    const clock = `${p}/${s}/clock.svg`
    const pie = `${p}/${s}/pie.svg`
    const climb = `${p}/${s}/climb.svg`
    const up = `${p}/thumbs/thumbs-up.svg`
    const down = `${p}/thumbs/thumbs-down.svg`

    
    const sessionTime = () => {
        const m = (session_time % 60).toFixed(0)
        if (session_time >= 0 && session_time <= 60) {
            return `${m}min`
        } else {
            const h = (session_time / 60).toFixed(0)
            return `${h}hr${m}min`
        }

        
    }

    const handleDate = () => {
        const yyyy = date.substring(0,4)
        const dd = date.substring(8,10)
        const mm = date.substring(5,7) 
        return `${mm}/${dd}/${yyyy}`
    }


    return (
        <div className='rounded-xl bg-[#2a313c] py-[2vh] mb-1'>
            <div className='flex justify-between'>
                <div 
                    className='ml-4 font-bold text-[#c6c6c6] bg-[#1b1f25]
                                w-min inline px-2 py-1 rounded-lg'>
                    { handleDate() }
                </div>
                <div className='mr-4 bg-[#1b1f25] px-2 py-1 rounded-lg font-bold text-[#c6c6c6]'>
                    {title}
                </div>

            </div>

            <div className='flex justify-between mx-[5%] text-sm font-bold mt-2'>
                <div 
                    className='flex-col justify-between text-[#C5C5C5]'>
                    <div className='mb-4'>
                        <div className='flex'>
                            <img
                                src={crown}
                                className='h-[50px]'
                                alt=''
                            />
                            <div className='mt-2 ml-1 text-3xl text-white'>
                                V{ max_difficulty }
                            </div>
                        </div>
                        <h3 className='ml-5 mt-1'>Best Climb</h3>
                    </div>

                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={mu}
                                className='h-[50px]'
                                alt=''
                                />
                                <div
                                    className='mt-2 ml-1 text-3xl text-white'>
                                        V{ avg_difficulty }
                                </div>
                        </div>
                        <h3 className='ml-5 mt-1'>Avg. Climb</h3>
                    </div>

                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={up}
                                className='h-[50px]'
                                alt=''
                            />
                            <div
                                className='mt-2 ml-1 text-3xl text-white'>
                                    { num_completed }
                            </div>
                        </div>
                        <h3 className='ml-5 mt-1'>Num. Completed</h3>
                    </div>



                    <div className='mb-4'>
                        <div className='flex'>
                                <img 
                                    src={clock}
                                    className='h-[52px]'
                                    alt=''
                                    />
                                    <div
                                        className='mt-2 ml-1 text-3xl text-white'>
                                            { sessionTime() }
                                    </div>
                        </div>
                        <h3 className='ml-5 mt-1 text-nowrap'>Session Time</h3>
                    </div>
                </div>

                <div>
                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={climb}
                                className='h-[40px] mt-1'
                                alt=''
                                />
                            <div
                                className='mt-2 ml-1 text-3xl text-white'>
                                    { total_climbs }
                            </div>        
                        </div>
                            <h3 className='ml-5 mt-1 text-nowrap text-[#c6c6c6]'>Total Climbs</h3>
                    </div>
                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={pie}
                                className='h-[52px]'
                                alt=''
                                />
                                <div
                                    className='mt-2 ml-1 text-3xl text-white'>
                                        { completion_rate }%
                                </div>
                        </div>
                            <h3 className='ml-5 mt-1 text-nowrap text-[#c6c6c6]'>Rate of Completion</h3>
                    </div>

                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={down}
                                className='h-[50px]'
                                alt=''
                            />
                            <div
                                className='mt-2 ml-1 text-3xl text-white'>
                                    { num_failed }
                            </div>
                        </div>
                        <h3 className='ml-5 mt-1 text-[#c6c6c6]'>Num. Failed</h3>
                    </div>
                </div>
            </div>
            {/* <button 
                onClick={handleDeleteSession} 
                className='absolute right-0 font-semibold font-sans -translate-x-10 bg-red-500 mt-4 px-3 py-1 rounded-lg'>
                Delete Session
            </button> */}
        </div>
    )
}

export default SessionStats