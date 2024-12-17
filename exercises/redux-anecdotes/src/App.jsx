import { use } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, createAnecdote } from './reducers/anecdoteReducer'
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()


  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}

export default App