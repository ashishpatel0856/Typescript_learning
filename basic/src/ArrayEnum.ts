const chaiFlavour: string[] = ["masala","Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4,6,2.1,7]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "masala", price: 15},
    {name: "adrak", price:25},

]

const cities: readonly string[]= ["delhi","jaipur"]


const table: number[][] = [
    [1,2,3],
    [4,8,25]
]

let chaitype: [string,number];
chaitype = ["masala",20]
// chaitype= [20,[masala]]

let userinfo: [string,number,boolean?]
userinfo = ["ashish",100]
userinfo = ["ashish",100,true]


const location: readonly [number,number] = [23,2.1]

const chaiItems: [name: string, price: number] = ["masala",50]

// enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE;

enum Status {
    PENDING =100,
    SERVERD, // 101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}


function makeChai(type: ChaiType) {
    console.log(`making: ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala");

enum RandomEnum {
    ID =1,
    NAME = "chai"
}


const enum sugar {
    LOW =1,
    MEDIUM =2,
    HIGH =3
}

const s = sugar.HIGH;


let t: [string,number] = ["chai",10]
t.push("extra")