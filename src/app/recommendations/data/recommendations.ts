import andersonImage from '../assets/anderson.png'
import felipeImage from '../assets/felipe.png'
import ronanImage from '../assets/ronan.png'
import gabrielImage from '../assets/gabriel.png'
import viniImage from '../assets/vini.png'

const enum Relationship {
  Work = 'Worked with me',
  Study = 'Studied with me'
}

export interface Recommendation {
  name: string
  date: Date
  role: string
  relationship: Relationship
  text: string[]
  image: string
  enterprise: string
}

export enum Enterprise {
  Alibin = 'Alibin',
  Resleeve = 'Resleeve',
  University = 'University'
}

export const recommendations: Recommendation[] = [
  {
    name: 'Ronan Campos',
    date: new Date('02-06-2023'),
    image: ronanImage.src,
    relationship: Relationship.Work,
    role: 'Backend Developer',
    text: [
      'Vitor is an excellent front-end developer, always focused on programming best practices and mindful of the technologies used. He consistently delivered high-quality code while meeting deadlines. Beyond his technical skills, Vitor is an outstanding team player, capable of handling challenges and always willing to help.'
    ],
    enterprise: Enterprise.Alibin
  },
  {
    name: 'Gabriel Gutierrez',
    date: new Date('02-06-2023'),
    image: gabrielImage.src,
    relationship: Relationship.Work,
    role: 'Frontend Developer',
    text: [
      'It is with great pleasure that I recommend Vitor, with whom I had the privilege of working for 10 months. During this time, I witnessed firsthand his remarkable productivity, originality, responsibility, boldness, and intelligence as a front-end developer.',
      'Vitor is highly productive and capable of delivering high-quality results within established deadlines. His ability to transform concepts into attractive and functional interfaces is truly impressive. Moreover, he has an innate talent for creating original and creative solutions, bringing a unique perspective to every project.',
      'Working with Vitor was a rewarding experience. His passion for front-end development and his commitment to delivering the best user experience are evident. I wholeheartedly recommend Vitor to any team seeking a front-end developer who is highly productive, original, responsible, bold, and intelligent.'
    ],
    enterprise: Enterprise.Alibin
  },
  {
    name: 'Felipe Henrique Wegner',
    date: new Date('02-06-2023'),
    image: felipeImage.src,
    relationship: Relationship.Work,
    role: 'Frontend Developer',
    text: [
      'It is with great pleasure that I recommend Vitor, with whom I had the privilege of working for 10 months. During this time, I witnessed firsthand his remarkable productivity, originality, responsibility, boldness, and intelligence as a front-end developer.',
      'Vitor is highly productive and capable of delivering high-quality results within established deadlines. His ability to transform concepts into attractive and functional interfaces is truly impressive. Moreover, he has an innate talent for creating original and creative solutions, bringing a unique perspective to every project.',
      'Working with Vitor was a rewarding experience. His passion for front-end development and his commitment to delivering the best user experience are evident. I wholeheartedly recommend Vitor to any team seeking a front-end developer who is highly productive, original, responsible, bold, and intelligent.'
    ],
    enterprise: Enterprise.Alibin
  },
  {
    name: 'Anderson Soared Martins',
    date: new Date('06-06-2023'),
    image: andersonImage.src,
    relationship: Relationship.Work,
    role: 'Frotend Developer',
    text: [
      "I would like to highly recommend Vitor Lostada, not only because he helped me immensely when I was starting with ReactJS but also because of his exceptional knowledge of the concepts behind programming languages. Vitor doesn't just write code that works; he creates clean, scalable solutions that are a joy to work with, always staying true to deadlines and maintaining excellent organization.",
      'Recently, I had the opportunity to collaborate with Vitor on a React Native project, where I gained a great deal of knowledge thanks to his innovative and creative solutions. I strongly recommend him, and I am confident that he will continue to grow and excel in his career.'
    ],
    enterprise: Enterprise.University
  },
  {
    name: 'Vinicius Silva da Chaves',
    date: new Date('02-06-2023'),
    image: viniImage.src,
    relationship: Relationship.Work,
    role: 'Backend Developer',
    text: [
      `Vitor worked with me for a little over a year and a half as a junior and mid-level front-end developer. He proved to be a person full of ideas, always sharing them to guide the deliveries and achieve great results. Alongside this, he is a creative individual bursting with energy. He encouraged a culture of well-being among his colleagues and showed a strong eagerness to learn and grow.`
    ],
    enterprise: Enterprise.Alibin
  }
]
