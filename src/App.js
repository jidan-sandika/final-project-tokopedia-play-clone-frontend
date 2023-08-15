import axios from 'axios';
import Home from './components/Home';
import Detail from './components/Detail';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import NotFoundThumbnail from './components/NotFoundThumbnail';

function App() {
	const [thumbnails, setThumbnails] = useState([]);
	const [display, setDisplay] = useState('Home');
	const [idVideo, setIdVideo] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'http://localhost:5000/api/thumbnails'
				);
				setThumbnails(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	function handleDisplay(id_video) {
		setDisplay('Detail');
		setIdVideo(id_video);
	}

	return (
		<Routes>
			<Route
				path="/"
				element={
					thumbnails.length > 0 ? (
						<Home changeDisplay={handleDisplay} thumbnails={thumbnails} />
					) : (
						<NotFoundThumbnail />
					)
				}
			/>
			<Route path="/videos/:id" element={<Detail idVideo={idVideo} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
