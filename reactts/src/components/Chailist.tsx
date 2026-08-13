import React from 'react'
import type { Chai } from '../types'
import { Chaicard } from './Chaicard'

interface Chailistprops {
    items: Chai[]
}
const Chailist = ({items}: Chailistprops) => {
  return (
    <div>
        {items.map((chai) => (
            <Chaicard
            key={chai.id}
            name={chai.name}
            price={chai.price}
            isSpecial={chai.price>30}
            />
        ))}
    </div>
  )
}

export default Chailist