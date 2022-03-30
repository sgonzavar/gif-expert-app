import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'


const GifGrid = ({ category }) => {

	const [images, setImages] = useState([]);

	useEffect( () => {
		getGifs();
	},[]);

	const getGifs =  async () => { 
		const url = 'https://api.giphy.com/v1/gifs/search?q=Spongebob&limit=10&key=7n1mfu40HGSbZ2JOtOArVMKc4o7zSYnN'
		// const url = `https://api.giphy.com/v1/gifs/search?=${encodeURI(category)}&limit=10&key=7n1mfu40HGSbZ2JOtOArVMKc4o7zSYnN`
		const resp = await fetch( url );
		const { data } = await resp.json();

		const gifs = data.map( img => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url
			}
		});
		setImages(gifs);
	}

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
					<ol>
						{
							images.map(img => 
								<GifGridItem key={img.id} {...img} />
							)
						}
					</ol>
			</div>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string,
}

export default GifGrid