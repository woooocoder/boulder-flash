export const calculateTotalCompletedAndFailedClimbs = (sessions) => {
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
        totalFailedClimbs
    };
};