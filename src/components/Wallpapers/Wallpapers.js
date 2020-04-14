import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "../Button/Button";
import Wallpaper from "./Wallpaper/Wallpaper";

import { fetchNature } from "../../actions/fetch_nature";
import { fetchSpirituality } from "../../actions/fetch_spirituality";
import { fetchArchitecture } from "../../actions/fetch_architecture";

class Wallpapers extends React.Component {
  state = {
    wallpaperList: [],
    favourites: []
  };

  setCurrentList = (category, data) => {
    this.setState(prevState => {
      return {
        ...prevState,
        wallpaperList: data
      };
    });
  };

  setListHandler = data => {
    this.setState(prevState => {
      return {
        ...prevState,
        wallpaperList: data
      };
    });
  };

  getSpiritualityWallpapers = e => {
    e.preventDefault();

    this.props.fetchSpirituality(this.setListHandler);
  };

  getNatureWallpapers = e => {
    e.preventDefault();

    this.props.fetchNature(this.setListHandler);
  };

  getArchitectureWallpapers = e => {
    e.preventDefault();

    this.props.fetchArchitecture(this.setListHandler);
  };

  handleFavourite = e => {
    this.setState({
      favourite: e.target.value
    });
  };

  componentDidUpdate() {
    console.log(localStorage.getItem("favourites"));
  }

  render() {
    const { wallpaperList } = this.state;

    return (
      <>
        <div className="container">
          <div className="row my-5 text-center">
            <div className="col-12 col-md-4 mb-3">
              <Button onClick={this.getSpiritualityWallpapers}>
                Spirituality
              </Button>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <Button onClick={this.getArchitectureWallpapers}>
                Architecture
              </Button>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <Button onClick={this.getNatureWallpapers}>Nature</Button>
            </div>
          </div>

          <div className="row my-5">
            {wallpaperList.length ? (
              wallpaperList.map(wallpaper => (
                <Wallpaper
                  key={wallpaper.id}
                  saveWallpaper={() => this.saveHandler("razraz", "dwa")}
                  {...wallpaper}
                />
              ))
            ) : (
              <h5 className="col-12 text-center">Choose category</h5>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    natureWallpapers: state.HandleNature.wallpapers,
    architectureWallpapers: state.HandleArchitecture.wallpapers,
    spiritualityWallpapers: state.HandleSpirituality.wallpapers
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchNature, fetchSpirituality, fetchArchitecture },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallpapers);
