import './App.css'
import { Chaicard } from './components/Chaicard.tsx'
import Counter from './components/Counter.tsx'

import type { Chai } from './types.ts'
import Chailist from './components/Chailist.tsx'
import OrderForms from './components/OrderForms.tsx'
import Card from './components/Card.tsx'

const menu: Chai[] =[
  {id:1, name: "masala",price:25},
  {id:2, name: "ginger",price:15},
  {id:3, name: "elaichi",price:15}
]
function App() {

  return (
    <>
    <h1>vite + react</h1>
    <Chaicard
    name = "headphone" 
    price={2000}
    />

    <Chaicard
    name = "Iphone" 
    price={150000}
    />

    <div>
      <Counter/>
    </div>

    <div>
      <Chailist items={menu}/>
    </div>

    <div>
      <OrderForms
      onSubmit={(order) =>{
        console.log("placed",order.name,order.cups)
      }}
      />
    </div>


    <div>
      <Card
      title='chai aur code'
      footer ={<button>Order now</button>}
      />
    </div>
    </>
  )
}

export default App
