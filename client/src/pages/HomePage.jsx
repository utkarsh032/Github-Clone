import  { useState, useEffect, useCallback } from "react";
import toast from 'react-hot-toast';

import Search from '../components/Search';
import SortRepo from '../components/SortRepo';
import ProfileInfo from '../components/ProfileInfo';
import Repos from '../components/Repos';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortTypes, setSortTypes] = useState('forks');

  const getUserProfileAndRepos = useCallback(async (username="utkarsh032") => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userProfile = await userRes.json();
      setUserProfile(userProfile);
      const repoRes = await fetch(userProfile.repos_url);
      const repos = await repoRes.json();
      setRepos(repos);
      console.log(userProfile);
      console.log(repos);
    return {userProfile, repos};
    } catch (error) {
      toast.error('username is not valid');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

const onSearch = async (e,username)=>{
  e.preventDefault();

  setLoading(true);
  setRepos([])
  setUserProfile(null)

  const {userProfile,repos}= await getUserProfileAndRepos(username)

  setUserProfile(userProfile)
  setRepos(repos)
  setLoading(false)
}

const onSort = (sortType)=>{
  if(sortType === 'recent'){
    repos.sort((a,b)=>new Date(b.created_at) - new Date(a.created_at))
  }else if(sortType === 'starts'){
    repos.sort((a,b)=> b.stargazers_count = a.stargazers_count)
  }else if(sortType === 'forks'){
    repos.sort((a,b)=>b.forks_count -a.forks_count)
  }
  setSortTypes(sortType)
  setRepos([...repos])
}

  return (
    <div className='m-4'>
      <Search onSearch={onSearch}/>
      {repos.length > 0 && <SortRepo onSort={onSort} sortType={sortTypes}/>}
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
      {userProfile && !loading && <ProfileInfo userProfile={userProfile}/>}
      { !loading && <Repos repos={repos}/>}
        {loading && <Spinner/>}
      </div>
    </div>
  );
}

// repos.length > 0 &&
export default HomePage;
