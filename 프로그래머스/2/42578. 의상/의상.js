function solution(clothes) {
    const clothesDict = clothes.reduce((acc, cur) => {
        acc[cur[1]] = (acc[cur[1]] || 0) + 1;
        return acc;
    }, {});

    let combinations = 1;
    for (const key in clothesDict) {
        combinations *= clothesDict[key] + 1;
    }

    // 적어도 하나의 의상은 입어야 하므로 아무것도 안 입는 경우를 제외
    return combinations - 1;
}
