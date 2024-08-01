export const calculateAvgSessionTime = (sessions) => {
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
    return `${Math.floor(averageSessionTime <= 60 ? 0 : averageSessionTime)}hr${(averageSessionTime%60).toFixed(0)}min`;
};