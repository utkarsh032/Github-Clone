import { FaHeart } from "react-icons/fa";

const LikesPage = () => {
  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='w-full text-sm text-left rtl:text-right bg-morphism overflow-hidden'>
				<thead className='text-xs uppercase bg-morphism'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Username
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
        <hr />
				<tbody>
					<tr className='bg-morphism border-b'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<span>1</span>
							</div>
						</td>
						<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
							<img
								className='w-10 h-10 rounded-full'
								src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
								alt='image'
							/>
							<div className='ps-3'>
								<div className='text-base font-semibold'>utkarsh</div>
							</div>
						</th>
						<td className='px-6 py-4'>10/aug</td>
						<td className='px-6 py-4'>
							<div className='flex items-center'>
								<FaHeart size={22} className='text-red-500 mx-2' />
								Liked your profile
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
  )
}

export default LikesPage
