export const RestrauntCard = (props) => {
  const { id, name, cuisines, totalRatingsString, cloudinaryImageId } = props;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestrauntCard;
