import { SimpleGrid, Box } from '@chakra-ui/react';
import Thumbnails from './Thumbnails';

export default function ThumbnailContainer({ changeDisplay, thumbnails }) {

	let thumbnailsResult = thumbnails.map((thumbnail, idx) => {
		return (
			<Box key={idx} mt={20} rounded={'md'} height="400px">
				<Thumbnails
					changeDisplay={changeDisplay}
					url={thumbnail.url}
					title={thumbnail.title}
					id_video={thumbnail.id_video}
					key={idx}
				/>
			</Box>
		);
	});

	return (
		<SimpleGrid
			mx={2}
			columns={[2, null, 3]}
			spacing={2}
		>{thumbnailsResult}</SimpleGrid>
	);
}
