"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <StyledLandingsPage>
        <StyledImage
          src="/homepagepicture.jpg"
          alt="Glaserei Baatz"
          width={1000}
          height={700}
          priority={true}
        />
        <StyledH1>Glaserei Baatz</StyledH1>
      </StyledLandingsPage>
      <StyledSection>
        <h2>Über uns</h2>
        <StyledArticle>
          <p>
            {" "}
            Unsere Glaserei <b>Glas und Spiegel</b> ist ein vielseitig tätiger
            Betrieb mit einem erfahrenen Mitarbeiterkreis. Das Unternehmen
            blickt auf eine langjährige Tradition zurück, in der seit den
            Anfängen der Innovationsgedanke immer im Vordergrund stand. Unsere
            breit gefächerte Produkt- und Angebotspalette bietet Ihnen als
            Kunden hochwertige Qualität, die auf der Basis neuester Technologien
            und langjähriger Erkenntnisse sorgfältig produziert wird. Als
            Meisterbetrieb bieten wir unseren Kunden eine Vielzahl von
            Glas-Facharbeiten an. <br /> Dabei wird jedes Projekt ganz
            individuell, mit maßgeschneiderten Ideen von Menschen, die in ihrem
            Bereich seit Jahren professionelle Arbeit leisten, betreut.
            Persönlichkeit, Individualität und kreativer Freiraum stehen bei
            unserem Arbeiten im Vordergrund. Denn nur so kann perfekte Leistung
            entstehen, auf die Sie auch in Zukunft bauen können.
            <br /> <br />
          </p>
        </StyledArticle>
      </StyledSection>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  margin: 80px 0 0 0;
  background-attachment: fixed;
  background-position: center;
`;
/* const Parallax = styled.div`
  background-image: url("/public/homepagepicture.jpg");
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`; */

const StyledH1 = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: whitesmoke;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 89%;
  right: 3%;
`;
const StyledLandingsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledSection = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  padding: 30px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 10px 0 10px 0;
    align-self: flex-start;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid #271f30;
  border-radius: 10px;
  padding: 30px;
  background: whitesmoke;
  margin: 0 0 30px 0;
`;

const StyledButton = styled.button`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  padding: 10px;
  background: none;
  color: black;
  border: 2px solid #271f30;
  border-radius: 10px;
  align-self: flex-start;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #abb0ac;
  }
`;
