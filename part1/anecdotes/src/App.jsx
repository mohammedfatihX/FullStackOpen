import { useState } from 'react'
import './App.css'




function App() {
    Math.random()
    const [anecdoteIndex, setAnecdoteIndex] = useState(0)
    const [votes,setVotes]= useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})
    const [mostVoted,setMostVoted] = useState(0) 
    const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.']
    const updateMostVoted = (updateVotes)=>{
        let currentMaxVote = Math.max(...Object.values(updateVotes))
        console.log("currentmax",currentMaxVote)
        let tmp=Object.keys(updateVotes).filter(key => updateVotes[key]>=currentMaxVote)
        console.log("tmp ",tmp)
        let maxVotedIndex = Object.values(tmp)[0] 
        console.log("currentMaxVote index is ",maxVotedIndex)
        setMostVoted(()=>maxVotedIndex)

    }
    const updateVote= (index)=>{
        let updateVoteObject = {...votes}
        updateVoteObject[index] = updateVoteObject[index]+1
        setVotes(() =>updateVoteObject) 
        updateMostVoted(updateVoteObject)
        console.log("haha votes",votes)
        console.log("anecdotes",anecdotes)
        console.log("curren index",anecdoteIndex)
        console.log("updated votes",updateVoteObject)
    }
    const getNextAnecdote = ()=>{
        setAnecdoteIndex(() => Math.floor(Math.random()*anecdotes.length))
    }
  return (
    <>
      <h1>{anecdotes[anecdoteIndex]}</h1>
      <p> Current Vote {votes[anecdoteIndex]}</p>
      <button onClick={()=> updateVote(anecdoteIndex)} >vote</button>
      <button onClick={()=>getNextAnecdote()}> next anecdote</button>
      <br/>
      <h2>Anecdote with most votes</h2>
      <h4>{anecdotes[mostVoted]}</h4>
      <p>with {votes[mostVoted]} votes</p>
    </>
  )
}

export default App
