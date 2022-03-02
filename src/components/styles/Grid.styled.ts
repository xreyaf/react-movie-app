import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const GridStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 1.4rem;
  column-gap: 1.4rem;
  align-items: start;
  @media screen and (max-width: 1199.98px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    transition: all .5s;
  }
  @media screen and (max-width: 991.98px) {
    row-gap: .8rem;
    column-gap: .8rem;
    transition: all .5s;
  }
  @media screen and (max-width: 816.98px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: .8rem;
    column-gap: .8rem;
    transition: all .5s;
  }
  @media screen and (max-width: 575.98px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    transition: all .5s;
  }
`;
