import restaurantList from "../Constant.js";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react";

export const Body = () => {
  const [inptSearch, SetInputSearch] = useState("");
  const [restaurantState, SetRestaurantState] = useState(restaurantList);

  onSearchclick = () => {
    const filtrRestro = restaurantState.filter((e) =>
      e.data.name.toLowerCase().includes(inptSearch.toLocaleLowerCase())
    );

    debugger;
    SetRestaurantState(filtrRestro);
    console.log(filtrRestro);
  };

  return (
    <div>
      <div className="search-container">
        <div>
          <input
            type="text"
            name="serch-input"
            id="inptSearch"
            onChange={(e) => SetInputSearch(e.target.value)}
          />
          {console.log(inptSearch)}
          <button type="submit" onClick={onSearchclick}>
            Search
          </button>
        </div>
      </div>

      <div className="restaurant-list">
        {restaurantState
          ? restaurantState.map((ele) => {
              return (
                <RestrauntCard
                  restroData={ele.data}
                  key={ele.data.id}
                  {...ele.data}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default Body;
