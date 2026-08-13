type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
};

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serverChai(order: ChaiOrder){
    console.log(order);
}


type TeaRecipe = {
    watar: number;
    milk: number
}

// class masalaChai implements TeaRecipe {
//     watar =100;
//     milk =50;
// }

interface CupSize {
   size: "small" | "large"
} 

// class Chai implements CupSize {
//     size: "small" | "large ="large
// }

// type response = {ok: true} | {ok: false}
// class myRes implements response {
//     ok: boolean=true;
// }


type TeaType = "masala" | "ginger" | "lemon"
function orderChai(t: TeaType){
    console.log(t);
}
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai ={
    teaLeaves: 2,
    masala: 1
}

type User = {
    username : string;
    bio?: string
}
const u1 : User = {username: "ashish"}
const u2 : User = {username: "ashish",bio: "ashish.in"}


type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "bussiness man",
    version:1
}

// cfg.appName = "Chaicode"