export const bestClimb = (session) => {
    const arr = session.climbs.map((climb) => climb.gym_rating);
    return Math.max(...arr);
};