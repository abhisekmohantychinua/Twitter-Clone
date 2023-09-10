import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
	content: Yup.string().required('Tweet text is required'),
});

const HomeSection = () => {
	const [uploadingImage, setUploadingImage] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const handleSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: {
			content: '',
			image: '',
		},
		onSubmit: handleSubmit,
		validationSchema,
	});

	const handleSelectImage = (event) => {
		setUploadingImage(true);
		const imageUrl = event.target.files[0];
		formik.setFieldValue('image', imageUrl);
		setSelectedImage(imageUrl);
		setUploadingImage(false);
	};

	return (
		<div className='space-y-5'>
			<section>
				<h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
			</section>
			<section className='pb-10'>
				<div className='flex space-x-5'>
					<Avatar
						alt='username'
						src='https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/312298604_1334705334019046_4796950339267081507_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Hba0OJ_ib2UAX84O62g&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBpBsFaai-j7reyQZZ0yBhcCWGYptcx6rPOJxK8oTuCPA&oe=6501A44A'
					/>
					<div className='w-full'>
						<form onSubmit={formik.handleSubmit}>
							<div>
								<input
									type='text'
									name='content'
									placeholder='What is happening?'
									className='border-none outline-none text-xl bg-transparent'
									{...formik.getFieldProps(
										'content'
									)}
								/>
								{formik.errors.content &&
									formik.touched.content && (
										<span className='text-red-500'>
											{formik.errors.content}
										</span>
									)}
							</div>
							<div className='flex justify-between items-center mt-5'>
								<div className='flex space-x-5 items-center'>
									<label className='flex items-center space-x-2 rounded-md cursor-pointer'>
										<ImageIcon className='text-[#1d9bf0]' />
										<input
											type='file'
											name='imageFile'
											className='hidden'
											onChange={
												handleSelectImage
											}
										/>
									</label>
									<FmdGoodIcon className='text-[#1d9bf0]' />
									<TagFacesIcon className='text-[#1d9bf0]' />
								</div>
								<div>
									<Button
										sx={{
											width: '100%',
											borderRadius: '20px',
											paddingY: '8px',
											paddingX: '20px',
											bgcolor: '#1e88e5',
										}}
										variant='contained'
										type='submit'
									>
										Tweet
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<section>
				{[1, 1, 1, 1, 1, 1, 1].map((item) => (
					<TweetCard />
				))}
			</section>
		</div>
	);
};

export default HomeSection;
