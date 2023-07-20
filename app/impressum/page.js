"use client";
import styled from "styled-components";

export default function Impressum() {
  return (
    <>
      <StyledSection>
        <h2>Impressum</h2>
        <p> Glas und Spiegel Cottbus </p>
        <p> Inh.: Baatz & Rodewald GbR </p>
        <p> Berliner Straße 96 </p>
        <p> 03046 Cottbus </p>
        <p>
          <a href="tel: 035523947"></a> Tel: 03 55 / 2 39 47
        </p>
        <p> Fax: 03 55 / 2 43 46 </p>
        <p>
          e-mail:
          <a href="mailto: info@glaserei-baatz.com">info@glaserei-baatz.com</a>
        </p>
        <p>
          Angaben gemäß Teledienstegesetz (TDG) <br />
          Vertretungsberechtigte Geschäftsführer: Michael Baatz, Lisa-Marie
          Rodewald <br />
          Inhaltlich Verantwortliche gem. § 6 MDStV: Baatz & Rodewald GbR <br />
          Alle Bildquellen und Rechte liegen bei uns. <br />
        </p>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 150px auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: fit-content;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;
