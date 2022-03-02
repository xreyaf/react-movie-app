import { CardImageWrapper, CardInfo, CardStyled, ImageStyled } from "./styles/Card.styled";
import { Link } from "react-router-dom";
import { ICard } from "../features/movies/types";
import { RatingStyled } from "./styles/Rating.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";

export const w500ImagesURL = "https://image.tmdb.org/t/p/w500";


const Card = ({ item, type }: { item: ICard, type: string }) => {

  return (
    <CardStyled animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} whileHover={{ y: -3 }}>
      <Link to={`/${type}/${item.id}`}>
        <RatingStyled>
          <Unicons.UilStar size={16} />
          <p>{item.vote_average}</p>
        </RatingStyled>
        <CardImageWrapper >
          <ImageStyled src={w500ImagesURL + item.poster_path}
                       alt={item.title || item.name}
                       whileHover={{ scale: 1.05 }} />
        </CardImageWrapper>
        <CardInfo>
          <a>{item.title || item.name}</a>
        </CardInfo>
      </Link>
    </CardStyled>

  );
};

export default Card;