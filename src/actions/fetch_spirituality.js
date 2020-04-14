import axios from "axios";

export function fetchSpirituality(func) {
  return function(dispatch) {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&query=spirituality&client_id=eswXx3ZP77UKNX2fArkl4AuY-GmFAR_R-3mwqM9cAIs`
      )
      .then(res => {
        dispatch({ type: "FETCH_SPIRITUALITY", payload: res.data.results });
        func(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };
}
