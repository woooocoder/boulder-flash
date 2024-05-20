import Proposal from "../components/analysis/Proposal"
import Analysis from "../components/analysis/Analysis"
import Prototype from "../components/analysis/Prototype"
import LowFidelityAndPrototype from "../components/analysis/LowFidelityAndPrototype"
const Roadmap = () => {
    return (
        <div 
            className="md:mt-12 md:mx-12 mt-2 mx-2 pt-24 pb-48"
        >
            
            <Proposal />
            <Analysis />
            <LowFidelityAndPrototype />
            <Prototype />
        </div>
    )
}

export default Roadmap