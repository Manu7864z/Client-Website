"use client";
import styled from "styled-components";
import Image from "next/image";

export default function Rundumsglas() {
  return (
    <StyledDiv>
      <StyledSection>
        <StyledArticle>
          <h2>Rundumsglas</h2>
          <p>
            Um Anfertigungsdauer und Lieferzeiten so gering wie möglich zu
            halten, haben wir einen umfangreichen Lagerbestand aufgebaut.
            Folgende Aufzählung soll Ihnen einen kleinen Einblick verschaffen:
          </p>
        </StyledArticle>
        <StyledArticle>
          <h3>Floatglas</h3>
          <p>
            <b>Floatglas</b>, oder auch Fensterglas genannt, haben wir in sieben
            verschiedenen Stärken am Lager: 2mm (als einfaches Bilderglas oder
            entspiegelt), 3mm, 4mm, 5mm, 6mm, 8mm und 10mm. Dieses Basisglas
            wird täglich von uns, für beispielsweise Tischplatten, Einlegeböden
            oder als Zuschnitt, verarbeitet.
          </p>
          <StyledImageSection>
            <StyledImage
              src="/Ornamentglas1.png"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
            <StyledImage
              src="/Ornamentglas2.png"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
            <StyledImage
              src="/Ornamentglas3.png"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
          </StyledImageSection>
        </StyledArticle>

        <StyledArticle>
          <h3>Ornamentgläser</h3>
          <p>
            <b>Ornamentgläser</b> mit einer Einbaustärke von 4 mm, wie sie zum
            Beispiel in Zimmertüren mit Lichtausschnitten verwendet werden, sind
            mit verschiedenen Strukturen vorrätig. Unsere umfangreiche Auswahl
            an Gläsern können Sie sich direkt bei uns im Betrieb ansehen. Unsere
            Kollegen beraten Sie gerne und helfen bei der Auswahl.
          </p>

          <StyledImageSection>
            <StyledImage
              src="/Ornamentglas1.png"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
            <StyledImage
              src="/Ornamentglas2.png"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
            <StyledImage
              src="/Ornamentglas3.png"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
          </StyledImageSection>
        </StyledArticle>
        <StyledArticle>
          <h3>Spiegel</h3>
          <p>
            Ein weiteres wichtiges Glas, welches in kaum einem Haushalt fehlt,
            ist der <b>Spiegel</b>. Spiegel. Auch hiervon haben wir verschiedene
            Stärken am Lager: 2mm, 3mm, 4mm, 5mm und 6 mm. Wir helfen Ihnen
            gerne die richtige Spiegelstärke für Ihr Vorhaben zu finden, um
            beispielsweise Verwerfungen zu vermeiden. Bei jedem Projekt packen
            wir gerne mit an und unterstützen Sie bei der Lieferung und/oder
            Montage. Um aus Ihrem Spiegel etwas Besonderes zu machen, kann
            dieser zusätzlich mit einem Sandstrahlmuster oder einem
            Facettenschliff versehen werden. Auch Antikspiegel oder getönte
            Spiegel in bronze oder grau sind auf Anfrage beschaffbar.
          </p>
          <StyledImageSection>
            <StyledImage
              src="/Spiegel1.jpg"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
            <StyledImage
              src="/Spiegel2.jpg"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
            <StyledImage
              src="/Spiegel3.jpg"
              height={200}
              width={200}
              alt="Ornamentglas"
            />
          </StyledImageSection>
        </StyledArticle>
        <StyledArticle>
          <h3>Unser Service</h3>
          <p>
            Alle Gläser können verschieden von uns bearbeitet und veredelt
            werden: einfacher Zuschnitt, Kanten säumen oder polieren, Bohrungen
            (z.B.: für Steckdosen oder Beschläge), schneiden und schleifen nach
            freier Form/Schablone, Rand- oder Flächenausschnitte, rückseitiges
            lackieren in Ihrer Wunschfarbe, Sandstrahlungen nach Muster,
            UV-Verklebungen und vieles mehr.
          </p>
        </StyledArticle>
      </StyledSection>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70vw;
  height: fit-content;
  margin: 100px 0 100px 0;
  position: relative;
  left: 15vw;
  top: 0;
  bottom: 0;
  right: 0;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  position: relative;
`;

const StyledImageSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 300px;
  position: relative;
  background: rgba(11, 102, 106, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 16px 0;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  position: relative;
  text-align: justify;
  word-wrap: break-word;
  margin: 16px 32px 16px 32px;
`;

const StyledImage = styled(Image)`
  width: 250px;
  height: 200px;
  object-fit: cover;
  margin: 16px 32px 16px 32px;
  position: relative;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  background: #d1d8ec;
`;
