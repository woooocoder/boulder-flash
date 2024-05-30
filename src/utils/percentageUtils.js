export const percentageColor = (percentage) => {
    if (percentage < 40) return 'text-red-500';
    if (percentage >= 40 && percentage <= 55) return 'text-orange-500';
    if (percentage > 55) return 'text-green-500';
};

