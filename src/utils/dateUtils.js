export const handleDate = (date) => {
    const yyyy = date.substring(0,4);
    const dd = date.substring(8,10);
    const mm = date.substring(5,7);
    return `${mm}/${dd}/${yyyy}`;
};
