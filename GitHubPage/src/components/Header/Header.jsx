import "./Header.css";
import search from '../../assets/Search.svg';
import { useState } from "react";
import { useGitStore } from "../../store/useGitStore";

const Header = () => {
  const [usernames, setUsernames] = useState('');
  const {setUsername} = useGitStore() ;

  const handleChange = (e) => {
    setUsernames(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(usernames.replaceAll(' ', '%20'));
    setUsernames('');
  }

  return (
    <header className="header">
      <div className="container-search">
        <button id="btn-search" onClick={handleSubmit}>
          <img src={search} alt="search" />
        </button>
        <input type="text" value={usernames} name="search" id="search" placeholder="usernames" onChange={handleChange} />
      </div>
    </header>
  );
};

export default Header;
