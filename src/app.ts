let addElem: (num:number, arr:number[]) => number[];

const num = 5;
const arr = [10, 12, 13];

addElem = (num, arr) => {
    return [...arr, num];
}