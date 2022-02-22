import { CardImageWrapper, CardInfo, CardStyled, ImageStyled } from "./styles/Card.styled";
import { Link } from "react-router-dom";
import { ICard } from "../features/movies/types";
import { RatingStyled } from "./styles/Rating.styled";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";

export const imagesURL = "https://image.tmdb.org/t/p/original";


const Card = ({ props, type }: { props: ICard[], type: string }) => {
  console.log(props);
  return (
    <>
      {props?.map(item =>
        <CardStyled key={item.id} whileHover={{ y: -5 }}>
          <Link to={`/${type}/${item.id}`}>
            <RatingStyled>
              <Unicons.UilStar size={16} />
              <p>{item.vote_average}</p>
            </RatingStyled>
            <CardImageWrapper>
              <ImageStyled src={imagesURL + item.poster_path}
                           alt={item.title || item.name}
                           whileHover={{ scale: 1.05 }} />
            </CardImageWrapper>
            <CardInfo>
              <a>{item.title || item.name}</a>
            </CardInfo>
          </Link>
        </CardStyled>)
      }
    </>
  );
};

export default Card;