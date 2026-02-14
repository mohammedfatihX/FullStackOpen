import { useState } from 'react'
import './App.css'



const StatisticLine = ({text,value}) => {
    return( 
                <th>
                    <td>{text}</td> 
                    <tr>{value}</tr>
                </th>
            )
    } 

const Statistics = ({total,good,neutral,bad}) =>{
    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />
                    <StatisticLine text="Average" value={(((good*1)+(bad*-1))/total).toFixed(2)} />
                    <StatisticLine text="Prositive" value={((good/total)*100).toFixed(2)} />
                    <StatisticLine text="Total" value={total}/>
                </tbody>
            </table>
        </div>

    )

}
const  App = () => {
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const [total,setTotal] = useState(0)
    const updateGood = () => {
        
        setGood(currentValue => currentValue+1)
        setTotal(currentValue => currentValue+1)
    }
    const updateNeutral = () => {
        setNeutral(currentValue => currentValue+1)
        setTotal(currentValue => currentValue+1)
    }
    const updateBad = () => {
        setBad(currentValue => currentValue+1)
        setTotal(currentValue => currentValue+1)
    }

  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={updateGood}>good</button>
      <button onClick={updateNeutral}>Neutral</button>
      <button onClick={updateBad}>bad</button>
      {
        total>0 ? <>

              <Statistics total={total} good={good} bad={bad} neutral={neutral} />
          </>:
          <>
            <h1>Statistics</h1>
            <h3>no feedback given</h3>
          </>

      }
    </>
  )
}

export default App
