// 23:11~23:50
//베스트 앨범 만들기
// 장르 별 가장 많이 재생된 노래 '2개씩' 모아
// 노래 = 고유번호

// 수록기준 1) 많이 재생된 장르 2) 장르 내에서 많이 재생된 노래순 3) 재생횟수가 같다면 고유번호가 낮은 순
// genres: 노래장르, plays: 재생 횟수
// i 가 고유 번호

//table : key=genres , value = {고유번호: i, plays: plays[i]}
function solution(genres, plays) {
    var answer = [];
    
    const setGenres = [...new Set(genres)];
    
    const table = new Map();
    genres.map((genre, i) => table.set(genre, table.get(genre) ? [...table.get(genre), {_id: i, play: plays[i]}] : [{_id: i, play: plays[i]}]));
    
    let totalPlaysGenres = [];
    setGenres.forEach((genre, i) => {
        totalPlaysGenres[i] = {genre : genre, totalPlays: table.get(genre).reduce((acc, cur) => cur.play + acc, 0)}
    })
    const sortedManyPlayingGenre = totalPlaysGenres.sort((a, b) => b.totalPlays - a.totalPlays)    
    const manyPlayedList = sortedManyPlayingGenre.map((el) => el.genre)

    for(let genre of manyPlayedList){
        const albums = table.get(genre);
        if(albums.length !== 1){
            const sorted = albums.sort((a,b) => b.play - a.play);
            answer = [...answer, albums[0]._id, albums[1]._id]
        }else{
            answer = [...answer, albums[0]._id];
        }
    }
    
    return answer;
}
