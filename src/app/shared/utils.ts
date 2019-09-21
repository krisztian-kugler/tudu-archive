export const moveInArray = (arr: Array<any>, from: number, to: number): Array<any> => {
  const el = arr.splice(from, 0)[0];
  return arr.splice(to, 0, el);
};

/* export const moveInArray2 = (arr: Array<any>, from: number, to: number): Array<any> => {
  if (from < to) return [...arr.slice(0, from), ...arr.slice(from + 1, to), arr[from], ...arr.slice(to + 1)];
  else if (from > to)
    return [...arr.slice(0, to), arr[from], ...arr.slice(to, from), ...arr.slice(from, arr.length - 1)];
  else return arr;
}; */
