import { useEffect, useState } from "react";
import CardRepo from "../CardRepo/CardRepo";
import "./GitRepos.css";
import { fetchGitHub } from "../../utils/fetchGitHub";
import { useGitStore } from "../../store/useGitStore";

// eslint-disable-next-line react/prop-types
const GitRepos = ({ login }) => {
  const { username } = useGitStore();

  const [repos, setRepos] = useState(null);
  const [viewAllRepos, setViewAllRepos] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = `${username || "GitHub"}/repos`;
        const data = await fetchGitHub(path);
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [username]);

  return (
    <>
      <div className="container-features">
        {repos && repos.length > 4 ? (
          viewAllRepos ? (
            repos.map((repo) => (
              <CardRepo key={repo.id} data={repo} user={login} />
            ))
          ) : (
            repos
              .slice(0, 4)
              .map((repo) => (
                <CardRepo key={repo.id} data={repo} user={login} />
              ))
          )
        ) : (
          <p>Loading....</p>
        )}
      </div>
      {repos && <span onClick={() => setViewAllRepos(!viewAllRepos)} className="addRepo">View All Repost</span>}
    </>
  );
};

export default GitRepos;
