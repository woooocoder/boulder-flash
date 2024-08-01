export const calculateOverallCompletionRate = (sessions) => {
    if (sessions.length === 0) {
        return 0; 
    }

    // Calculate total completion rate
    const totalCompletionRate = sessions.reduce((sum, session) => {
        // Check if session and session.stats are not null or undefined
        if (session && session.stats) {
            return sum + session.stats.completion_rate;
        } else {
            // Log session and session.stats to debug
            console.error("Invalid session data:", session);
            return sum;
        }
    }, 0);

    // Calculate average completion rate
    const averageCompletionRate = totalCompletionRate / sessions.length;
    return parseInt(averageCompletionRate.toPrecision(2));
};
 