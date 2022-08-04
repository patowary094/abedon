import React from "react";
import styles from "../whatWeDo/css/whatWeDo.module.css";
import Card from "../whatWeDo/cards";
import CardImage from "../whatWeDo/cards/img/card-image.png"
const WhatWeDo = () => {
  return (
    <div>
      <h1 className={styles.heading}>What We Do</h1>
      <div className={styles.cards}>
        <Card
        imageSrc={CardImage}
          title="Title No 1"
          content="Hi, The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
        />
        <Card
          imageSrc={CardImage}
          title="Title No 2"
          content="Hi, Lionel Messi does it again, he's superhuman. Lionel Messi has exploded La Liga into Life."
        />
        <Card
          imageSrc={CardImage}
          title="Title NO 3"
          content="Hi,  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentia
"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
