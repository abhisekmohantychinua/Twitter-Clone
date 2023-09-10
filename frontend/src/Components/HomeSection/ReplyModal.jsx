import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useFormik } from 'formik';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: 'none',
	boxShadow: 24,
	p: 4,
	outline: 'none',
	borderRadius: 4,
};

export default function ReplyModal({ open, handleClose }) {
	const navigate = useNavigate();
	const [uploadingImage, setUploadingImage] = React.useState(false);
	const [selectedImage, setSelectedImage] = React.useState(null);
	const handleSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: {
			content: '',
			image: '',
			tweetId: 4,
		},
		onSubmit: handleSubmit,
	});

	const handleSelectImage = (event) => {
		setUploadingImage(true);
		const imageUrl = event.target.files[0];
		formik.setFieldValue('image', imageUrl);
		setSelectedImage(imageUrl);
		setUploadingImage(false);
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
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
							</div>
							<div className='mt-2'>
								<div
									onClick={() =>
										navigate(`/tweet/${3}`)
									}
									className='cursor-pointer'
								>
									<p className='mb-2 p-0'>
										Lorem ipsum dolor sit amet
										consectetur adipisicing elit.
										Dolore molestias qui non
										facere ipsa iste magnam
										tempore enim quam placeat!
									</p>
								</div>
							</div>
						</div>
					</div>
					<section className='py-10'>
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
											formik.touched
												.content && (
												<span className='text-red-500'>
													{
														formik
															.errors
															.content
													}
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
													borderRadius:
														'20px',
													paddingY:
														'8px',
													paddingX:
														'20px',
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
				</Box>
			</Modal>
		</div>
	);
}
