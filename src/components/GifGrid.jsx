import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

	const [images, setImages] = useState([]);

	useEffect( () => {
		getGifs();
	},[]);

	const getGifs =  async () => { 
		const url = 'https://api.giphy.com/v1/gifs/search?q=one+push&limit=10&key=7n1mfu40HGSbZ2JOtOArVMKc4o7zSYnN'
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
		<div>
			<h3>{category}</h3>
				<ol>
					{
						images.map(({id, title}) => 
							<li key={id} >{title}</li>
						)
					}
				</ol>
		</div>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string,
}

export default GifGrid