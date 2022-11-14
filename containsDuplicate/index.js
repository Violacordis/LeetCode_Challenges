//<-------------------------------containsDuplicate--------------------------------------------------->

/*
 * pseuodocode:
 * 1. create a set from the array of numbers nums - set stores unique values
 * 2. check if the length of the set is equal to the length of the array nums
 * 3. if the length of the set is not equal to the length of the array nums, then there is a duplicate
 * 4. return true if there is a duplicate, else return false
 */

// Solution 1
var containsDuplicate = function (nums) {
  let set = [...new Set(nums)];
  console.log(set);
  return set.length !== nums.length;
};

// Solution 2
var containsDuplicate = function (nums) {
  // let set = [...new Set(nums)];
  // console.log(set);
  // return set.length !== nums.length;
  const duplicateInt = nums.filter((num, index) => nums.indexOf(num) !== index);
  return duplicateInt.length > 0;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
