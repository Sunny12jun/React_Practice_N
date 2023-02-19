// import { restaurantList } from "../Constant.js";
import { swiggi_API } from "../Utility/Constant";

import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";

export const Body = () => {
  const [inptSearch, SetInputSearch] = useState("");
  const [allRestaurantState, SetAllRestaurantState] = useState();
  const [FilterRestaurantState, SetFilterRestaurantState] = useState();

  onSearchclick = () => {
    const filtrRestro = allRestaurantState.filter((e) =>
      e.data.name.toLowerCase().includes(inptSearch.toLocaleLowerCase())
    );
    SetFilterRestaurantState(filtrRestro);
  };

  useEffect(() => {
    console.log("i am useeffect");
    GetRestruratentDataAPI();
  }, []);

  const GetRestruratentDataAPI = async () => {
    try {
      fetch(swiggi_API)
        .then((Resp) => {
          return !Resp.ok ? { Error: "There is some issue " } : Resp.json();
        })
        .then((d) => {
          const AllResturentData = d.data.cards[2]?.data?.data?.cards;
          SetAllRestaurantState(AllResturentData);
        });
    } catch (error) {}
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
          <button type="submit" onClick={onSearchclick}>
            Search
          </button>
        </div>
      </div>

      <div className="restaurant-list">
        {
          inptSearch.length === 0 ? (
            allRestaurantState ? (
              allRestaurantState?.map((ele) => {
                return (
                  <RestrauntCard
                    restroData={ele.data}
                    key={ele.data.id}
                    {...ele.data}
                  />
                );
              })
            ) : (
              <ShimmerCard />
            )
          ) : FilterRestaurantState ? (
            FilterRestaurantState?.map((ele) => {
              return (
                <RestrauntCard
                  restroData={ele.data}
                  key={ele.data.id}
                  {...ele.data}
                />
              );
            })
          ) : (
            <ShimmerCard />
          )
          // <ShimmerCard />
        }
      </div>
    </div>
  );
};
export default Body;
