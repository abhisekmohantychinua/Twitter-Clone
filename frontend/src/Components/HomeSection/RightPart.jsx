import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';
const RightPart = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleChangeTheme = () => {};
	return (
		<div className='py-5 sticky top'>
			<div className='relative flex items-center'>
				<input
					type='text'
					className='py-3 rounded-full text-gray-500 w-full pl-12'
				/>
				<div className='absolute top-0 left-0 pl-3 pt-3'>
					<SearchIcon className='text-gray-500' />
				</div>
				<Brightness4Icon onClick={handleChangeTheme} />
			</div>
			<section className='my-5'>
				<h1 className='text-xl font-bold'>Get verified</h1>
				<h1 className='font-bold my-2'>
					Subscribe to unlock new fetures
				</h1>
				<Button
					variant='contained'
					sx={{
						padding: '10px',
						paddingX: '20px',
						borderRadius: '25px',
					}}
					onClick={handleOpen}
				>
					Get verified
				</Button>
			</section>
			<section className='mt-7 space-y-5'>
				<h1 className='font-bold text-xl py-1'>What's happening</h1>
				<div>
					<p className='text-sm'>Philipinse vs Switzerland</p>
					<p className='font-bold'>
						FIFA Women's worldcup - Live
					</p>
				</div>
				{[1, 1, 1, 1, 1].map((item) => (
					<div className='flex justify-between w-full'>
						<div>
							<p>Entertainment - Trending</p>
							<p className='font-bold'>#TheMarvels</p>
							<p>34.3k Tweets</p>
						</div>
						<MoreHorizIcon />
					</div>
				))}
			</section>
			<section>
				<SubscriptionModal
					open={open}
					handleClose={handleClose}
				/>
			</section>
		</div>
	);
};

export default RightPart;
