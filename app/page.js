"use client";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header/index.js";

export default function Home() {
  return (
    <div>
      <Header />

      <StyledImage
        src="/../public/Titelbild.jpg"
        alt="Glaserei Baatz"
        width={1000}
        height={700}
      />
      <p>
        Unsere Glaserei 'Glas und Spiegel' ist ein vielseitig tätiger Betrieb
        mit einem erfahrenen Mitarbeiterkreis. Das Unternehmen blickt auf eine
        langjährige Tradition zurück, in der seit den Anfängen der
        Innovationsgedanke immer im Vordergrund stand. Unsere breit gefächerte
        Produkt- und Angebotspalette bietet Ihnen als Kunden hochwertige
        Qualität, die auf der Basis neuester Technologien und langjähriger
        Erkenntnisse sorgfältig produziert wird. Als Meisterbetrieb bieten wir
        unseren Kunden eine Vielzahl von Glas-Facharbeiten an. Dabei wird jedes
        Projekt ganz individuell, mit maßgeschneiderten Ideen von Menschen, die
        in ihrem Bereich seit Jahren professionelle Arbeit leisten, betreut.
        Persönlichkeit, Individualität und kreativer Freiraum stehen bei unserem
        Arbeiten im Vordergrund. Denn nur so kann perfekte Leistung entstehen,
        auf die Sie auch in Zukunft bauen können.
      </p>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100vw;
  height: 70vh;
  object-fit: cover;
  margin: 0;
`;
