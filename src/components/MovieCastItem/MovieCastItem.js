import PropTypes from 'prop-types';
import { MovieCastImg } from './MovieCastItem.styled';

export default function MovieCastItem({ name, character, picture }) {
  return (
    <>
      <MovieCastImg
        src={
          picture
            ? `https://www.themoviedb.org/t/p/w185/${picture}`
            : require('https://pixabay.com/ru/vectors/%d0%bf%d1%80%d0%b5%d0%b4%d1%83%d0%bf%d1%80%d0%b5%d0%b6%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b2%d0%be%d1%81%d0%ba%d0%bb%d0%b8%d1%86%d0%b0%d0%bd%d0%b8%d0%b5-34621/')
        }
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
}

MovieCastItem.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  picture: PropTypes.string,
};
