import React from "react";

// Link to repository
const repositoryLink = {
  href: "https://github.com/soos3d/sei-auth-aa-demo",
  imgSrc: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  imgAlt: "GitHub Logo",
  text: "Check the repository",
};

// Indicate where the bulk of the code is
const codeText = {
  text: "Get started by editing",
  code: "src/app/App.tsx",
};

// Links and descriptions to the particle documentation
const links = [
  {
    href: "https://developers.particle.network",
    title: "Documentation →",
    description: "Find in-depth information about AuthCore features and API.",
  },
  {
    href: "https://dashboard.particle.network",
    title: "Dashboard →",
    description:
      "Manage your projects and team, View analytics data, Custom configuration.",
  },
  {
    href: "https://github.com/Particle-Network/particle-web-auth-core",
    title: "Examples →",
    description: "Discover and deploy boilerplate example AuthCore projects.",
  },
  {
    href: "https://particle.network",
    title: "Particle Network →",
    description: "The L1 unifying all chains through Universal Accounts.",
  },
  {
    href: "https://www.docs.sei.io/",
    title: "Sei Documentation →",
    description: "Sei is the first parallelized EVM.",
  },
  {
    href: "https://atlantic-2.app.sei.io/faucet/",
    title: "Sei Faucet →",
    description: "You can request SEI testnet tokens every 24 hours.",
  },
];

// UI component
const LinksGrid = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
        <a
          href={repositoryLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300 transition duration-300 flex items-center"
        >
          <img
            src={repositoryLink.imgSrc}
            alt={repositoryLink.imgAlt}
            className="w-6 h-6 mr-2"
          />
          {repositoryLink.text}
        </a>
      </h2>
      <p className="text-xl mb-12 text-center">
        {codeText.text}{" "}
        <code className="bg-gray-800 rounded p-1 text-purple-300">
          {codeText.code}
        </code>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {links.map((link, index) => {
          const isSecondaryLink =
            link.href === "https://www.docs.sei.io/" ||
            link.href === "https://atlantic-2.app.sei.io/faucet/";
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`border p-6 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 ${
                isSecondaryLink ? "border-red-900" : "border-purple-500"
              }`}
            >
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  isSecondaryLink ? "text-red-800" : "text-purple-400"
                }`}
              >
                {link.title}
              </h2>
              <p className="text-gray-300">{link.description}</p>
            </a>
          );
        })}
      </div>

      <footer className="w-full flex justify-center items-center py-8">
        <img src="/dark.png" alt="Particle Logo" width={240} height={24} />
      </footer>
    </>
  );
};

export default LinksGrid;
