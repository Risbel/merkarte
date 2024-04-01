"use client";
import TextGenerateEffect from "./TextGenerateEffect/TextGenerateEffect";

const words = `La presidenta del Cabildo Isular de Tenerife Rosa Dávila junto a Constantin Vlad Nechita y Karen López
de Galería of Modern Art Goma Se complacen en invitarle a la inauguración de *MERKARTE. *Evento *que *promueve *al *talento *Canario.`;

function TextHero() {
  return <TextGenerateEffect words={words} />;
}

export default TextHero;
