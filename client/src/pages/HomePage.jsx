import Search from '../components/Search'
import SortRepo from '../components/SortRepo'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'

const HomePage = () => {
  return (
    <div className='m-4'>
    <Search />
    <SortRepo />
    <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
      <ProfileInfo />
      <Repos />
    </div>
  </div>
  )
}

export default HomePage
