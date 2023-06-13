"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <h1>Willkommen auf der Webseite der Glaserei Baatz</h1>
      <StyledImage
        src="/../public/Titelbild.jpg"
        alt="Glaserei Baatz"
        width={1000}
        height={700}
      />
      <p>
        Wir sind ein Glasereibetrieb in Cottbus und bieten Ihnen eine Vielzahl
        an Leistungen rund um Glas und Spiegel.
      </p>
    </div>
  );
}

const StyledImage = styled(Image)`
  border-radius: 10px;
  width: 100vw;
  height: 70vh;
  object-fit: cover;
  margin: 0;
`;
