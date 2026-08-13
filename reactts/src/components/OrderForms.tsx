import React, { useState } from 'react'

interface OrderFormsProps {
    onSubmit(order: { name: string; cups: number }): void
}


function OrderForms({ onSubmit }: OrderFormsProps) {
    const [name, setName] = useState("masala");
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,cups});
    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            <label>chai name</label>
            <input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
            />

            <label>cups</label>
            <input
                type='number'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCups(Number(e.target.value) || 0)
                }
            />
        <button type='submit'>submit</button>
        </form>
    )
}

export default OrderForms