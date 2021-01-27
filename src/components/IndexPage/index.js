import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>One Piece Quiz - Alura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/128/Luffys-flag-icon.png" />
        <meta property="og:image" content="https://images5.alphacoders.com/641/641999.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
}

export default IndexPage;
