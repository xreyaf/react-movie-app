import { StyledCard } from "./styles/Card.styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IMovies } from "../features/movies/types";
import { RatingStyled } from "./styles/Rating.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";

export const imagesURL = "https://image.tmdb.org/t/p/original";

const Card = ({ movies }: { movies: IMovies[] }) => {

  return (
    <>
      {movies?.map(item => <StyledCard>
        <Link to={`/movies/${item.id}`}>
          <div className="card__content">
            <RatingStyled>
              <Unicons.UilStar size={16} />
              <p>{item.vote_average}</p>
            </RatingStyled>
            <div className="card__image">
              <motion.img src={imagesURL + item.poster_path}
                          alt={item.original_title}
                          whileHover={{ scale: 1.05 }} />
            </div>

            <div className="card__info">
              <a>{item.original_title}</a>
            </div>
          </div>
        </Link></StyledCard>)}
    </>
  );
};

export default Card;