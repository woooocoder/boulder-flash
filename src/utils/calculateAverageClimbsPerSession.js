export const calculateAverageClimbsPerSession = (sessions) => {
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