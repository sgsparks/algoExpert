function twoNumberSum(array, targetSum) {
    // Write your code here.
  const nums = {};

  for(let item of array) {
    let potential = targetSum - item;
    if(potential in nums){
      return [potential, item];
    }
    else{
      nums[item] = true;
    }
    console.log(nums);
  }
  return [];
}

twoNumberSum([3,5,-4,8,11,1,-1,6], 6)