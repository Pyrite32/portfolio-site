export default (val10: number, by: number) => {
    const PHI = 1.618033988749;
    const exponent = Math.pow(PHI, 1 / (1 - by)) - Math.pow(PHI, 1 / (1 + by));
    return Math.pow(val10, exponent);
};