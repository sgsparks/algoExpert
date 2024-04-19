function twoNumberSum(array, targetSum) {
  // Write your code here.
   let result = [];

  for(let i = 0; i < array.length; i++){
    cons potential = targetSum - array[i]
    if(array.includes(potential) && potential !== array[i]){
      result.push(array[i], potential)
    }
  }
  return result;
}