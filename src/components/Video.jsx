import { AspectRatio, Box, Heading, Stack, Text } from '@chakra-ui/react';

export default function Video({ video }) {
	return (
		<Stack>
			<AspectRatio maxW="650px" ratio={1}>
				<iframe title={video.title} src={video.url} allowFullScreen />
			</AspectRatio>
			<Box maxW="600px">
				<Heading fontSize="2xl">{video.title}</Heading>
				<Text>{video.description}</Text>
			</Box>
		</Stack>
	);
}
