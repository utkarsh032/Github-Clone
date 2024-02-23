import { useState, useEffect, useCallback } from "react";
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
  const [sortTypes, setSortTypes] = useState('recent');

  const getUserProfileAndRepos = useCallback(async (username = "utkarsh032") => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/users/profile/${username}`)
      const { userProfile, repos } = await res.json()
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      setRepos(repos)
      setUserProfile(userProfile)
      return { userProfile, repos }
    } catch (error) {
      toast.error('username is not valid');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();

    setLoading(true);
    setRepos([])
    setUserProfile(null)

    const { userProfile, repos } = await getUserProfileAndRepos(username)

    setUserProfile(userProfile)
    setRepos(repos)
    setLoading(false)
    setSortTypes('recent')
  }

  const onSort = (sortType) => {
    if (sortType === 'recent') {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    } else if (sortType === 'stars') {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
    } else if (sortType === 'forks') {
      repos.sort((a, b) => b.forks_count - a.forks_count)
    }
    setSortTypes(sortType)
    setRepos([...repos])
  }

  return (
    <div className='m-4'>
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepo onSort={onSort} sortType={sortTypes} />}
      <div className='flex flex-col lg:flex-row justify-center items-start gap-4'>
        {!loading && userProfile && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>

  );
}

export default HomePage;
