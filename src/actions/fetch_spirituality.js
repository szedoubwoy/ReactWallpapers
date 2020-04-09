export function fetchSpirituality() {
  return function(dispatch) {
    fetch(
      `https://api.unsplash.com/photos/?client_id=eswXx3ZP77UKNX2fArkl4AuY-GmFAR_R-3mwqM9cAIs`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch({ type: "FETCH_SPIRITUALITY", payload: res });
        console.log("SPIRITUALITY");
      })
      .catch(err => {
        console.log(err);
      });
  };
}
