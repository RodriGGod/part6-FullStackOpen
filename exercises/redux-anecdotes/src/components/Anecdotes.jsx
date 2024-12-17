import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'



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
    const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))

    return (
        <ul>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() =>
                        dispatch(addVote(anecdote.id))
                    }
                />
            )}
        </ul>
    )
}

export default Anecdotes