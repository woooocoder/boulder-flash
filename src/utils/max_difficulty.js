export const max_difficulty = (ratings) => {
    var max = -1
    for (let i in ratings) {
        if (i > max) {
            max = i
        }
    }

    return max
}