import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';

const TweetDetails = () => {
	const navigate = useNavigate();
	const handleBack = () => navigate(-1);
	return (
		<React.Fragment>
			<section className='z-50 flex items-center sticky top-0 bg-white bg-opacity-80'>
				<KeyboardBackspaceIcon
					className='cursor-pointer'
					onClick={handleBack}
				/>
				<h1 className='py-5 text-xl font-bold opacity-90 ml-5'>
					Tweets{' '}
				</h1>
			</section>
			<section>
				<TweetCard />
				<Divider sx={{ marginY: '2rem' }} />
			</section>
			<section>
				{[1, 1, 1, 1].map((item) => (
					<TweetCard />
				))}
			</section>
		</React.Fragment>
	);
};

export default TweetDetails;
