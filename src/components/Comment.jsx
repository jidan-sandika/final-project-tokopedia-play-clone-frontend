import {
	Button,
	Box,
	Stack,
	Text,
	Textarea,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

export default function Comment({ comments, idVideo, getComments }) {
	const [username, setUsername] = useState('');
	const [comment, setComment] = useState('');

	const createComment = async (username, comment) => {
		try {
			const postData = {
				user_name: username,
				comment: comment,
				id_video: idVideo,
			};
			const response = await axios.post(
				'http://localhost:5000/api/comments/' + idVideo,
				postData
			);
			getComments();

			console.log('Post successful:', response.data);
		} catch (error) {
			console.error('Error posting data:', error);
		}
	};

	const handleClick = () => {
		if (username === '' || comment === '') {
			return;
		}
		createComment(username, comment);
	};

	let items = comments.map((comment, idx) => {
		return (
			<Box bg="whatsapp.600" key={idx}>
				<Text>Username: {comment.username}</Text>
				<Text>{comment.createdAt}</Text>
				<Textarea disabled value={comment.comment} size="sm" />
			</Box>
		);
	});

	return (
		<Stack>
			{items}
			{comments.length > 0 && (
				<FormControl>
					<FormLabel>Add Comment</FormLabel>
					<Input
						onChange={(event) => {
							setUsername(event.target.value);
						}}
						type="text"
						placeholder="username"
					/>
					<Input
						onChange={(event) => {
							setComment(event.target.value);
						}}
						type="text"
						placeholder="write here..."
					/>
					<Button onClick={handleClick} colorScheme="teal" size="xs">
						Submit
					</Button>
					<FormHelperText>Please input valid value</FormHelperText>
				</FormControl>
			)}
		</Stack>
	);
}
