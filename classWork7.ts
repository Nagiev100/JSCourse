const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];
//Укажите значения, чтобы не было ошибок компиляции
const a1: number = 12;
const a2: boolean = true;
const a3: string = 'string';
const a4: number[] = [21, 32];
const a5: Array<string> = ['a', 'b'];
const a6: [string] = ['a'];
const a7: [boolean, number] = [true, 12];
const a8: [number[], Array<string>] = [[12, 34], ['string','string']];

//Укажите типы, чтобы не было ошибок компиляции

const b1: number  = 70;
const b2: boolean  = false;
const b3: string = "lalaka";
const b4: boolean[] = [true, false];
const b6: [number,string] = [10, "10"];
const b7: boolean[] = [...[true]];