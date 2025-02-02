import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ITEM_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);

  const param = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchRes = await fetch(MENU_API + param.resId);
    const data = await fetchRes.json();
    setMenuData(data);
  };
  if (menuData === null) return <Shimmer />;
  const {
    name,
    totalRatingsString,
    avgRating,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = menuData?.data?.cards?.[2]?.card?.card?.info;
  console.group(menuData);
  const itemCards =
    menuData?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards ||
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]
      ?.card?.card?.itemCards ||
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[13]
      ?.card?.card?.itemCards;
  console.group(itemCards);
  return (
    <div className="res">
      <div>
        <div>
          <h2>{name}</h2>
          <div>
            <img
              className="star"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWfoBmzB7u1SWSNO1a3BvvFr9xl9g49tfUQ&s"
            />
            <span>{avgRating}</span>
            <span>({totalRatingsString})</span>
            <span> {costForTwoMessage}</span>
          </div>
          <p>{cuisines.join("")}</p>
          <p>Outlet {areaName}</p>
          <p>{sla?.slaString.toLowerCase()}</p>
        </div>
        <h3> Menu</h3>
        {itemCards.map((item) => (
          <div className="res-menu-container" key={item?.card?.info?.id}>
            <div className="res-menu">
              <p>{item.card.info.name}</p>
              <p>Rs: {item.card.info.price / 100}</p>
              <p>
                <img
                  className="star"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWfoBmzB7u1SWSNO1a3BvvFr9xl9g49tfUQ&s"
                />
                {item.card.info.price / 100}(
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </p>
              <p>{item.card.info.description}</p>
            </div>
            <div className="img-container">
              <img
                className="responsive-img"
                src={ITEM_URL + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;

/**
 * 
            
 */
