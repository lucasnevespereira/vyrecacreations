import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" content="Vyreca Creations" />
        <meta
          name="description"
          content="Découvrez la boutique en ligne de Vyreca Creations, des tableaux/cadres conçus en bois. Vyreca dessine et fabrique ses œuvres dans un atelier maison."
        />
        <meta
          name="keywords"
          content="shop, cadres, tableaux, créations, homemade, fait-maison, artisanat, boutique, commerce, peinture, art, bois, œuvres d'art"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
