export const avg_difficulty = (ratings) => {
    const avg = ratings.reduce((sum, rating) => sum + rating)
    return avg / ratings.length
}