import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import Wallpaper from "./Wallpaper/Wallpaper";

import { fetchNature } from "../../actions/fetch_nature";
import { fetchSpirituality } from "../../actions/fetch_spirituality";
import { fetchArchitecture } from "../../actions/fetch_architecture";

class Wallpapers extends React.Component {
  state = {
    wallpaperList: []
  };

  setCurrentList = () => {
    this.setState({
      wallpaperList: this.props.natureWallpapers
    });
  };

  getSpiritualityWallpapers = e => {
    e.preventDefault();

    this.props.fetchSpirituality();
  };

  getNatureWallpapers = e => {
    e.preventDefault();

    this.props.fetchNature();
  };

  getArchitectureWallpapers = e => {
    e.preventDefault();

    this.props.fetchArchitecture();
  };

  componentDidMount() {}

  componentDidUpdate() {
    console.log(this.props.natureWallpapers);
    //ZMIENNA MA WSZYTKIE DANE  Z FETCHA
  }

  render() {
    const { natureWallpapers } = this.props;

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
            {natureWallpapers.length ? (
              natureWallpapers.map(wallpaper => (
                <Wallpaper key={wallpaper.id} {...wallpaper} />
              ))
            ) : (
              <h5>List is empty...</h5>
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

const mapDispatchToProps = {
  fetchNature,
  fetchSpirituality,
  fetchArchitecture
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallpapers);
