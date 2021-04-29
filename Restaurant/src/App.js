import './App.css'
import React, {useEffect, useState} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Pizza from './components/Pizza/Pizza.jsx'

const App = () => {

  
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)

useEffect(() => {
 
      setloading(true)
      setData([])
     

      fetch(`/api/data`)
      .then(  (response) => (response.json()))
      .then(  (respAdat)     => (setData(respAdat)))
      .catch( (error)    => {
                              console.log('error', error)
                              setData(null)
                            }
            )
      .finally( ()=>{
      
                      console.log('fetch end');
                      setloading(false)
                    }
              )
      return () => {
      // cleanup
      }
}, [])

console.log('data=',data);




  return (
    <div className="App">
      <h1>PIZZA a'la MAMMAAAAA</h1>
      {loading && <Loading/>}

          {   (data === null)
                              ? <p>Upps something happend!</p>
                              : data.map((pizza)=>( <div className="menu">{pizza.name}
                                                   < Pizza pizza = {pizza}/>
                                                   </div>  ))

          }

           <p className="btn"><button className="btn">Book a table</button></p> 




    </div>
  )
}

export default App
