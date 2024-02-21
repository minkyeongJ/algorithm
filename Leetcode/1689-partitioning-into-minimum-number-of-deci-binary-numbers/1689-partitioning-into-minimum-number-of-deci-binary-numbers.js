/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    const arr = n.split('').map(el => parseInt(el));
    return Math.max(...arr);
};