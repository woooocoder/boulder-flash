const LowFidelityAndPrototype = () => {

    const data = [
        {
            id: 1,
            header: "Paper Prototyping",
            
        }, 
        {
            id: 2,
            header: "Briefing"
        }, 
        {
            id: 3,
            header: "Scenario Tasks",
            body: ["Create a session", "Add a climb to a new session", "View lifetime analytics", "Edit the climb you created"]
        }, 
        {
            id: 4,
            header: "Observations"
        },
        {
            id: 5,
            header: "Prototype Iteration"
        }
    ]
    return (
        <div>
            <div
                className="border-t-4 bg-[#EEEEEE] mt-24 mb-16"
            ></div>
            <h2
                className="font-bold text-2xl md:text-5xl mb-24">
                Step 4: Paper Prototype & Low-Fidelity Testing
            </h2>

            <div>
                { data.map((data) => {
                    return(
                        <div className="text-center border-b mt-2 mb-12 mx-12">
                            <h4 className="hover:text-gray-400 font-bold text-xl md:text-3xl mb-4">
                                {`${data.id}. ${data.header}`}
                            </h4>

                            <div>
                                
                            </div>    


                        </div>
                    )
                })}
            
            </div>
        </div>
    )
}

export default LowFidelityAndPrototype