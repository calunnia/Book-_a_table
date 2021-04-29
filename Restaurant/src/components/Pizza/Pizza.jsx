import React,{useState} from 'react'

function Pizza({pizza}) {

  const [show, setShow]  = useState()
  
console.log('pizza=',pizza);
    return (
        <div>
            {
                <button className="details" onClick = { () => (setShow(!show))}>

                    {show
                        ? 'Hide Details'
                        : 'Show Details'
                    }
                    </button>                
            }
                                         <div>

                                                {  show
                                                            ? <div className="pizza">
                                                                 <p> {pizza.menuNumber}.</p> 
                                                                 <p><b> {pizza.name}</b></p> 
                                                                  <p> Rate: {pizza.rate}</p> 
                                                                  <p> Price: {pizza.price} Ft</p> 
                                                                 {/*  <p>{pizza.drinks.map((drink) =>(drink.split("")))</p> */}
                                                                 <b>Drinks: </b>
                                                                {pizza.drinks.map(drink =>  <span>{drink} </span> )} 
                                                                <p> <b>Choosable Topic:</b> {pizza.topic.map((topic,i) => ( <span>{topic}{i<pizza.topic.length-1 ?',':''} </span> ))}</p>
                                                                <p><b>Size: </b>{ pizza.size.map((size,i)=>( <span>{size} {i<pizza.size.length-1 ?',':''} </span> ))}</p>
                                                             </div>
                                                            : ''
                                                }
                                                </div>


                                        </div>
    )
}

export default Pizza
