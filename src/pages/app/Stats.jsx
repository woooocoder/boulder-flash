import { useEffect, useState } from "react";
import PieChart from "../../components/stats/PieChart";
import BarGraph from "../../components/stats/BarGraph";
import SessionHistogram from "../../components/stats/SessionHistogram";
import Dashboard from "../../components/Dashboard";
const Stats = () => {
  var [sessions, setSessions] = useState([]);
  const id = "66218395053c6a12f1868516";
  const fetchStats = () => {
    fetch(`http://localhost:5050/api/user/${id}/getsessions`, {
      // fetch(`${url}/user/${id}/getSessions`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((sessionData) => {
        JSON.stringify(sessionData);
        setSessions(sessionData);
      })
      .catch((error) => console.error("error fetching data", error));
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // const completed = calculateOverallCompletionRate()
  // const failed = 100 - completed
  // const data = {
  //     labels: ['Completed', 'Failed'],
  //     datasets: [
  //         {
  //             label: 'Completed vs Failed Climbs',
  //             data: [completed, failed],
  //             backgroundColor: [
  //                 '#36A2EB',
  //                 '#FF6384',
  //             ],
  //         }
  //     ]
  // };

  const calculateAvgClimbRating = () => {
    if (sessions.length === 0) {
      return 0;
    }

    const totalClimbRating = sessions.reduce((sum, session) => {
      session.climbs.forEach((climb) => {
        sum += climb.difficulty;
      });
      return sum;
    }, 0);

    const avgClimbRating =
      totalClimbRating /
      sessions.reduce((sum, session) => sum + session.climbs.length, 0);
    return avgClimbRating.toFixed(0);
  };

  const countClimbsByRating = () => {
    // Initialize an object to store the counts for each rating
    const ratingCounts = {};

    // Iterate over each session
    sessions.forEach((session) => {
      // Iterate over each climb in the session
      session.climbs.forEach((climb) => {
        // Get the difficulty rating of the climb
        const rating = climb.difficulty;

        // If the rating is already present in the counts object, increment its count
        if (ratingCounts[rating]) {
          ratingCounts[rating]++;
        } else {
          // If the rating is not present, initialize its count to 1
          ratingCounts[rating] = 1;
        }
      });
    });

    return ratingCounts;
  };

  const climbsByRating = countClimbsByRating();

  const completionRateByRating = () => {
    // Initialize an object to store the completion rates for each rating
    const completionRates = {};

    // Initialize counters for completed and total climbs for each rating
    const completedCounts = {};
    const totalCounts = {};

    // Iterate over each session
    sessions.forEach((session) => {
      // Iterate over each climb in the session
      session.climbs.forEach((climb) => {
        // Get the difficulty rating of the climb
        const rating = climb.difficulty;

        // Increment the total climb count for the rating
        totalCounts[rating] = (totalCounts[rating] || 0) + 1;

        // Increment the completed climb count for the rating if the climb is completed
        if (climb.completed) {
          completedCounts[rating] = (completedCounts[rating] || 0) + 1;
        }
      });
    });

    // Calculate the completion rate for each rating
    Object.keys(totalCounts).forEach((rating) => {
      const completedCount = completedCounts[rating] || 0;
      const totalCount = totalCounts[rating] || 0;
      completionRates[rating] = (completedCount / totalCount) * 100 || 0; // Calculate completion rate as a percentage
    });

    return completionRates;
  };

  const completionByRating = completionRateByRating();

  const calculateAverageSessionTime = () => {
    if (sessions.length === 0) {
      return 0; // Return 0 if there are no sessions
    }

    // Calculate the total session time by summing session times from all sessions
    const totalSessionTime = sessions.reduce((sum, session) => {
      return sum + session.stats.session_time;
    }, 0);

    // Calculate the average session time by dividing total session time by the number of sessions
    const averageSessionTime = totalSessionTime / sessions.length;

    // Return the average session time
    return `${Math.floor(
      averageSessionTime <= 60 ? 0 : averageSessionTime
    )}hr${(averageSessionTime % 60).toFixed(0)}min`;
  };

  const avg_time = calculateAverageSessionTime();

  const calculateAverageClimbsPerSession = () => {
    if (sessions.length === 0) {
      return 0; // Return 0 if there are no sessions
    }

    // Calculate the total number of climbs by summing climbs from all sessions
    const totalClimbs = sessions.reduce((sum, session) => {
      return sum + session.stats.total_climbs;
    }, 0);

    // Calculate the average number of climbs per session by dividing total climbs by the number of sessions
    const averageClimbsPerSession = totalClimbs / sessions.length;

    // Return the average number of climbs per session
    return averageClimbsPerSession;
  };

  const climbsPerSession = calculateAverageClimbsPerSession();

  const calculateTotalCompletedAndFailedClimbs = () => {
    // Initialize counters for completed and failed climbs
    let totalCompletedClimbs = 0;
    let totalFailedClimbs = 0;

    // Iterate over each session
    sessions.forEach((session) => {
      // Iterate over each climb in the session
      session.climbs.forEach((climb) => {
        // Increment the total completed climbs count if climb is completed
        if (climb.completed) {
          totalCompletedClimbs++;
        } else {
          // Increment the total failed climbs count if climb is not completed
          totalFailedClimbs++;
        }
      });
    });

    // Return an object containing the total completed and failed climbs counts
    return {
      totalCompletedClimbs,
      totalFailedClimbs,
    };
  };

  const { totalCompletedClimbs, totalFailedClimbs } =
    calculateTotalCompletedAndFailedClimbs();
  const t = Math.floor(avg_time);

  const ProgressBar = () => {
    const completedP = Math.floor(
      (100 * totalCompletedClimbs) / (totalCompletedClimbs + totalFailedClimbs)
    );
    const failedP = Math.floor(
      (100 * totalFailedClimbs) / (totalCompletedClimbs + totalFailedClimbs)
    );

    return (
      <div className="font-semibold">
        <div className="flex h-[35px] w-full">
          <div
            className="bg-[#4cAf50]"
            style={{
              width: `${completedP}%`,
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <h2 className="flex justify-center">
              {completedP >= 25 ? completedP : ""}%
            </h2>
          </div>
          <div
            className="bg-red-600"
            style={{
              width: `${failedP}%`,
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <h2 className="flex justify-center">
              {failedP >= 25 ? failedP : ""}%
            </h2>
          </div>
        </div>
      </div>
    );
  };

  const data = {
    sessions,
    stats: {
      numCompleted: totalCompletedClimbs,
      numFailed: totalFailedClimbs,
      avgClimbsPerSession: climbsPerSession,
    },
  };

  return (
    <>
      <Dashboard x={data} />

      <div className="font-mono hidden bg-inherit">
        <div className="mt-8 bg-[#222831] rounded-lg pt-2 pb-10 px-2 text-center mb-8">
          <h2 className="text-xl mt-4 font-semibold text-[#c6c6c6]">
            Completed Vs Failed Climbs
          </h2>
          <div className="flex mb-2 mt-6">
            <h3 className="mr-2 rounded-xl bg-[#2a313c] px-3 py-1">
              Completed: {totalCompletedClimbs}
            </h3>
            <h3 className="rounded-xl bg-[#2a313c] px-3 py-1">
              Failed: {totalFailedClimbs}
            </h3>
          </div>
          <ProgressBar
            completed={totalCompletedClimbs}
            failed={totalFailedClimbs}
          />
        </div>

        <div className="mb-8 bg-[#222831] rounded-lg p-2 text-center">
          <h2 className="text-xl my-4 font-semibold text-[#c6c6c6]">
            Avg Climb Rating: V{calculateAvgClimbRating()}
          </h2>
        </div>

        <div className="mb-8 bg-[#222831] rounded-lg pt-2 pb-6 px-2 text-center">
          <h2 className="text-xl my-4 font-semibold text-[#c6c6c6]">
            Climbs Attempted Per Difficulty
          </h2>
          <PieChart climbsByRating={climbsByRating} />
        </div>

        <div className="mb-8 bg-[#222831] rounded-lg pt-2 pb-6 px-2 text-center">
          <h2 className="text-xl my-4 font-semibold text-[#c6c6c6]">
            Completion Rate Per Difficulty
          </h2>
          <BarGraph data={completionByRating} />
        </div>

        <div className="mb-8 bg-[#222831] rounded-lg pt-2 pb-6 px-2 text-center">
          <h1 className="text-xl my-4 font-semibold text-[#c6c6c6]">
            Average Session Time:{" "}
            {parseInt(avg_time) < 60
              ? `${parseInt(avg_time)}min`
              : `${Math.floor(parseInt(avg_time) / 60)}hr${Math.floor(
                  parseInt(avg_time) % 60
                )}min`}
          </h1>
          <SessionHistogram
            sessionTimes={sessions.map((session) => session.stats.session_time)}
            averageSessionTime={t}
          />
        </div>

        <div className="mb-8 bg-[#222831] rounded-lg p-2 text-center">
          <h2 className="text-xl my-4 font-semibold text-[#c6c6c6]">
            Average Climbs Per Session: {climbsPerSession.toFixed(0)}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Stats;
