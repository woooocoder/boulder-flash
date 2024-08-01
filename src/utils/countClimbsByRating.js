export const countClimbsByRating = (sessions) => {
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