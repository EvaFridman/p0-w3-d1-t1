const a = "hi"; // console.log(typeof a) вывел string
const b = 42; // console.log(typeof a) вывел number
const c = true; // console.log(typeof a) вывел boolean
const d = undefined; // console.log(typeof a) вывел undefined
const e = null; // console.log(typeof a) вывел object (ожидаемое поведение, так и должно быть)
const f = 10n; // console.log(typeof a) вывел bigint
const g = Symbol("id"); // console.log(typeof a) вывел symbol