export const num_failed = (bools) => {
    const checkFalse = (bool) => {
        if (bool) return 1
        return 0 
    } 
    const n = bools.reduce((total, bool) => 
        total + checkFalse(bool)
    )

    return n
}