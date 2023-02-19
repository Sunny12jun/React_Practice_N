//https://skeletonreact.com/

export const ShimmerCard1 = () => {
  const SkeletanCard = (
    <div className="card">
      <img />
      {true ? "" : <Skeleton />}
      <h2>{true ? "" : <Skeleton />} </h2>
      <h3>{true ? "" : <Skeleton />}</h3>
      <h4>{true ? "" : <Skeleton />}</h4>
    </div>
  );
  let element = "";
  for (let index = 0; index < 15; index++) {
    element = element + SkeletanCard;
  }
  return <> {SkeletanCard};</>;
};

export default ShimmerCard1;
