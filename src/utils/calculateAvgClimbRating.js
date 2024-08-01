export const calculateAvgClimbRating = (sessions) => {
    if (sessions.length === 0) {
        return 0; 
    }

    const totalClimbRating = sessions.reduce((sum, session) => {
        session.climbs.forEach(climb => {
            sum += climb.difficulty;
        });
        return sum;
    }, 0);

    const avgClimbRating = totalClimbRating / sessions.reduce((sum, session) => sum + session.climbs.length, 0);
    return avgClimbRating.toFixed(0);
};