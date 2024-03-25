import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/camdenz2k3"
    },
    {
      name: "fab fa-slack",
      link: "https://join.slack.com/t/alwaystimetocode/signup"
    },
    {
      name: "fa fa-mail-bulk",
      link: "mailto:camdenz@gmail.com"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/zachary-camden-70250026a"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
