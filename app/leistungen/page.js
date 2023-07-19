"use client";
import styled from "styled-components";

export default function Leistungen() {
  return (
    <StyledDiv>
      <article>
        <h2>Leistungen</h2>
        <h3>Reparaturen </h3>
        <p>
          Wir führen sämtliche Glasreparaturen in Holz-, Metall- oder
          Kunststoffrahmen durch. Egal ob Schaufensterscheiben, Dachfenster,
          Oberlichter, Balkon-, Schrank-, Zimmer- oder Eingangstüren. <br />
          Die Reparatur kann je nach Schadenfall bei Ihnen vor Ort oder bei uns
          in der Werkstatt durchgeführt werden. Nach erfolgtem Aufmaß durch
          einen unserer Kollegen erhalten Sie einen unverbindlichen
          Kostenvoranschlag für die Reparatur. Montage und/oder Anlieferung
          werden nach Auftragserteilung mit Ihnen gemeinsam abgestimmt. <br />{" "}
          <h4>Isolierverglasungen</h4> Wir tauschen Ihre Isolierverglasungen
          ebenfalls aus, wenn Sie Verbesserungen bezüglich des Wärmeschutzes,
          Schallschutzes oder Sonnenschutzes wünschen. Auch ein
          Isolierglaswechsel für den Einbau von Katzen- oder Hundeklappen ist
          bei uns möglich. <br />
          <h4>Notverglasungen</h4> Die Anfertigung von Isolierglasscheiben kann
          je nach Scheibenaufbau zwischen zwei und zwölf Wochen dauern. Ist Ihre
          Scheibe stark beschädigt oder besteht eine hohe Verletzungsgefahr,
          können wir übergangsweise eine Notverglasung vornehmen. Sollten Sie
          sich unsicher sein, können unsere Kollegen vor Ort eine fachgerechte
          Einschätzung darüber abgeben, ob eine solche Verglasung notwendig ist.
          Für den Fall, dass sich außerhalb unserer Öffnungszeiten ein solcher
          Notfall ergibt, können Sie unseren 24h-Notdienst unter folgender
          Nummer kontaktieren: <b>0172/3469036</b>
        </p>
        <h3>Bleiverglasungen</h3>
        <p>
          Bei uns können Sie Ihre defekte Bleiverglasungen reparieren, eine
          bereits vorhandene Verglasung auf ein neues Maß anpassen oder in eine
          Isolierverglasung einsetzen lassen. Des Weiteren stellen wir, unter
          Verwendung von beispielsweise mundgeblasenen, Echtantik-, Neuantik-
          oder bemalten Gläsern, für Sie neue Bleiverglasungen her. Hierbei
          können wir ganz individuell auf Ihre Wünsche und Vorstellungen
          eingehen. Bitte haben Sie Verständnis für eine längere
          Anfertigungsdauer bei der Herstellung einer solchen Verglasung.
        </p>

        <h3>Bildeinrahmungen</h3>
        <p>
          In unserer Bildereinrahmung stehen Ihnen verschiedene Leisten zur
          Auswahl, die wir auf Ihr benötigtes Maß zu einem Bilderrahmen
          zusammenfügen können. Für die Einrahmung Ihres Bildes können Sie
          zwischen verschiedenen Gläsern wählen: einfaches, entspiegeltes oder
          UV-beständiges Bilderglas. Über die Unterschiede klären wir Sie gerne
          vor Ort auf. Für eine Beratung in unserer Bildereinrahmung möchten wir
          Sie freundlichst darum bitten vorab einen Termin zu vereinbaren.
        </p>
      </article>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: fit-content;
    margin: 0;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  p {
    width: 100%;
    margin: 0;
    padding: 16px 32px;
    text-align: justify;
  }

  h2 {
    align-self: flex-start;
    padding: 16px 32px;
  }

  h3 {
    align-self: flex-start;
    padding: 16px 32px;
  }

  h4 {
    align-self: flex-start;
    padding: 16px 32px;
  }
`;
