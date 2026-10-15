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
          description: "CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-new-paper-on-the-arxiv-bayesn-td-time-delay-and-h-estimation-for-lensed-sn-h0pe-we-measure-time-delays-and-magnifications-for-the-gravitationally-lensed-supernova-h0pe-yielding-h-0-69-3-12-6-7-8-km-s-mpc",
          title: 'New paper on the arXiv: BayeSN-TD: Time Delay and H₀ Estimation for Lensed...',
          description: "",
          section: "News",},{id: "news-new-paper-on-the-arxiv-bayesn-dovekie-joint-photometric-cross-calibration-and-sed-modelling-of-type-ia-supernovae-we-jointly-train-the-bayesn-model-and-constrain-photometric-cross-calibration-between-instruments-using-calibration-constraints-from-dovekie-as-a-prior",
          title: 'New paper on the arXiv: BayeSN × Dovekie: Joint Photometric Cross-calibration and SED...',
          description: "",
          section: "News",},{id: "news-new-paper-jax-snana-a-gpu-accelerated-supernova-framework-for-the-sbi-era-the-code-and-documentation-are-available-for-supernova-simulations-light-curve-fitting-and-cosmological-inference-with-jax",
          title: 'New paper: jax-SNANA: A GPU-accelerated Supernova Framework for the SBI Era. The code...',
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
        id: 'social-ads',
        title: 'NASA ADS',
        section: 'Socials',
        handler: () => {
          window.open("https://ui.adsabs.harvard.edu/search/filter_doctype_facet_hier_fq_doctype=AND&filter_doctype_facet_hier_fq_doctype=doctype_facet_hier%3A%220%2FArticle%22&fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq=%7B!type%3Daqp%20v%3D%24fq_doctype%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&fq_doctype=(doctype_facet_hier%3A%220%2FArticle%22)&q=%20author%3A%22Grayling%2C%20M%22&sort=date%20desc%2C%20bibcode%20desc&p_=00", "_blank");
        },
      },];
