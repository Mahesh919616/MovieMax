import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react';

const MovieList = ({apiPath, title}) => {

	const { data: movies } = useFetch(apiPath);

	useEffect(() => {
		document.title = `${title} / Movie Max`;
	});

	return (
		<main>
			<section className='max-w-7xl mx-auto py-7'>
				<div className='flex justify-evenly flex-wrap'>
					{
						movies.map((movie) => (
							<Card key={movie.id} movie={movie}/>
						))
					}
				</div>
			</section>
		</main>
	)
}

export default MovieList