import { StyledCard } from "./styles/Card.styled";
import place from "../assets/img/placeholder.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = () => {

  return (
    <StyledCard>
      <div className="card__content">
        <div className="card__image">
          <Link to="/">
            <motion.img src={place} alt="dsd" whileHover={{ scale: 1.05 }} />
          </Link>
        </div>
        <div className="card__info">
          <Link to="/">Title</Link>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;