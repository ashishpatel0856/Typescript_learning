function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `making ${kind} chai...`
    }
    return `chai order: ${kind}`;
}

function serveChai(msg?: string){
    if(msg){
        return `serving ${msg}`;
    }
    return `servig default masala chai`
}

function orderChai(size: "small"| "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === 'medium' || size == 'large'){
        return `make extra chai`
    }

    return `chai order #${size}`
}


class KulhadChai {
    serve(){
        return `serving kulhad chai`
    }
}

class Cutting{
    serve(){
        return `serving cuttingchai`
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !==null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai : ${item}`
}


type masalaChai = {type: "masala"; spicelevel: number};
type gingerChai = {type: "ginger"; amout: number};
type elaichiChai = {type: "elaichi"; aroma: number};

type Chai = masalaChai | gingerChai | elaichiChai

function MakeChai (order: Chai){
    switch (order.type){
     case "masala":
        return `masala chai`
        break;
     case "elaichi":
        return `elaichi chai`
        break;
     case "ginger":
        return `ginger chai`
        break;
    }
}


function brew(order: masalaChai|gingerChai){
    if("spicelevel" in order){
        //
    }
}


function isStringArray(arr: unknown): arr is string[] {

}

