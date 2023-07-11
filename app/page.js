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
        <StyledArticle>
          <h2>Über uns</h2>
          <p>
            {" "}
            Unsere Glaserei <b>Glas und Spiegel</b> ist ein vielseitig tätiger
            Betrieb mit einem erfahrenen Mitarbeiterkreis. Das Unternehmen
            blickt auf eine langjährige Tradition zurück, in der seit den
            Anfängen der Innovationsgedanke immer im Vordergrund stand. Unsere
            breit gefächerte Produkt- und Angebotspalette bietet Ihnen als
            Kunden hochwertige Qualität, die auf der Basis neuester Technologien
            und langjähriger Erkenntnisse sorgfältig produziert wird. <br />{" "}
            <br />
            Als Meisterbetrieb bieten wir unseren Kunden eine Vielzahl von
            Glas-Facharbeiten an. Dabei wird jedes Projekt ganz individuell, mit
            maßgeschneiderten Ideen von Menschen, die in ihrem Bereich seit
            Jahren professionelle Arbeit leisten, betreut. Persönlichkeit,
            Individualität und kreativer Freiraum stehen bei unserem Arbeiten im
            Vordergrund. Denn nur so kann perfekte Leistung entstehen, auf die
            Sie auch in Zukunft bauen können.
            <br /> <br />
          </p>
        </StyledArticle>
        <StyledSectionImageContainer>
          <StyledSectionImage src="/firma.jpg" width={400} height={350} />
          <StyledSectionImage src="/firma2.jpg" width={400} height={350} />
        </StyledSectionImageContainer>
      </StyledSection>
      <StyledSection2>
        <StyledSectionImageContainer>
          <StyledSectionImage src="/Dusche.jpg" width={380} height={320} />
          <StyledSectionImage
            src="/bleiverglasung.jpg"
            width={380}
            height={320}
          />
        </StyledSectionImageContainer>
        <StyledArticle2>
          <h2>Wohnen mit Glas</h2>
          <p>
            Glas spielt in der Inneneinrichtung eine immer größere Rolle.
            Gegenüber anderen Rohstoffen weist es klare Vorteile auf: Glas
            besitzt eine hohe Lichtdurchlässigkeit und ist aufgrund der glatten
            Oberfläche einfach zu pflegen, wodurch es ebenfalls einen hohen
            Hygienestandard bietet. <br /> <br />
            Neben einer einfachen transparenten Scheibe gibt es zur Gestaltung
            nicht nur andere Glassorten mit Struktur oder Tönung, sondern auch
            die Möglichkeit einer Sandstrahlveredlung oder einer anderen
            Farbgebung durch eine Lackierung/einem Druck. <br /> <br />
            Durch diese Vielseitigkeit lässt es sich an jeden Einrichtungsstil
            anpassen. Sehen Sie sich im Folgenden einige unserer Referenzen an
            und lassen Sie sich mit Ihren Vorstellungen bei uns direkt vom
            Fachmann beraten. Wir finden eine Lösung für Ihr Vorhaben, denn wir
            fertigen alles individuell nach Ihren örtlichen Gegebenheiten und
            Vorstellungen an.
          </p>
        </StyledArticle2>
      </StyledSection2>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  margin: 80px 0 16px 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledH1 = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: whitesmoke;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 87%;
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
  margin: 32px auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: relative;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 600px;
  line-height: 1.2;
  position: relative;
  padding: 30px;
  background: whitesmoke;
  margin: 16px 0 32px 0;
`;

const StyledSectionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  line-height: 1.2;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 16px 0 32px 0;
  padding: 0 30px 0 30px;
`;

const StyledSectionImage = styled(Image)`
  margin: 0 0 16px 0;
  border-radius: 10px;
  background: rgba(8, 8, 8, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const StyledSection2 = styled.section`
  display: flex;
  width: 80%;
  margin: 32px auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
  position: relative;
`;

const StyledArticle2 = styled.article`
  display: flex;
  flex-direction: column;
  width: 600px;
  line-height: 1.2;
  position: relative;
  margin: 16px 0 32px 0;
  padding: 0 30px 0 30px;
`;
