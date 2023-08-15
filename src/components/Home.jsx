import ThumbnailContainer from './ThumbnailContainer';

export default function Home({changeDisplay, thumbnails}) {
	return (
		<ThumbnailContainer changeDisplay={changeDisplay} thumbnails={thumbnails}/>
	);
}
