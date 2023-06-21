const university_of_michigan = "https://media.licdn.com/dms/image/C4E0BAQFGfERBPGurCg/company-logo_100_100/0/1519856309184?e=1695254400&v=beta&t=TOM6awRqwQTHTUoOJlRL1PPUIPreewQ3uVMM8TH-u9A";
const university_of_california_santa_cruz = "https://media.licdn.com/dms/image/C4E0BAQEEdPQHFbiGrg/company-logo_100_100/0/1656436363111?e=1695254400&v=beta&t=9IImeTQKuLKhyJP7M3pN3kv5fnOvUAF4egRHt20QojA";
const the_hong_kong_university_of_science_and_technology = "https://media.licdn.com/dms/image/C4E0BAQH4YoQ1L_piMg/company-logo_100_100/0/1624249048793?e=1695254400&v=beta&t=TvTALwGnIvpKx2Y1bKQPH6pR3BIwqCSOWQtsVrMpv7w";
const google = "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1695254400&v=beta&t=wHcffrQQxq0oRlUxMKwSoGYcDVNMs8K7HSfRdigkF3c";
const duke_university = "https://media.licdn.com/dms/image/C4E0BAQGXW0yOhYBbCg/company-logo_100_100/0/1547069414882?e=1695254400&v=beta&t=P-ir0BvGSOKLn8lCaWgK8kv_o4xWXNA6TF_dYeCDIYo";
const deeplearning_ai = "https://media.licdn.com/dms/image/C560BAQEHKffoI8RwIQ/company-logo_100_100/0/1612806383093?e=1695254400&v=beta&t=8WBU1tggA4U93g51gRar6m1RxcyI8BHUV0duErGj9kI";
const coursera = "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1695254400&v=beta&t=OYCt2ig-eU5YrkJ_uMhsesq41zSLqH8VmrKaxMiAunc";
const university_of_colorado_boulder = "https://media.licdn.com/dms/image/C560BAQGueVr_GgFPZg/company-logo_100_100/0/1519856474347?e=1695254400&v=beta&t=HjhfpSdQpJFQ928ImqHjz0_WFRBGm6PYoQub-phSkAM";

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
    icon: university_of_california_santa_cruz,
    title: "C++ For C Programmers, Part A",
    date: "May 2023",
    url: "https://coursera.org/verify/EPYKCM46VB6R",
  },
  {
    icon: university_of_colorado_boulder,
    title: "Introduction to Machine Learning: Supervised Learning",
    date: "May 2023",
    url: "https://www.coursera.org/account/accomplishments/certificate/ENQ32LC2A5VY",
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
