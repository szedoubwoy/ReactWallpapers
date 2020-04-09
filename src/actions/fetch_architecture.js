export function fetchArchitecture(callback) {
  return function(dispatch) {
    fetch(
      `https://api.unsplash.com/photos/?client_id=eswXx3ZP77UKNX2fArkl4AuY-GmFAR_R-3mwqM9cAIs&page=1`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch({ type: "FETCH_ARCHITECTURE", payload: res });
        console.log("ARCHITECTURE");
      })
      .then(callback())
      .catch(err => {
        console.log(err);
      });
  };
}
