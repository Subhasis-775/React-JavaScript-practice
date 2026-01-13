
function customSort(arr) {
  let chars = [];
  const nums = [];
  for (let item of arr) {
    if (typeof item === 'string' && item.length === 1) {
      chars.push(item);
    } else if (typeof item === 'number') {
      nums.push(item);
    }
  }
  for (let i = 0; i < chars.length; i++){
    for (let j = 0; j < chars.length - i - 1; j++){
      if (chars[j] > chars[j + 1]) {
        [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
      }
    }
  }
  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length - i - 1; j++){
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return [...chars, ...nums];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;
