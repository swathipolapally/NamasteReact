import { CDN_URL } from "../utils/constants";

const RestauarantCard = ({ resData }) => {
  const { info } = resData;
  const { name, avgRating, areaName, cuisines, cloudinaryImageId, sla } = info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <div>
        <span>{avgRating}</span>
        <img
          className="star"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWfoBmzB7u1SWSNO1a3BvvFr9xl9g49tfUQ&s"
        />
      </div>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestauarantCard;
