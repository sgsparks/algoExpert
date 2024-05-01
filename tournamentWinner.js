function tournamentWinner(competitions, results) {
    // Write your code here.
    let tracker = {}

    for(let i = 0; i < competitions.length; i++) {
        if(!tracker[competitions[i][0]]) {
            tracker[competitions[i][0]] = 0;
        }
        if(!tracker[competitions[i][1]]) {
            tracker[competitions[i][1]] = 0;
        }
        if(results[i] === 0){
            tracker[competitions[i][1]] = tracker[competitions[i][1]] + 3
        }
        if(results[i] === 1){
            tracker[competitions[i][0]] =  tracker[competitions[i][0]] + 3
        }
    }
    let value = 0;
    let key = '';

    for(let item in tracker) {
        if(tracker[item] > value) {
            value = tracker[item];
            key = item;
        }
    
    }

    return key;
  }

tournamentWinner(
    [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"]
    ], 
    [0, 0, 1]
);