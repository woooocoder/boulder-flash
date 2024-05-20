import { FaCheck, FaRegStar } from 'react-icons/fa'
import { MdDoNotDisturb } from 'react-icons/md'
import GetRandomHold from './../../components/GetRandomHold'
const SessionData = ({session}) => {
    const x = "sddsdsd"
    return (
        <div>
            <div className='my-6 font-bold text-xl'>Session Info</div>
            { session.climbs.map((climb, id) => (
                <div className='flex' key={id}>
                    <div className='mt-2 mr-6'>
                        <GetRandomHold str={x} />
                    </div>
                    
                    <div className='flex-col'>
                        <div className='flex'>
                            <div className='font-bold text-lg'>{++id}: title ipsum</div>
                            <div className='ml-[80%] mr-6 opacity-45'> {'>'} </div>
                        </div>

                        <div className='flex'>
                            <div>
                                {climb.gymDifficulty}
                            </div>
                            
                            <div className='mt-2 ml-2'>
                                { 
                                climb.completed ?
                                    <FaCheck color="green" size={18} /> : 
                                    <MdDoNotDisturb color="red" size={18} />
                                }
                            </div>
                            
                            <div className='ml-[25%]'>time</div>
                            <div className='ml-[25%]'>style</div>
                        </div>
                        
                        <div className='flex mt-1'>
                            <FaRegStar color='yellow'/><FaRegStar color='yellow'/><FaRegStar color='yellow'/>
                        </div>
                        
                        <div className='my-4 border-t-2 w-full px-[100%] opacity-45'></div>
                    </div>
                </div>
            ))}       

        </div>
    )
}

export default SessionData