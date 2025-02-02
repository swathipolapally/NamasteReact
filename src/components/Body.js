import RestauarantCard from "./RestauarantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchRes = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4757469&lng=78.4864056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await fetchRes.json();
    setListOfRestaurants(
      data?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setfilteredRestaurants(
      data?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div>
        <input
          type="text"
          className="search-input"
          value={searchValue}
          placeholder="Search restaurant"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter"
          onClick={() => {
            const filteredList = resList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestauarantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
