//<--------------------------------------------Remove duplicates from sorted arrays----------------------------------------------------------------------->

/**
 *
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Pseudocode:
 * 1. Get the unique integers
 * 2. Get the length of the unique integers
 * 3. Get the duplicate integers
 * 4. Get the length of the duplicate integers
 * 5. Replace the original array with the unique integers
 * 6. Replace the duplicate integers with _
 * 7. Return the length of the unique integers
 */

var removeDuplicates = function (nums) {
  // Getting the unique integers
  const uniqueIntegers = [...new Set(nums)];
  console.log(uniqueIntegers);

  // Getting the length of the unique integers
  const uniqueIntegersLength = uniqueIntegers.length;
  // console.log(uniqueIntegersLength);

  // getting the duplicate integers
  const duplicateIntegers = nums.filter(
    (item, index) => nums.indexOf(item) !== index
  );
  // console.log(duplicateIntegers);

  //getting the length of the duplicate integers
  const duplicateIntegersLength = duplicateIntegers.length;

  // replacing the original array with the unique integers
  nums.splice(0, nums.length, ...uniqueIntegers);
  // console.log(nums);
  // replace the duplicate integers with _
  nums.splice(
    uniqueIntegersLength,
    duplicateIntegersLength,
    ..."_".repeat(duplicateIntegersLength).split("")
  );
  console.log(nums);
  // returning the length of the unique integers
  return uniqueIntegersLength;
};

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1,2,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
