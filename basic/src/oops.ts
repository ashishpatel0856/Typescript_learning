// class Chai {
//     flavour: string;
//     price: number

//     constructor(flavour: string, price: number){
//         this.flavour = flavour
//         this.price = price
//         console.log(this)
//     }
// }

// const masalaChai = new Chai("Ginger",20);
// masalaChai.flavour = "masala"


class Chai {
    public flavor: string = "masala"
    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients // ok
    }
}




class shop {
        protected shopName = "Chai corner"

}
class Branch extends shop {
    getName(){
        return this.shopName
    }
}



class walet {
    #balance = 100
    getBalance() {
        return this.#balance
    }

}
const w = new walet();

class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai  {
    private _sugar = 2
    get sugar() {
        return this._sugar
    }
    set sugar(value:number){
        if(value >5) throw new Error("Too sweet");
        this._sugar=value
    }
}

const c = new ModernChai();
c.sugar =3

class Ekchai {
    static shopname ='chaicode caffe'
    constructor(public flavour: string){}
}
console.log(Ekchai.shopname);

abstract class Drink{
    abstract make(): void
}


class mychai extends Drink{
    make() {
        console.log("brewing chai");
    }
}


class heater {
    heat(){}
}

class chaimaker{
    constructor(private heater: heater){}

    make(){
        this.heater.heat()
    }
}