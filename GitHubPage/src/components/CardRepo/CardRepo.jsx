import "./CardRepo.css";
import DetailRepo from "../DetailRepo/DetailRepo";
import { useEffect, useState } from "react";
import { calculateDaysAgo } from "../../utils/CalculateDaysAgo";
import { useGitStore } from "../../store/useGitStore";
// eslint-disable-next-line react/prop-types
const CardInfo = ({ data}) => {
  const [daysAgo, setDaysAgo] = useState('');
  const {username} = useGitStore();
  useEffect(() => {
    setDaysAgo(calculateDaysAgo(data.updated_at.slice(0,10)));
  }, [data])
  
  return (
    <a className="feature" href={`https://github.com/${username}/${data.name}`} >
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div className="feature-details">
        {data.license && data.license.key === "mit" && (
          <DetailRepo img='Chield' text="MIT" />
        )}
        <DetailRepo img='Nesting' text={data.forks_count} />
        <DetailRepo img='Star' text={data.stargazers_count} />
        <small>updated {daysAgo} days ago</small>
      </div>
    </a>
  );
};

export default CardInfo;
