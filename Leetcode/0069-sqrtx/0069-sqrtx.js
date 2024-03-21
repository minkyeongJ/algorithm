/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x

    let low = 0;
    let high = x;
    let mid = 0;

    while(low <= high){
        mid = Math.floor((low + high)/2);
        if(mid*mid<=x && x<(mid+1)*(mid+1)) {
            return mid;
        }else if(mid*mid < x){
            low = mid + 1;
        }else if(mid*mid > x){
            high = mid - 1;
        }   
    }
    return -1;
};