import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const StyledCard = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  
  .card__content{
    padding: .5rem;
    background-color: ${theme.colors.grey800};
    border-radius: 1rem;
    width: 100%;
  }

  .card__image {
    display: inline-block;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
    }
  }
 
.card__info{
  padding: 1rem;
  margin-bottom: .5rem;
  overflow: hidden;
  a {
    color: ${theme.colors.grey50};
    font-weight: 600;
    &:hover{
      color: ${theme.colors.white100};
      transition: color .3s;
    }
    
  }
}
`;