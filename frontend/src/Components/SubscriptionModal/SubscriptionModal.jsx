import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: 'none',
	outline: 'none',
	boxShadow: 24,
	p: 4,
	borderRadius: 4,
};

export default function SubscriptionModal({ open, handleClose }) {
	const [plan, setPlan] = React.useState('annually');

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<div className='flex space-x-3 items-center'>
						<IconButton
							onClick={handleClose}
							aria-label='delete'
						>
							<CloseIcon />
						</IconButton>
					</div>
					<div className='flex justify-center py-10'>
						<div className='w-4/5 space-y-10'>
							<div className='flex items-center justify-between p-5 rounded-md shadow-lg'>
								<h1 className='text-xl pr-5'>
									Blue subscribers with a verified
									phone number will get a blue tick
									once approved.
								</h1>
								<img
									className='w-12 h-12'
									width='48'
									height='48'
									src='https://img.icons8.com/fluency/48/verified-badge.png'
									alt='verified-badge'
								/>
							</div>
							<div className='flex justify-between border rounded-full px-5 py-3'>
								<div>
									<span
										onClick={() =>
											setPlan('annually')
										}
										className={`${
											plan === 'annually'
												? 'text-black font-semibold'
												: 'text-gray-500'
										} cursor-pointer`}
									>
										Annually
									</span>
									<span className='text-green-500 text-sm ml-5'>
										Save 12%
									</span>
								</div>
								<p
									onClick={() => setPlan('monthly')}
									className={`${
										plan === 'monthly'
											? 'text-black font-semibold'
											: 'text-gray-500'
									} cursor-pointer`}
								>
									Monthly
								</p>
							</div>
							<div className='w-full h-12 flex justify-center items-center bg-green-500 text-white text-lg rounded-full cursor-pointer hover:bg-green-600'>
								<span className='line-through italic'>
									₹7800.00
								</span>
								<span className='ms-5'>₹6999.00</span>
							</div>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
