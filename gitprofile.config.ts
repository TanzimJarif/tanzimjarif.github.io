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
      header: 'Github Projects',
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
        projects: ['TanzimJarif/relative-humidity-forecasting-mlops', 'TanzimJarif/propaganda-detection-llm'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
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
    },
  },
  seo: { title: 'Portfolio of Sarker MD Tanzim', description: '', imageURL: '' },
  social: {
    linkedin: 'sm-tanzim',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1ApLSKTCaRBSbC1amEMt-Dypcdypc_HZt/edit?usp=sharing&ouid=103228794544147733958&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'R',
    'TensorFlow',
    'PyTorch',
    'AWS',
    'GCP',
    'PowerBI',
    'Docker',
    'Matlabs',
    'Databricks',
    'Spark',
    'Git',
  ],
  experiences: [
    {
      company: 'YSD Consulting',
      position: 'Data Scientist',
      from: 'November 2021',
      to: 'June 2025',
      companyLink: 'https://www.ysdconsulting.co.uk/',
    },
    {
      company: 'Service Engine',
      position: 'Software Engineer',
      from: 'November 2019',
      to: 'August 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Probability - The Science of Uncertainty and Data',
      body: 'MITX',
      year: 'September 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Sussex',
      degree: 'MSc',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'North South University',
      degree: 'BSc in Computer Science and Engineering',
      from: '2014',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Analysis of spatial data and time series for predicting magnitude of seismic zones in Bangladesh',
      conferenceName: '',
      journalName: ' Artificial Intelligence and Algorithms in Intelligent Systems',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in the profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'sunset',
      'abyss',
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
