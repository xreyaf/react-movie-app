import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { ButtonStyled } from "../components/styles/Button.styled";
import { theme } from "../styles/theme";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";

const Chart = () => {
  return (
    <ContainerStyled>
      <h1>Chart</h1>
      <ButtonStyled whileHover={{ y: -3, backgroundColor: theme.colors.primary500, cursor: "pointer" }}>
        Search
        <Unicons.UilSearch size="1.2rem" />
      </ButtonStyled>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
        consectetur cum deserunt eligendi eum excepturi facilis, fugit incidunt
        iste laboriosam modi molestias mollitia nesciunt nihil nisi nobis,
        numquam officia quaerat, quidem quisquam quos recusandae rem temporibus
        tenetur unde voluptatem? Accusamus aliquid earum esse facere laborum
        neque nesciunt nulla quibusdam quisquam! Aliquam autem cum enim eveniet
        fuga fugiat harum iure labore, laborum minima officia perferendis,
        possimus, recusandae sit soluta! A animi aperiam aspernatur at beatae
        deleniti deserunt doloremque minima minus nihil quae quasi quos ratione
        repellat sequi tenetur voluptas, voluptatibus? Deleniti dignissimos
        distinctio dolore earum enim id, nemo neque obcaecati odio, optio, quis
        rerum soluta vero. Accusamus at cum facilis impedit perspiciatis quidem
        repudiandae voluptas. Adipisci asperiores aut eos expedita laudantium
        quaerat quidem quos tempore! Accusamus at exercitationem harum impedit
        totam. At autem debitis dolorem explicabo illum labore, reiciendis unde.
        Ab accusantium cum exercitationem magni, non perferendis possimus quas
        quia quibusdam quo sit tenetur voluptate. Aliquid animi, at aut
        dignissimos eligendi est fugiat id ipsam iste iusto labore laudantium
        magnam molestias natus nesciunt, provident quis quisquam quo recusandae
        repellat reprehenderit sapiente sunt tempore unde ut voluptas voluptate
        voluptates. Debitis dolorem ea et facilis itaque nemo possimus. A
        distinctio est laudantium nostrum, sed sequi? A dolores facere
        perferendis perspiciatis voluptas. Cum molestias nesciunt repudiandae
        temporibus ut? Accusantium adipisci aperiam, cupiditate dolorem expedita
        illum ipsam maxime nam nostrum qui! Deleniti deserunt id neque placeat
        provident quo repudiandae soluta temporibus voluptatum? Corporis
        distinctio dolorem quibusdam soluta unde. Accusantium alias debitis
        dolore ea eaque earum, excepturi fugit magnam minima minus nam
        necessitatibus porro quas quibusdam quis quod sequi tenetur totam unde
        vel veniam vero voluptate voluptates! Ab assumenda cum cumque deleniti
        deserunt ea error facere illo labore maiores necessitatibus, nihil odio
        optio sit voluptatum? Aperiam cum ducimus eum minima nostrum officiis
        provident reprehenderit totam!
      </p>
      <br />
      <hr />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
        consectetur cum deserunt eligendi eum excepturi facilis, fugit incidunt
        iste laboriosam modi molestias mollitia nesciunt nihil nisi nobis,
        numquam officia quaerat, quidem quisquam quos recusandae rem temporibus
        tenetur unde voluptatem? Accusamus aliquid earum esse facere laborum
        neque nesciunt nulla quibusdam quisquam! Aliquam autem cum enim eveniet
        fuga fugiat harum iure labore, laborum minima officia perferendis,
        possimus, recusandae sit soluta! A animi aperiam aspernatur at beatae
        deleniti deserunt doloremque minima minus nihil quae quasi quos ratione
        repellat sequi tenetur voluptas, voluptatibus? Deleniti dignissimos
        distinctio dolore earum enim id, nemo neque obcaecati odio, optio, quis
        rerum soluta vero. Accusamus at cum facilis impedit perspiciatis quidem
        repudiandae voluptas. Adipisci asperiores aut eos expedita laudantium
        quaerat quidem quos tempore! Accusamus at exercitationem harum impedit
        totam. At autem debitis dolorem explicabo illum labore, reiciendis unde.
        Ab accusantium cum exercitationem magni, non perferendis possimus quas
        quia quibusdam quo sit tenetur voluptate. Aliquid animi, at aut
        dignissimos eligendi est fugiat id ipsam iste iusto labore laudantium
        magnam molestias natus nesciunt, provident quis quisquam quo recusandae
        repellat reprehenderit sapiente sunt tempore unde ut voluptas voluptate
        voluptates. Debitis dolorem ea et facilis itaque nemo possimus. A
        distinctio est laudantium nostrum, sed sequi? A dolores facere
        perferendis perspiciatis voluptas. Cum molestias nesciunt repudiandae
        temporibus ut? Accusantium adipisci aperiam, cupiditate dolorem expedita
        illum ipsam maxime nam nostrum qui! Deleniti deserunt id neque placeat
        provident quo repudiandae soluta temporibus voluptatum? Corporis
        distinctio dolorem quibusdam soluta unde. Accusantium alias debitis
        dolore ea eaque earum, excepturi fugit magnam minima minus nam
        necessitatibus porro quas quibusdam quis quod sequi tenetur totam unde
        vel veniam vero voluptate voluptates! Ab assumenda cum cumque deleniti
        deserunt ea error facere illo labore maiores necessitatibus, nihil odio
        optio sit voluptatum? Aperiam cum ducimus eum minima nostrum officiis
        provident reprehenderit totam!
      </p>
    </ContainerStyled>
  );
};

export default Chart;
