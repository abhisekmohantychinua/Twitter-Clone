import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import RepeatIcon from '@mui/icons-material/Repeat';
import ReplyModal from './ReplyModal';

const TweetCard = () => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleDeleteTweet = () => {
		console.log('delete tweet');
		handleClose();
	};

	const [openReplyModal, setOpenReplyModal] = useState(false);
	const handleOpenReplyModal = () => setOpenReplyModal(true);
	const handleCloseReplyModal = () => setOpenReplyModal(false);

	const handleCreateRetweet = () => {};
	const handleLikeTweet = () => {};
	return (
		<>
			<div className='flex space-x-5 my-2'>
				<Avatar
					onClick={() => navigate(`/profile/${5}`)}
					className='cursor-pointer'
					alt='username'
					src='https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/312298604_1334705334019046_4796950339267081507_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Hba0OJ_ib2UAX84O62g&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBpBsFaai-j7reyQZZ0yBhcCWGYptcx6rPOJxK8oTuCPA&oe=6501A44A'
				/>
				<div className='w-full'>
					<div className='flex justify-between items-center'>
						<div className='flex cursor-pointer items-center space-x-2'>
							<span className='font-semibold'>
								Coder Abhisek
							</span>
							<span className='text-gray-600'>
								@coderabhisek . 2m
							</span>
							<img
								className='ml-2 w-5 h-5'
								width='48'
								height='48'
								src='https://img.icons8.com/fluency/48/verified-badge.png'
								alt='verified-badge'
							/>
						</div>
						<div>
							<Button
								id='basic-button'
								aria-controls={
									open ? 'basic-menu' : undefined
								}
								aria-haspopup='true'
								aria-expanded={
									open ? 'true' : undefined
								}
								onClick={handleClick}
							>
								<MoreHorizIcon />
							</Button>
							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'basic-button',
								}}
							>
								<MenuItem onClick={handleDeleteTweet}>
									Delete
								</MenuItem>
								<MenuItem onClick={handleDeleteTweet}>
									Edit
								</MenuItem>
							</Menu>
						</div>
					</div>
					<div className='mt-2'>
						<div
							onClick={() => navigate(`/tweet/${3}`)}
							className='cursor-pointer'
						>
							<p className='mb-2 p-0'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dolore molestias qui
								non facere ipsa iste magnam tempore enim
								quam placeat!
							</p>
							<img
								src='https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/312298604_1334705334019046_4796950339267081507_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Hba0OJ_ib2UAX84O62g&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBpBsFaai-j7reyQZZ0yBhcCWGYptcx6rPOJxK8oTuCPA&oe=6501A44A'
								alt='username'
							/>
						</div>
						<div className='py-3 flex flex-wrap justify-between items-center'>
							<div className='space-x-3 flex items-center text-gray-600'>
								<ChatBubbleOutlineIcon
									onClick={handleOpenReplyModal}
									className='cursor-pointer'
								/>
								<p>54</p>
							</div>
							<div
								className={`${
									true
										? 'text-pink-600'
										: 'text-gray-600'
								} space-x-3 flex items-center`}
							>
								<RepeatIcon
									className='cursor-pointer'
									onClick={handleCreateRetweet}
								/>
								<p>33</p>
							</div>
							<div
								className={`${
									true
										? 'text-pink-600'
										: 'text-gray-600'
								} space-x-3 flex items-center`}
							>
								{true ? (
									<FavoriteIcon
										className='cursor-pointer'
										onClick={handleLikeTweet}
									/>
								) : (
									<FavoriteBorderIcon
										className='cursor-pointer'
										onClick={handleLikeTweet}
									/>
								)}
								<p>33</p>
							</div>
							<div className='space-x-3 flex items-center text-gray-600'>
								<BarChartIcon
									onClick={handleOpenReplyModal}
									className='cursor-pointer'
								/>
								<p>55</p>
							</div>
							<div className='space-x-3 flex items-center text-gray-600'>
								<FileUploadIcon
									onClick={handleOpenReplyModal}
									className='cursor-pointer'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section>
				<ReplyModal
					open={openReplyModal}
					handleClose={handleCloseReplyModal}
				/>
			</section>
		</>
	);
};

export default TweetCard;
