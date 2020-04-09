import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Wallpaper = ({ id, user, urls, fav, links }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-3">
        <img
          src={urls.regular + "&w=550&dpi=2"}
          className="img-fluid"
          alt="{author}"
        />
        <div className="py-2 row">
          <div
            className="d-md-inline-flex text-center text-md-left 
                      col-12 col-md-9"
          >
            <a
              href={links.self}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted font-weight-bold"
            >
              {user.name}
            </a>
          </div>
          <div className="d-md-inline-flex ml-auto col-12 col-md-3 text-center text-md-right">
            Fav:
            <span className="pl-1">
              {" "}
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// Wallpaper.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired
// };

// Wallpaper.defaultProps = {
//   image:
//     "https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
// };

export default Wallpaper;
