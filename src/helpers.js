export const toStr = (num) => String(num);
export const splitStr = (val) => toStr(val).split('');
export const getMatchNums = (randArr, userArr) => randArr.filter((num) => userArr.includes(num));
export const getNotMatchNums = (randArr, userArr) => randArr.filter((num) => !userArr.includes(num));
export const getRandNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const hideNum = (num) => toStr(num).replace(/\d/g, '*');
export const withComma = (arr) => arr.join(', ');

export const genRandStrOfNums = (arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
  const rand = getRandNum(3, 6);

  let res = null;

  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];

    arr[i] = arr[rand];
    arr[rand] = temp;
  }

  res = arr.slice(0, rand).join('');

  return res;
};
