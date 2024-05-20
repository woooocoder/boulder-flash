const DomainAnalysisDiagram = require("./../photos/DomainAnalysis.png")
const DomainAnalysis = () => (
    <div 
        className="mt-8"
    >
        <h3 className="font-semibold text-4xl mb-12">
            3. Domain Analysis
        </h3>

        <img 
            src={DomainAnalysisDiagram}
            className="h-full w-full" 
            alt=""
        />

        {/* <div className="flex justify-center">
            <table className="table-auto mt-12 w-[40%] h-[450px]">
                <thead className="bg-slate-900">
                    <tr className="border-2 border-[#EEEEEE]">
                        <th className="border-r-2">Statistics</th>
                        <th className="border-r-2">Session</th>
                        <th>Climb</th>
                    </tr>
                </thead>

                <tbody className="bg-slate-800 border-[#EEEEEE] border-2 text-center">
                    <tr>
                        <td className="border-r-2">session_time_histogram</td>
                        <td className="border-r-2">id</td>
                        <td>id</td>
                    </tr>

                    <tr>
                       <td className="border-r-2">avg_difficulty</td> 
                       <td className="border-r-2">session_time</td>
                       <td>video</td>
                    </tr>

                    <tr>
                        <td className="border-r-2">completion_rate</td>
                        <td className="border-r-2">date</td>
                        <td>gym_difficulty</td>
                    </tr>

                    <tr>
                        <td className="border-r-2">completion_by_difficulty</td>
                        <td className="border-r-2"></td>
                        <td>your_difficulty</td>
                    </tr>

                    <tr>
                        <td className="border-r-2"></td>
                        <td className="border-r-2"></td>
                        <td>description</td>
                    </tr>

                    <tr>
                        <td className="border-r-2"></td>
                        <td className="border-r-2"></td>
                        <td>time_to_complete</td>
                    </tr>

                    <tr>
                        <td className="border-r-2"></td>
                        <td className="border-r-2"></td>
                        <td>completed?</td>
                    </tr>
                </tbody>
            </table>

        </div> */}

    </div>
)

export default DomainAnalysis