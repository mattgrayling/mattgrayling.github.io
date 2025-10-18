// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Open-source software, analysis tools, and code repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-supervision-and-teaching",
          title: "Supervision and Teaching",
          description: "Student supervision, teaching experience, and mentoring activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "Professional service, outreach activities, and community engagement",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-collaborations",
          title: "Collaborations",
          description: "Research collaborations and scientific partnerships",
          section: "Navigation",
          handler: () => {
            window.location.href = "/collaborations/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-new-paper-on-the-arxiv-bayesn-td-time-delay-and-h-estimation-for-lensed-sn-h0pe-we-measure-time-delays-and-magnifications-for-the-gravitationally-lensed-supernova-h0pe-yielding-h-0-69-3-12-6-7-8-km-s-mpc",
          title: 'New paper on the arXiv: BayeSN-TD: Time Delay and H₀ Estimation for Lensed...',
          description: "",
          section: "News",},{id: "projects-supernova-host-environments",
          title: 'Supernova Host Environments',
          description: "Understanding how SNe Ia are influenced by the environment in which they explode",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_sn_environment/";
            },},{id: "projects-strongly-lensed-supernovae",
          title: 'Strongly-lensed Supernovae',
          description: "Inference of time delays and magnifications of strongly-lensed SNe Ia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_lensing_systematics/";
            },},{id: "projects-simulation-based-inference-for-supernova-cosmology",
          title: 'Simulation-Based Inference for Supernova Cosmology',
          description: "Developing next-generation methods for cosmological parameter inference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_sbi_cosmology/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%67%32%31%30%32@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mattgrayling", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6741-983X", "_blank");
        },
      },{
        id: 'social-ads_url',
        title: 'Ads_url',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
