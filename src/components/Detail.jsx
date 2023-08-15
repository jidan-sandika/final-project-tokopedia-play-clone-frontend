import { useEffect, useState } from 'react';
import axios from 'axios';
import { HStack, Box } from '@chakra-ui/react';
import Product from './Product';
import Video from './Video';
import Comment from './Comment';
import { useParams } from 'react-router-dom';

export default function Detail({ idVideo }) {
	const {id} = useParams();
	const [video, setVideo] = useState({});
	const [products, setProducts] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchDataVideo = async () => {
			try {
				const response = await axios.get(
					'https://tokopedia-clone-backend-production.up.railway.app/api/videos/' + id
				);
				console.log(response.data);
				setVideo(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		const fetchDataProduct = async () => {
			try {
				const response = await axios.get(
					'https://tokopedia-clone-backend-production.up.railway.app/api/products/' + id
				);
				console.log(response.data);
				setProducts(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		const fetchDataComment = async () => {
			try {
				const response = await axios.get(
					'https://tokopedia-clone-backend-production.up.railway.app/api/comments/' + id
				);
				console.log(response.data);
				setComments(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchDataVideo();
		fetchDataProduct();
		fetchDataComment();
	}, []);

    const getDataComment = async () => {
        try {
            const response = await axios.get(
                'https://tokopedia-clone-backend-production.up.railway.app/api/comments/' + id
            );
            console.log(response.data);
            setComments(response.data);
        } catch (error) {
            console.error(error);
        }
    };
	return (
		<HStack>
			<Box>
                <Product products={products}/>
			</Box>
			<Box>
                <Video video={video}/>
			</Box>
			<Box w="400px">
				<Comment comments={comments} idVideo={id} getComments={getDataComment}/>
			</Box>
		</HStack>
	);
}
