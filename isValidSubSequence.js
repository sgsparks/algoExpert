function isValidSubsequence(array, sequence) {
    let index = 0;

    for(let i = 0; i < array.length; i++) {
        if(sequence[index] === array[i]){
            index++;
        }
    }
    return index === sequence.length;
}

isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10])