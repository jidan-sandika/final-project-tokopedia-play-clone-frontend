import { Box, Badge, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Thumbnails({ changeDisplay, url, title, id_video }) {
	const property = {
		imageUrl: url,
		imageAlt: title,
		off: '30%',
		baths: 2,
		title: title,
		formattedPrice: '',
		reviewCount: 34,
		rating: 4,
	};
	// onClick={() => {
	// 	changeDisplay(id_video);
	// }}
	return (
		<Link to={'videos/' + id_video}>
			<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
				<Image src={property.imageUrl} alt={property.imageAlt} />

				<Box p="6">
					<Box display="flex" alignItems="baseline">
						<Badge borderRadius="full" px="2" colorScheme="teal">
							New
						</Badge>
						<Box
							color="gray.500"
							fontWeight="semibold"
							letterSpacing="wide"
							fontSize="xs"
							textTransform="uppercase"
							ml="2"
						>
							{property.off} off
						</Box>
					</Box>

					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						noOfLines={1}
					>
						{property.title}
					</Box>

					<Box>
						{property.formattedPrice}
						<Box as="span" color="gray.600" fontSize="sm"></Box>
					</Box>

					<Box display="flex" mt="2" alignItems="center">
						{Array(5)
							.fill('')
							.map((_, i) => (
								<StarIcon
									key={i}
									color={i < property.rating ? 'teal.500' : 'gray.300'}
								/>
							))}
						<Box as="span" ml="2" color="gray.600" fontSize="sm">
							{property.reviewCount} reviews
						</Box>
					</Box>
				</Box>
			</Box>
		</Link>
	);
}
