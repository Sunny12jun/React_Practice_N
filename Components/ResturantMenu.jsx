import Food1 from "../Images/Food1.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResturantMenu_API, IMG_CDN_URL } from "../Utility/Constant";

const ResturantMenu = () => {
  const { id } = useParams();
  const [resturantMenuData, SetResturantMenuData] = useState(null);
  console.log(id);

  useEffect(() => {
    GetMenuData();
  }, []);

  const GetMenuData = async () => {
    fetch(ResturantMenu_API + id)
      .then((responce) => {
        // console.log(ResturantMenu_API + id);
        return responce.json();
      })
      .then((data) => {
        SetResturantMenuData(data?.data);
        console.log(data);
      });
  };
  return (
    <div className="resturent-menu">
      <div className="">
        {console.log(resturantMenuData)}
        <img src={IMG_CDN_URL + resturantMenuData?.cloudinaryImageId} />
        <h1>{resturantMenuData?.name}</h1>
        <h2>{resturantMenuData?.cuisines.join(",")}</h2>
        <h3></h3>
      </div>
      <div className="">
        {resturantMenuData
          ? Object.keys(resturantMenuData?.menu.items).map((e) => {
              return (
                <div className="resturent-menu-item">
                  {resturantMenuData?.menu.items[e].name}
                </div>
              );
            })
          : "null"}

        {/* {Object.keys(resturantMenuData.menu.items).map(
          (e) => resturantMenuData.menu.items[e].name
        )} */}
      </div>
    </div>
  );
};
export default ResturantMenu;
