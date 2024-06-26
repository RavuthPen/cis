import React from "react";
import Message from "./Message";
import Author from "./Author";
import Image from "./Image";
import Title from "./Title";

const Profilte = () => {
  return (
    <article className="article h1">
      <Title />
      <Author />
      <Message />
    </article>
  );
};

export default Profilte;
