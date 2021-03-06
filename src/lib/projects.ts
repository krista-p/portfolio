import trekkerLogo from '../images/Trekker.png';
import portfolioLogo from '../images/PortfolioLogo.png';
import bananaLogo from '../images/bananasplitlogo.png';

export type projectType = {
  title: string,
  logo: string,
  tech: string[],
  link: string
}

export const trekker: projectType = {
  title: 'trekker',
  logo: trekkerLogo,
  tech: ['NodeJS', 'ExpressJS', 'MongoDB', 'React', 'MapboxGL', 'TailwindCSS'],
  link: 'https://github.com/krista-p/trekker'
}

export const banana: projectType = {
  title: 'Banana/Split',
  logo: bananaLogo,
  tech: ['NodeJS', 'ExpressJS', 'MongoDB', 'Socket.io', 'NextJS', 'Beautiful DND', 'TailwindCSS', 'Google Firebase'],
  link: 'https://github.com/krista-p/BananaSplit---Client'
}

export const portfolio: projectType = {
  title: 'kpolikaitis',
  logo: portfolioLogo,
  tech: ['React', 'Typescript'],
  link: 'https://github.com/krista-p/portfolio'
}
