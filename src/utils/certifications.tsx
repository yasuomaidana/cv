const university_of_michigan = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/University%20of%20Michigan.jpeg";
const university_of_california_santa_cruz = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/University%20of%20California%2c%20Santa%20Cruz.jpeg";
const the_hong_kong_university_of_science_and_technology = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/The%20Hong%20Kong%20University.jpeg";
const google = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/Google.jpeg";
const duke_university = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/Duke%20University.jpeg";
const deeplearning_ai = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/deeplearningai_logo.jpeg";
const coursera = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/coursera_logo.jpeg";
const university_of_colorado_boulder = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/University%20of%20Colorado.jpeg";
const university_of_alberta = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/University%20of%20Alberta.jpeg";
const university_of_toronto = "https://www.vulpuxmecatroncus.com/static/media/certifications_icons/University%20of%20Toronto.jpeg"

export interface Certification {
  title: string;
  date: string;
  url: string;
}

export interface MainCertification extends Certification {
  icon: string;
  child_certifications?: Certification[];
}
export const certifications: MainCertification[] = [
  {
    icon: university_of_toronto,
    title: "Introduction to Self-Driving Cars",
    date: "Nov 2023",
    url: "https://coursera.org/share/b4d9b08722eded6769edcc0b615ef2bc",
  },{
    icon: university_of_california_santa_cruz,
    title: "C++ For C Programmers, Part A",
    date: "May 2023",
    url: "https://coursera.org/verify/EPYKCM46VB6R",
  },
  {
    icon: university_of_california_santa_cruz,
    title: "C for Everyone: Programming Fundamentals",
    date: "Mar 2023",
    url: "https://www.coursera.org/account/accomplishments/certificate/C5T73LY7FJQR",
  },
  {
    icon: university_of_california_santa_cruz,
    title: "C for Everyone: Structured Programming",
    date: "Mar 2023",
    url: "https://coursera.org/verify/PVGGRMNGR2L8",
  },
  {
    icon: duke_university,
    title: "Introduction to Machine Learning",
    date: "Feb 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/C4WP4PLHUYM8",
  },
  {
    icon: the_hong_kong_university_of_science_and_technology,
    title: "Differential Equations for Engineers",
    date: "Aug 2022",
    url: "https://coursera.org/verify/KTMJENJDXS5S",
  },
  {
    icon: the_hong_kong_university_of_science_and_technology,
    title: "Matrix Algebra for Engineers",
    date: "Jun 2022",
    url: "https://coursera.org/verify/BEXVTS3BWZSQ",
  },
  {
    icon: the_hong_kong_university_of_science_and_technology,
    title:
      "Multiplatform Mobile App Development with Web Technologies: Ionic and Cordova",
    date: "Apr 2021",
    url: "https://coursera.org/share/4be2c5c82ccb9e8680e1252c857259c9",
  },
  {
    icon: university_of_michigan,
    title: "Python Classes and Inheritance",
    date: "Jan 2021",
    url: "https://coursera.org/share/73910e24a4b2a790f6afd977feed9dc2",
  },
  {
    icon: university_of_colorado_boulder,
    title: "Machine Learning: Theory and Hands-on Practice with Python",
    date: "August 2023",
    url: "https://coursera.org/share/edfb3e5e54171b89765749664244b821",
    child_certifications:[
      {
        title: "Introduction to Machine Learning: Supervised Learning",
        date: "May 2023",
        url: "https://www.coursera.org/account/accomplishments/certificate/ENQ32LC2A5VY",
      },
      {
        title: "Unsupervised Algorithms in Machine Learning",
        date: "Jun 2023",
        url: "https://coursera.org/share/0b4c7ccbcac9d37a5c19a441b41ed70d",
      },
      {
        title: "Introduction to Deep Learning",
        date: "Aug 2023",
        url: "https://coursera.org/share/ea11c7aa12a8202bb5bdd32b1aafbf1b",
      }
    ]
  },{
    icon: university_of_alberta,
    title: "Reinforcement Learning",
    date: "October 2023",
    url: "https://coursera.org/share/4bb99c2b724f0c167aa1bf62383889dd",
    child_certifications:[
      {
        title: "Fundamentals of Reinforcement Learning",
        date: "Aug 2023",
        url: "https://coursera.org/share/9b5316bb89141fab457da0adf663e121",
      },
      {
        title: "Sample-based Learning Methods",
        date: "Sep 2023",
        url: "https://coursera.org/share/37113c7105c18f7c74b4b6185a8535ca",
      },
      {
        title: "Prediction and Control with Function Approximation",
        date: "Oct 2023",
        url: "https://coursera.org/share/038bed176e7344a31d77b7fb2bd572ce",
      },
      {
        title: "A Complete Reinforcement Learning System",
        date: "Oct 2023",
        url: "https://coursera.org/share/cb0017db7631cc38faee75bd0599dd5d",
      }
    ]
  },
  {
    icon: university_of_michigan,
    title: "Python for Everybody",
    date: "Jan 2021",
    url: "https://coursera.org/share/4994b6a184c8e3f64e7907ab3e1cec77",
    child_certifications:[
        {
            title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
            date: "Jan 2021",
            url: "https://coursera.org/share/f9b12f8c733f5884397bd65639db7b32",
          },
          {
            title: "Python Data Structures",
            date: "Jan 2021",
            url: "https://coursera.org/share/fc8f411ff20e23976eddc203430a60cf",
          },
          {
            title: "Programming for Everybody (Getting Started with Python)",
            date: "Jan 2021",
            url: "https://coursera.org/share/13feabf06c4421951899391b5f2298f7",
          },
          {
            title: "Using Python to Access Web Data",
            date: "Jan 2021",
            url: "https://coursera.org/share/a8bff6149b521197fd2673cdbd50f5d5",
          },
          {
            title: "Using Databases with Python",
            date: "Jan 2021",
            url: "https://coursera.org/share/0293a0b4421367b7d44daed0ee1b0e21",
          }
    ]
  },
  {
    icon: deeplearning_ai,
    title: "Deep Learning",
    date: "Jan 2021",
    url: "https://coursera.org/share/a6476b812fae761ab7c684d7ce461541",
    child_certifications:[
      {
        title: "Sequence Models",
        date: "Jan 2021",
        url: "https://coursera.org/share/8777a4c863d428c667d5685d1d5aa4ca",
      },
      {
        title: "Structuring Machine Learning Projects",
        date: "Aug 2020",
        url: "https://www.coursera.org/account/accomplishments/certificate/D67QPH7DCJSH",
      },
      {
        title:
          "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
        date: "Aug 2020",
        url: "https://www.coursera.org/account/accomplishments/certificate/77S7RKE2KAJ3",
      },
      {
        title: "Convolutional Neural Networks",
        date: "Oct 2020",
        url: "https://coursera.org/share/8702783db7c596c050c113cabee4ef63",
      },
      {
        title: "Neural Networks and Deep Learning",
        date: "Aug 2020",
        url: "https://www.coursera.org/account/accomplishments/certificate/XDEQBJWP32L5",
      }
    ]
  },
  {
    icon: the_hong_kong_university_of_science_and_technology,
    title: "Full Stack Web Development with Angular",
    date: "Jun 2021",
    url: "https://coursera.org/verify/specialization/D2GUFAMBG7MM",
    child_certifications:[
      {
        title: "Front-End JavaScript Frameworks: Angular",
        date: "Feb 2021",
        url: "https://coursera.org/share/15d8d803b71f530299d82f730238c2a7",
      },
      {
        title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
        date: "Jan 2021",
        url: "https://coursera.org/share/01dfba02c1a97ed19414ab735fab892b",
      },
      {
        title: "Server-side Development with NodeJS, Express and MongoDB",
        date: "Jun 2021",
        url: "https://coursera.org/verify/9SCK5JUE6J8F",
      }
    ]
  },
  {
    icon: university_of_colorado_boulder,
    title: "Power Electronics",
    date: "Sep 2022",
    url: "https://www.coursera.org/account/accomplishments/specialization/7WGKTBXWCNJB",
    child_certifications:[
      {
        title: "Converter Control",
        date: "Aug 2022",
        url: "https://coursera.org/verify/VK29TYKHVAF4",
      },
      {
        title: "Magnetics for Power Electronic Converters",
        date: "Sep 2022",
        url: "https://www.coursera.org/account/accomplishments/verify/XQ9466L3Q7TY",
      },
      {
        title: "Introduction to Power Electronics",
        date: "Jun 2022",
        url: "https://coursera.org/verify/SBZZD73UH9CD",
      },
      {
        title: "Converter Circuits",
        date: "Jul 2022",
        url: "https://coursera.org/verify/8SDH5VWQ9MNC",
      }
    ]
  },
  {
    icon: google,
    title: "Technical Support Fundamentals",
    date: "Sep 2020",
    url: "https://coursera.org/share/ce47e145231191eedda7a7a8f0a67b11",
  },
  {
    icon: google,
    title: "Troubleshooting and Debugging Techniques",
    date: "Sep 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/85EJGEVJQ8YG",
  }, 
  {
    icon: google,
    title: "Introduction to Git and GitHub",
    date: "Aug 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/NCLD2LUPREMQ",
  },
  {
    icon: coursera,
    title: "Develop a Company Website with Wix",
    date: "Jul 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/2FPU63R7MWGW",
  },
  {
    icon: coursera,
    title: "Perform Real-Time Object Detection with YOLOv3",
    date: "Jul 2020",
    url: "https://coursera.org/share/b4a6923c86a3c1ff29564062683de0b7",
  },
];
