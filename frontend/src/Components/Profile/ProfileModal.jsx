import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

export default function ProfileModal({ open, handleClose }) {
	const [uploading, setUploading] = React.useState(false);

	const handleSubmit = (values) => {
		console.log('handle submit', values);
	};

	const formik = useFormik({
		initialValues: {
			fullName: '',
			website: '',
			location: '',
			bio: '',
			backgroundImage: '',
			image: '',
		},
		onSubmit: handleSubmit,
	});
	const handleImageChange = (event) => {
		setUploading(true);
		const { name } = event.target;
		const file = event.target.files[0];
		formik.setFieldValue(name, file);
		setUploading(false);
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
					<form onSubmit={formik.handleSubmit}>
						<div className='flex justify-between items-center'>
							<div className='flex space-x-3 items-center'>
								<IconButton
									onClick={handleClose}
									aria-label='delete'
								>
									<CloseIcon />
								</IconButton>
								<p>Edit Profile</p>
							</div>
							<Button type='submit'>Save</Button>
						</div>
						<div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
							<React.Fragment>
								<div className='w-full'>
									<div className='relative'>
										<img
											className='w-full h-48 object-cover object-center'
											src='https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
											alt='bg'
										/>
										<input
											type='file'
											name='backgroundImage'
											className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
											onChange={
												handleImageChange
											}
										/>
									</div>
								</div>
								<div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
									<div className='relative'>
										<Avatar
											alt='username'
											src='https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/312298604_1334705334019046_4796950339267081507_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Hba0OJ_ib2UAX84O62g&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBpBsFaai-j7reyQZZ0yBhcCWGYptcx6rPOJxK8oTuCPA&oe=6501A44A'
											sx={{
												width: '10rem',
												height: '10rem',
												border: '4px solid white',
											}}
										/>
										<input
											type='file'
											name='image'
											id='image'
											className='absolute top-0 left-0 w-40 h-full opacity-0 cursor-pointer'
											onChange={
												handleImageChange
											}
										/>
									</div>
								</div>
							</React.Fragment>
							<div className='space-y-3'>
								<TextField
									fullWidth
									id='fullName'
									name='fullName'
									label='Full Name'
									value={formik.values.fullName}
									onChange={formik.handleChange}
									error={
										formik.touched.fullName &&
										Boolean(
											formik.errors.fullName
										)
									}
									helperText={
										formik.touched.fullName &&
										formik.errors.fullName
									}
								/>
								<TextField
									fullWidth
									multiline
									rows={4}
									id='bio'
									name='bio'
									label='Bio'
									value={formik.values.bio}
									onChange={formik.handleChange}
									error={
										formik.touched.bio &&
										Boolean(formik.errors.bio)
									}
									helperText={
										formik.touched.bio &&
										formik.errors.bio
									}
								/>
								<TextField
									fullWidth
									id='website'
									name='website'
									label='Website'
									value={formik.values.website}
									onChange={formik.handleChange}
									error={
										formik.touched.website &&
										Boolean(formik.errors.website)
									}
									helperText={
										formik.touched.website &&
										formik.errors.website
									}
								/>
								<TextField
									fullWidth
									id='location'
									name='location'
									label='Location'
									value={formik.values.location}
									onChange={formik.handleChange}
									error={
										formik.touched.location &&
										Boolean(
											formik.errors.location
										)
									}
									helperText={
										formik.touched.location &&
										formik.errors.location
									}
								/>
								<div className='my-3'>
									<p className='text-lg'>
										Birth date . Edit
									</p>
									<p className='text-2xl'>
										October 23,1999
									</p>
								</div>
								<p className='py-3 text-lg'>
									Edit Professional Profile
								</p>
							</div>
						</div>
					</form>
				</Box>
			</Modal>
		</div>
	);
}
