function sortedSquaredArray(array) {
    // Write your code here.

    let squared = [];

    for(let i = 0; i < array.length; i++){
        squared.push(array[i] * array[i])
    }

    squared.sort((a,b) => {
        return a - b;
    })


    console.log(squared);
  }


  sortedSquaredArray([9,2,3,5,6,8,1])