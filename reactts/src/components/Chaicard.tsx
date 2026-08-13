interface ChaiCardprop {
    name: string;
    price: number;
    isSpecial?: boolean
}
export function Chaicard(
    {name,price,isSpecial = false}:ChaiCardprop){
    return (
        <article>
            <h1>
                {name} {isSpecial && <span>star</span>}
            </h1>
            <p>{price}</p>
        </article>
    )
}