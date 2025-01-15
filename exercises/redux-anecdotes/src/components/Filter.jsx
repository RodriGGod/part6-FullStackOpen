import { filterChange } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'


const Filter = () => {
  const dispatch = useDispatch();
  

  const handleChange = (event) => {
    
    const filter = event.target.value;
    dispatch(filterChange(filter));

    console.log('filter', filter);
    
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter