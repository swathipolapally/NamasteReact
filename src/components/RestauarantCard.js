import {CDN_URL} from "../utils/constants"

const RestauarantCard = ({ resData }) => {
    const { info } = resData;
    const { name, avgRating, areaName, cuisines, cloudinaryImageId, sla } = info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>
          <span>{avgRating}</span>
          <img
            className="star"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWfoBmzB7u1SWSNO1a3BvvFr9xl9g49tfUQ&s"
          />
        </h4>
        <h4>{sla.slaString}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    );
  };

export default RestauarantCard;
  