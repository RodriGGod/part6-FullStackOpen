import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import { createSelector } from 'reselect'




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
    const selectFilteredAnecdotes = createSelector(
        state => state.anecdotes,
        state => state.filter,
        (anecdotes, filter) => 
            anecdotes
                .filter(anecdote => anecdote.content.toLowerCase().includes((filter || '').toLowerCase()))
                .sort((a, b) => b.votes - a.votes)
    )

    const anecdotes = useSelector(selectFilteredAnecdotes)


    

    const Vote = (id) => {

        dispatch(addVote(id))

        const anecdote = anecdotes.find(n => n.id === id)

        dispatch(setNotification("you voted for " + anecdote.content))

        setTimeout(() => {
            dispatch(removeNotification())
          }, 5000)

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