const Header = () => {
  const headContent = {
    title: "Particle Auth Core + AA + Sei Demo",
    metaDescription:
      "Particle Auth with Account Abstraction Code demo in React for the Sei chain.",
    favicon: "/favicon.ico",
  };

  const mainHeadingContent = {
    particleLinkHref: "https://particle.network",
    particleImageSrc: "/dark.png",
    particleImageAlt: "Particle Logo",
    particleImageWidth: 240,
    particleImageHeight: 24,
    iotexLinkHref: "https://www.sei.io/",
    iotexImageSrc: "/sei.png",
    iotexImageAlt: "Sei Logo",
    iotexImageWidth: 240,
    iotexImageHeight: 24,
  };

  const subHeading =
    "Particle Auth + Account Abstraction SDK + Sei Chain demo.";

  return (
    <>
      <header>
        <title>{headContent.title}</title>
        <meta name="description" content={headContent.metaDescription} />
        <link rel="icon" href={headContent.favicon} />
      </header>
      <h1 className="text-4xl mt-4 font-bold mb-12 text-center flex items-center justify-center">
        <a
          href={mainHeadingContent.particleLinkHref}
          className="text-purple-400 hover:text-purple-300 transition duration-300 ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mainHeadingContent.particleImageSrc}
            alt={mainHeadingContent.particleImageAlt}
            width={mainHeadingContent.particleImageWidth}
            height={mainHeadingContent.particleImageHeight}
          />
        </a>
        <a
          href={mainHeadingContent.iotexLinkHref}
          className="text-purple-400 hover:text-purple-300 transition duration-300 ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mainHeadingContent.iotexImageSrc}
            alt={mainHeadingContent.iotexImageAlt}
            width={mainHeadingContent.iotexImageWidth}
            height={mainHeadingContent.iotexImageHeight}
          />
        </a>
      </h1>
      <h2 className="text-2xl font-bold mb-6">{subHeading}</h2>
    </>
  );
};

export default Header;
