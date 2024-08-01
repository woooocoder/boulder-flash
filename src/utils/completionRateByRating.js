export const completionRateByRating = (sessions) => {
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