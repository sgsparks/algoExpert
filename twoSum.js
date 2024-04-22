function twoNumberSum(array, targetSum) {
  // Write your code here.
   let result = [];

  for(let i = 0; i < array.length; i++){
    const potential = targetSum - array[i]
    if(array.includes(potential) && !result.includes(array[i])){
      result.push(array[i], potential)
    }
  }
  return result;
}