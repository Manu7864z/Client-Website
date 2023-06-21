"use client";
import styled from "styled-components";

export default function Rundumsglas() {
  return (
    <StyledDiv>
      <h2>Rundumsglas</h2>
      <StyledSection>
        <StyledArticle>
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
  padding: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  position: relative;
  left: 15vw;
  top: 0;
  bottom: 0;
  right: 0;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  position: relative;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  position: relative;
  word-wrap: break-word;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.334;
    letter-spacing: 0em;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  b {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
`;
