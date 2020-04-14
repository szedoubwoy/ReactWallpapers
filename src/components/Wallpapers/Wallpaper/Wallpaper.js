import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Button from "./../../Button/Button";

class Wallpaper extends React.Component {
  state = {
    isFavourite: false
  };

  checkIfFavourite = () => {
    const localStorageState =
      JSON.parse(localStorage.getItem("favourites")) || [];
    if (localStorageState.some(item => item.id === this.props.id)) {
      this.setState({ isFavorite: true });
    }
  };

  clickHandler = e => {
    e.preventDefault();

    const localStorageState =
      JSON.parse(localStorage.getItem("favourites")) || [];
    localStorage.setItem(
      "favourites",
      JSON.stringify([
        ...localStorageState,
        {
          id: this.props.id,
          url: this.props.urls.regular
        }
      ])
    );
    this.setState({ isFavorite: false });
  };

  componentDidMount() {
    this.checkIfFavourite();
  }

  componentDidUpdate() {
    console.log(
      "retrievedObject: ",
      JSON.parse(localStorage.getItem("favourites"))
    );
  }

  render() {
    const { id, user, urls } = this.props;

    return (
      <>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <img
            src={urls.regular + "&w=550&h=550&dpi=2"}
            className="img-fluid"
            alt="{author}"
          />
          <div className="py-2 row">
            <div
              className="d-md-inline-flex text-center text-md-left 
                        col-12 col-md-9"
            >
              <span className="text-muted font-weight-bold">{user.name}</span>
            </div>
            <div className="d-md-inline-flex ml-auto col-12 col-md-3 text-center text-md-right">
              Fav:
              <span className="pl-1">
                {this.state.isFavorite && (
                  <Button onClick={this.clickHandler}>Save</Button>
                )}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Wallpaper;
