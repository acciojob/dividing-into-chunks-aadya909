const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = []; // Stores the final list of subarrays
  let currentSubarray = []; // Stores the current subarray being built
  let currentSum = 0; // Tracks sum of the current subarray

  for (let num of arr) {
    // If adding num exceeds n, start a new subarray
    if (currentSum + num > n) {
      result.push(currentSubarray); // Save the previous subarray
      currentSubarray = []; // Start a new subarray
      currentSum = 0; // Reset the sum
    }

    currentSubarray.push(num);
    currentSum += num;
  }

  // Add the last subarray if it exists
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Prompt user for input
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

