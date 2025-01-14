import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

import { setNotification, removeNotification, showNotification } from '../reducers/notificationReducer'

/* import { createSelector } from 'reselect'
import anecdoteService from '../services/anecdotes'
import { setAnecdotes } from '../reducers/anecdoteReducer'
import { filterChange } from '../reducers/filterReducer'
import { useEffect } from 'react'
import { initializeAnecdotes } from '../reducers/anecdoteReducer' */




const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}


const Anecdotes = () => {

    const dispatch = useDispatch()
    
    const filter = useSelector((state) => state.filter)

    
    
    const anecdotes = useSelector((state) =>
        state.anecdotes.filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
      )
    

    /* useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch]) */

   


    const Vote = (id) => {

        dispatch(vote(id))
        
        const anecdote = anecdotes.find(n => n.id === id)

        dispatch(showNotification("you voted for " + anecdote.content))

        

    }



    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() =>
                        Vote(anecdote.id)
                    }
                />
            )}
        </div>
    )
}

export default Anecdotes