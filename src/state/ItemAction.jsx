import axios from 'axios';

export const fetchItems = () => {
  return (dispatch) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => {
        dispatch({ type: 'SET_ITEMS', payload: response.data.results });
        console.log(response,"ggg")
      })
      .catch((error) => {
        // Handle error
      });
  };
};