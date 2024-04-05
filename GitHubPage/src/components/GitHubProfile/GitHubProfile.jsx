import { useEffect, useState } from "react";
import DetailAccount from "../DetailAccount/DetailAccount";
import { fetchGitHub } from "../../utils/fetchGitHub";
import "./GitHubprofile.css";
import { useGitStore } from "../../store/useGitStore";
import GitRepos from "../GitRepos/GitRepos";

const GitHubProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const { username } = useGitStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHub(username || 'GitHub');
        setAccount(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <main>
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <>
          <div className="container-details">
            <div className="details-img">
              <img src={account.avatar_url} alt={account.name} />
            </div>
            <div className="account-info">
              <DetailAccount text="Followers" value={account.followers} />
              <DetailAccount text="Following" value={account.following} />
              <DetailAccount text="Location" value={account.location} />
            </div>
          </div>
          <div className="container-info">
            <h3>{account.name}</h3>
            <p>{account.bio}</p>
          </div>
          <GitRepos/>
        </>
      )}
    </main>
  );
};

export default GitHubProfile;
