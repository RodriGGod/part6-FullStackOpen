import { use } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, createAnecdote, initializeAnecdotes } from './reducers/anecdoteReducer'
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'


const App = () => {

  const anecdotes = useSelector(state => state.Anecdotes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  }, []) 


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}

export default App