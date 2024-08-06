export const formatDateTime = (date) => { // to format Mar 12 Jan 2021
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'short' });
    return `${d.getDate()} ${month} ${d.getFullYear()}`;
}