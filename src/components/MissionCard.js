import react from "react";

const MissionCard = (props) => {
  const { mission } = props;
  return <div> {mission.title} </div>;
};
export default MissionCard;
