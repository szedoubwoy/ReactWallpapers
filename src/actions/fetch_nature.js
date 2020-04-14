import axios from "axios";

export function fetchNature(func) {
  return function(dispatch) {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&query=nature&client_id=eswXx3ZP77UKNX2fArkl4AuY-GmFAR_R-3mwqM9cAIs`
      )
      .then(res => {
        dispatch({ type: "FETCH_NATURE", payload: res.data.results });
        func(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };
}
