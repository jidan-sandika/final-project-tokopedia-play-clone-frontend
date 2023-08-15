import {
	Card,
	CardBody,
	Image,
	VStack,
	Box,
	Text,
	Divider,
	CardFooter,
	ButtonGroup,
	Button,
} from '@chakra-ui/react';

export default function Product({ products }) {
	let items = products.map((product, idx) => {
		return (
			<Box maxW="300px"  bg="blue.400" mb={5} key={idx}>
				
				<Text>{product.title}</Text>
				<Text color="white.200" fontSize="2xl">
					{product.price} IDR
				</Text>
				<ButtonGroup spacing="1">
					<Button
						onClick={() => {
							window.open(product.link_product);
						}}
						variant="solid"
						colorScheme="blue"
					>
						Buy now
					</Button>
					<Button variant="ghost" colorScheme="white.600">
						Add to cart
					</Button>
				</ButtonGroup>
			</Box>
		);
	});

	return <VStack>{items}</VStack>;
}
