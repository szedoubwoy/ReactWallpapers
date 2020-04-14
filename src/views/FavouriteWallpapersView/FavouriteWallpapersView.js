import React from "react";
import FavouriteWallpapers from "../../components/FavouriteWallpapers/FavouriteWallpapers";

const FavouriteWallpapersView = () => (
  <div className="container my-3">
    <div>
      <h2 className="text-center">Your favourite wallpapers:</h2>
    </div>
    <FavouriteWallpapers />
  </div>
);

export default FavouriteWallpapersView;
