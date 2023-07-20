import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h2>Öffnungszeiten</h2>
        <p>Montag bis Freitag: 8:00 - 16:30 Uhr</p>
        <p>
          24h Notdienst (z.B. bei Glasbruch eines Sturmschadens):{" "}
          <a href="tel: 01723469036">0172 / 3469036</a>
        </p>
      </div>
      <div>
        <h2>Kontakt</h2>
        <a href="tel: 035523947">Telefon: 0355/23947</a>
        <p>Fax: 0355/24346</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto: info@glaserei-baatz.com

        "
          >
            info@glaserei-baatz.com
          </a>
        </p>
      </div>
      <div>
        <h2>Adresse</h2>
        <p>Glas und Spiegel</p>
        <p>Inh.: Baatz & Rodewald GbR</p>
        <p>Berliner Straße 96</p>
        <p>03046 Cottbus</p>
      </div>
      <div>
        <h2>Impressum</h2>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: white;
  padding: 30px;
  margin: 50px 0 0 0;
  width: 100%;
  height: fit-content;
  position: static;
  bottom: 0;
  left: 0;
  right: 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: fit-content;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    align-self: flex-start;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
    align-self: flex-start;
  }

  a {
    color: white;
    text-decoration: none;
    align-self: flex-start;

    &:hover {
      color: #ccc;
    }
  }
`;
