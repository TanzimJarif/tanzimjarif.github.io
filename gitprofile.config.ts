// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'tanzimjarif', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['tanzimjarif/relative-humidity-forecasting-mlops'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {/*
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
   */ },
  },
  seo: { title: 'Portfolio of Sarker Tanzim', description: '', imageURL: '' },
  social: {
    linkedin: 'sm-tanzim',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'tanzim.jarif632gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'TensorFlow',
    'PyTorch',
    'AWS',
    'GCP',
    'Spark',
    'OpenAI',
    'Git',
    'Docker',
    'PowerBI',
  ],
  experiences: [
    {
      company: 'YSD Consultant',
      position: 'Data Scientist',
      from: 'November 2021',
      to: 'June 2025',
      companyLink: '',
    },
    {
      company: 'Service Engine',
      position: 'Software Engineer',
      from: 'November 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Probability',
      body: 'MITx',
      year: 'March 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Sussex',
      degree: 'MSc in Data Science',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'North South University',
      degree: 'BSc in CSE',
      from: '2014',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Analysis of spatial data and time series for predicting magnitude of seismic zones in Bangladesh',
      conferenceName: 'Artificial Intelligence and Algorithms in Intelligent Systems',
      journalName: 'Springer International Publishing',
      authors: 'S. Md Tanzim, S. Yeasmin, M. A. Hussain, T. M. Rezoan Tamal, R. Hasan, T. Rahman, R. M. Rahman',
      link: 'https://link.springer.com/chapter/10.1007/978-3-319-91189-2_36',
      description:
        'The paper demonstrates the use of clustering to find different sensitive seismic zones and time series for earthquake hazard prediction. Anticipating seismic activities using previous historical data is achieved by applying hierarchical, k-means, and density-based clustering. The clustered data is used in linear regression to build a predictive model for forecasting upcoming earthquakes’ magnitudes for different regions in and nearby areas of Bangladesh.',
    },
    {
      title: 'Income-based food list recommendation for rural people using fuzzy logic',
      conferenceName: '2018 IEEE/ACIS 17th International Conference on Computer and Information Science (ICIS)',
      journalName: 'IEEE',
      authors: '3.	M. A. Hussain, S. Yeasmin, S. Chowdhury, F. R. Wasee, S. Afrin, S. M. Tanzim, R. M. Rahman',
      link: 'https://ieeexplore.ieee.org/document/8466403/',
      description:
        'The paper proposes a fuzzy logic based food recommendation with the concepts of BMI (Body Mass Index), age, recommended nutrients and income. In Bangladesh, most of the people are suffering from malnutrition as they have no clear idea about food nutrition and the case is worse in the rural area due to low income of people are living there. We have developed a fuzzy model that recommends addition or reduction of food items in daily food habit that meets nutritional needs and budget limits of rural people in the context of Bangladesh. Since people have variations in their food intake, we have focused mostly in their nutritional imbalances to find the appropriate food groups that can be suggested. Local food items have been checked and divided into low and high cost categories. By fuzzifying different parameters, a recommended food list is presented that will consider both the income and preference level of rural people.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
