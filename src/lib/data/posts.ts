import type { IPost } from "$lib/interfacess/post.interface";

const posts: IPost[] = [
  {
    id: 0,
    slug: 'how-to-choose-colors',
    image: '/pics/amy/amy-1.jpg',
    date: '4 Jun',
    title: 'How to choose colors?',
    author: 'Maciej Kubus',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Explicabo, dolorum nulla quam dolor ipsam ducimus. Mollitia molestiae voluptas vel labore?'
  },
  {
    id: 1,
    slug: 'why-you-should-use-svelte',
    image: '/pics/amy/amy-2.jpg',
    date: '14 Jun',
    title: 'Why you should use svelte?',
    author: 'Maciej Kubus',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Explicabo, dolorum nulla quam dolor ipsam ducimus. Mollitia molestiae voluptas vel labore?'
  },
  {
    id:2,
    slug: 'abstract-precisions',
    image: '/pics/amy/amy-3.jpg',
    date: '5 Ma',
    title: 'Abstract precisions.',
    author: 'Maciej Kubus',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Explicabo, dolorum nulla quam dolor ipsam ducimus. Mollitia molestiae voluptas vel labore?'
  },
];

export default posts;