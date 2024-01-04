//[3,1,2,3] 4/2=2 [ ][ ]
//[3][1]
//[3][2]
//총 2개

//[3,3,3,2,2,4] 6/2=3 [ ][ ][ ]
//[3][2][4]
//[3][2][4]
//[3][2][4]
//총 3개

//[3,3,3,2,2,2] 6/2=3 [ ][ ][ ]
//[3][3][2]
//[2][2][3]

function solution(nums) {
    var answer = 0;
    let pick = Math.floor(nums.length/2);
    let setLength = [...new Set(nums)].length
    
    return setLength < pick ? setLength : pick;
}
