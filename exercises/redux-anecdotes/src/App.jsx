import { use } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, createAnecdote } from './reducers/anecdoteReducer'
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Filter from './components/Filter'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()


  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}

export default App