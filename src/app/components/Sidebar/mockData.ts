import { TfiFacebook, TfiGithub, TfiInstagram, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';

export const data = {
  aboutPage: {
    title: 'About Page',
    params: {
      image: 'https://example.com/about-image.jpg',
      summary: 'This is the summary of the about page',
      permalink: 'https://example.com/about'
    }
  },
  categories: {
    category1: ['post1', 'post2'],
    category2: ['post3']
    // Add more categories here if needed
  },
  tags: {
    tag1: ['post4', 'post5'],
    tag2: ['post6']
    // Add more tags here if needed
  },
  socialLinks: [
    { id: 1, link: 'https://example.com/social1', IconComponent: TfiFacebook },
    { id: 2, link: 'https://example.com/social2', IconComponent: TfiTwitterAlt },
    { id: 3, link: 'https://example.com/social3', IconComponent: TfiInstagram },
    { id: 4, link: 'https://example.com/social3', IconComponent: TfiGithub },
    { id: 5, link: 'https://example.com/social3', IconComponent: TfiLinkedin }
  ],
  advertisementImage: 'https://example.com/promotion.png'
};
