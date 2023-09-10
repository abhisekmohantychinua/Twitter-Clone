import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';

const Profile = () => {
	const navigate = useNavigate();
	const [tabValue, setTabValue] = useState('1');
	const [open, setOpen] = useState(false);
	const handleProfileModalOpen = () => setOpen(true);
	const handleProfileModalClose = () => setOpen(false);

	const handleBack = () => navigate(-1);

	const handleFollowUser = () => {
		console.log('Follow user ');
	};
	const handleTabChange = (event, newValue) => {
		setTabValue(newValue);
		console.log(newValue);
	};
	return (
		<div>
			<section className='z-50 flex items-center sticky top-0 bg-white bg-opacity-80'>
				<KeyboardBackspaceIcon
					className='cursor-pointer'
					onClick={handleBack}
				/>
				<h1 className='py-5 text-xl font-bold opacity-90 ml-5'>
					Coder Abhisek{' '}
				</h1>
			</section>
			<section>
				<img
					src='https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
					alt='bg'
					className='w-full h-[15rem] object-cover'
				/>
			</section>
			<section className='pl-6'>
				<div className='flex justify-between items-start mt-5 h-[5rem]'>
					<Avatar
						className='transform -translate-y-24'
						alt='username'
						src='https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/312298604_1334705334019046_4796950339267081507_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Hba0OJ_ib2UAX84O62g&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBpBsFaai-j7reyQZZ0yBhcCWGYptcx6rPOJxK8oTuCPA&oe=6501A44A'
						sx={{
							width: '10rem',
							height: '10rem',
							border: '4px solid white',
						}}
					/>
					{true ? (
						<Button
							onClick={handleProfileModalOpen}
							variant='contained'
							sx={{ borderRadius: '20px' }}
						>
							Edit Profile
						</Button>
					) : (
						<Button
							onClick={handleFollowUser}
							variant='contained'
							sx={{ borderRadius: '20px' }}
						>
							{true ? 'Follow' : 'Unfollow'}
						</Button>
					)}
				</div>
				<div>
					<div className='flex items-center'>
						<h1 className='font-bold text-lg'>
							Coder Abhisek
						</h1>
						{true && (
							<img
								className='ml-2 w-5 h-5'
								width='48'
								height='48'
								src='https://img.icons8.com/fluency/48/verified-badge.png'
								alt='verified-badge'
							/>
						)}
					</div>
					<h1 className='text-gray-500'>@coderabhisek</h1>
				</div>
				<div className='mt-2 space-y-3'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Itaque ipsam obcaecati asperiores quasi,
						temporibus soluta?
					</p>
					<div className='py-1 flex space-x-5'>
						<div className='flex items-center text-gray-500'>
							<BusinessCenterIcon />
							<p className='ml-2'>Education</p>
						</div>
						<div className='flex items-center text-gray-500'>
							<LocationOnIcon />
							<p className='ml-2'>Indian</p>
						</div>
						<div className='flex items-center text-gray-500'>
							<CalendarMonthIcon />
							<p className='ml-2'>Joinded June 2023</p>
						</div>
					</div>
					<div className='flex items-center space-x-5'>
						<div className='flex items-center space-x-1 font-semibold'>
							<span>190</span>
							<span className='text-gray-500'>
								Followers
							</span>
						</div>
						<div className='flex items-center space-x-1 font-semibold'>
							<span>590</span>
							<span className='text-gray-500'>
								Following
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className='py-5'>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={tabValue}>
						<Box
							sx={{
								borderBottom: 1,
								borderColor: 'divider',
							}}
						>
							<TabList
								onChange={handleTabChange}
								aria-label='lab API tabs example'
							>
								<Tab
									label='Tweets'
									value='1'
								/>
								<Tab
									label='Replies'
									value='2'
								/>
								<Tab
									label='Medias'
									value='3'
								/>
								<Tab
									label='LIkes'
									value='4'
								/>
							</TabList>
						</Box>
						<TabPanel value='1'>
							{[1, 1, 1, 1, 1].map((item) => (
								<TweetCard />
							))}
						</TabPanel>
						<TabPanel value='2'>Replies</TabPanel>
						<TabPanel value='3'>Medias</TabPanel>
						<TabPanel value='4'>Likes</TabPanel>
					</TabContext>
				</Box>
			</section>
			<section>
				<ProfileModal
					handleClose={handleProfileModalClose}
					open={open}
				/>
			</section>
		</div>
	);
};

export default Profile;
