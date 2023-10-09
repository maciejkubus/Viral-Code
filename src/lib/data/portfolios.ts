import type { IPortfolioItem } from "$lib/interfacess/portfolio-item.interface";

const portfolios: IPortfolioItem[] = [
  {
    id: 0,
    slug: 'shop',
    title: 'Shop',
    href: 'http://shop.maciejkubus.usermd.net/',
    github: 'https://github.com/maciejkubus/shop'
  },
  {
    id: 1,
    slug: 'karate',
    title: 'Karate club',
    href: 'https://karate.maciejkubus.usermd.net/',
    github: 'https://github.com/Macylion/mirai-karate-club'
  },
  {
    id: 2,
    slug: 'portfolio',
    title: 'Portfolio',
    href: 'https://maciejkubus.usermd.net/',
    github: 'https://github.com/maciejkubus/ultimate-portfolio'
  },
  {
    id: 3,
    slug: 'blog',
    title: 'Blog',
    href: 'https://blog.maciejkubus.usermd.net/',
    github: 'https://github.com/maciejkubus/website'
  },
  {
    id: 4,
    slug: 'storage-api',
    title: 'Ultimate storage - api server',
    href: 'http://api-storage.maciejkubus.usermd.net/api',
    github: 'https://github.com/maciejkubus/ultimate-cloud-storage'
  },
  {
    id: 5,
    slug: 'storage-web',
    title: 'Ultimate storage - web client',
    href: 'http://storage.maciejkubus.usermd.net/',
    github: 'https://github.com/maciejkubus/ultimate-cloud-storage-web'
  },
]

export default portfolios;