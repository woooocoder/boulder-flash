export const calculateSessionTime = (start, end) => {
    const startDate = new Date(`2000-01-01T${start}`);
    const endDate = new Date(`2000-01-01T${end}`);
    const minutes = Math.floor((endDate - startDate) / 60000);
    return minutes
} 