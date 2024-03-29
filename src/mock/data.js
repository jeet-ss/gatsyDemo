import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeet | Developer', // e.g: 'Name | Developer'
  lang: 'en, de', // e.g: en, es, fr, jp
  description: 'Welcome to my place', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jeet Sen Sarma',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: 'Hi, I am Jeet. I am an AI enthusiast and my Research interest includes Music/Audio Processing, Robotics and their implemenation for solving real life problems.',
  paragraphTwo: 'Pursuing innovation and building a team to materialize new ideas is my prime objective in life',
  paragraphThree: 'Download my Resume to know me better',
  resume: 'https://drive.google.com/file/d/144LLvCHmjDYmkJRJUTuDpsDOXK7Ge5z6/view?usp=sharing', // if no resume, the button will not show up
};

// Experience Data
export const experiencesData = [
  {
    id: nanoid(),
    img: 'Bagnet_img.png',
    title: 'Ve',
    info: "10 Apr 2022 - 14 Nov 2022",
    info2: 'Under the guidance of Dr. Dario Zanca, I applied various human attention mechanisms on the BagNets architecture using Pytorch to improve on its accuracy. However, we found that such mechanisms were having a detoriating effect on its performance',
    url: 'https://drive.google.com/file/d/14GRoZaRSi6tI5R31u4S1OU4VZMx8MNX3/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'showTell_img.png',
    title: 'Ig',
    info: '15 May 2018 - 17 Jul 2018 ',
    info2: 'I worked on an Image Captioning Algorithm using LSTM and CNN under Scientist Biswajit Sarkar in Variable Energy Cyclotron Centre, Kolkata, India.',
    url: 'https://drive.google.com/file/d/1LEBtvQ-wFdj1uLSF6JekOSKkSGLGJjfH/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Peshwar_img.jpg',
    title: 'Periscopic Exploration for Shallow Water Amphibian Robot (PEShWAR)',
    info: '15 May 2017 - 18 Jul 2017 ',
    info2: 'I was involved in the designing of a periscopic device to enhance the visibility of an Amphibian Robot which was used to solve the turbidity problem in shallow underwater condition during exploration at CSIR-CMERI, Durgapur.',
    url: 'https://drive.google.com/file/d/1KnrKE8LYWkrzGc-c606Sv3E93MCkSUc7/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
];


// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Bagnet_img.png',
    title: 'Visual Attention Mechanism on BagNets architecture',
    info: "10 Apr 2022 - 14 Nov 2022",
    info2: 'Under the guidance of Dr. Dario Zanca, I applied various human attention mechanisms on the BagNets architecture using Pytorch to improve on its accuracy. However, we found that such mechanisms were having a detoriating effect on its performance',
    url: 'https://drive.google.com/file/d/14GRoZaRSi6tI5R31u4S1OU4VZMx8MNX3/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'showTell_img.png',
    title: 'Image Captioning Using Deep Learning',
    info: '15 May 2018 - 17 Jul 2018 ',
    info2: 'I worked on an Image Captioning Algorithm using LSTM and CNN under Scientist Biswajit Sarkar in Variable Energy Cyclotron Centre, Kolkata, India.',
    url: 'https://drive.google.com/file/d/1LEBtvQ-wFdj1uLSF6JekOSKkSGLGJjfH/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Peshwar_img.jpg',
    title: 'Periscopic Exploration for Shallow Water Amphibian Robot (PEShWAR)',
    info: '15 May 2017 - 18 Jul 2017 ',
    info2: 'I was involved in the designing of a periscopic device to enhance the visibility of an Amphibian Robot which was used to solve the turbidity problem in shallow underwater condition during exploration at CSIR-CMERI, Durgapur.',
    url: 'https://drive.google.com/file/d/1KnrKE8LYWkrzGc-c606Sv3E93MCkSUc7/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to get to know me better? Awesome!",
  btn: "Let's Talk",
  email: 'jeet.sensarma@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeet-sensarma/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeet-ss',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
