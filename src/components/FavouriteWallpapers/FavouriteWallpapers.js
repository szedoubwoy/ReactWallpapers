import React from "react";
import Wallpapers from "../../components/Wallpapers/Wallpapers";
import { render } from "react-dom";

class FavouriteWallpapers extends React.Component {
  state = {
    list: []
  };

  // deleteHandler = (e, id) => {
  //   //e.preventDefault();
  //   const localStorageState =
  //     JSON.parse(localStorage.getItem("favourites")) || [];
  //   this.setState({
  //     list: JSON.parse(localStorageState.filter(wp => wp.id === id)) || []
  //   });
  // };

  componentDidMount() {
    this.setState({
      list: JSON.parse(localStorage.getItem("favourites")) || []
    });
  }

  render() {
    return (
      <div className="row my-5">
        {this.state.list.length > 0 ? (
          this.state.list.map(key => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={key.id}>
              <img
                src={key.url + "&w=550&h=550&dpi=2"}
                className="img-fluid"
                alt={key.id}
              />
              <div className="py-2 row">
                <div className="d-md-inline-flex ml-auto col-12 col-md-3 text-center text-md-right">
                  <span className="pl-1">
                    <button>delete</button>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center col-12">
            There are no favourites wallpapers here...
          </h5>
        )}
      </div>
    );
  }
}

export default FavouriteWallpapers;
