export interface TimeDuration{
    start:string;
    end:string;
}
export interface Experience{
    title:string;
    place:string;
    description:string;
    duration:TimeDuration
}
export interface Experiences{
    workExperience:Experience[];
    schoolExperience:Experience[];
}

export const experiences:Experiences ={
    workExperience:[
        {
            place:"Encora",
            title: "Software Developer",
            description: "Full stack software developer utilizing Java Spring for Backend and JSTL for Frontend.\nProficient in Microsoft SQL Server for database management.\nCollaborated cross-functionally with multiple departments to design and deliver effective solutions.\nDeveloped innovative software solutions to meet business requirements and enhance system performance.",
            duration:{
                start: "March 2021",
                end:"September 2022"
            }

        },
        {
            place:"Tecnologico de Monterrey",
            title: "IT Intern",
            description: "IT role, designing and proposing new tools or solutions for remote collaborative work.\nDesign of web application using Google Apps Script development environment.Creation of tutorial videos.\nCreation of websites.",
            duration:{
                start: "May 2020",
                end:"December 2020"
            }
        },
        {
            place:"BBVA",
            title: "Assistant in Discipline's department (Part Time)",
            description: "Research on Artificial Intelligence applications in banking and insurers.\nElaboration of flow charts of administrative processes in Visio.\nElaboration of Excel files with Macros.\nProcess auditor.\nAssistance in multiple tasks.",
            duration:{
                start: "July 2019",
                end:"October 2019"
            }
        },
        {
            place:"Nemak",
            title: "Lean Engineering Assistant",
            description: "Approach and analysis of application of the LEAN philosophy to improve productivity focused on administrative processes, as well as new technologies and tools ",
            duration:{
                start: "May 2019",
                end:"July 2019"
            }
        },
        {
            place:"Innovaction Gym - Tecnologico de Monterrey",
            title: "Lean Engineering Assistant",
            description: "Numerical control machine operator (3D printers, laser plotter and CNC milling machine).\nAssistance in product development.\nDesign advisor.",
            duration:{
                start: "November 2019",
                end:"May 2019"
            }
        },
        {
            place:"Mitacs - Concordia University",
            title: "Research Assistant",
            description: "I worked with 3D printers, some of my duties were giving technical support to a master degree student and modifying a 3D printer to print with experimental materials.\nIn this job I made some programs and small mechanisms, I also modified some electronics components of the 3D printer.",
            duration:{
                start: "July 2018",
                end:"October 2018"
            }
        }
    ],
    schoolExperience:[
        {
            place:"Shizuoka University",
            title:"Master's Degree in Applied Engineering",
            description:"I am making research in Dual Space Vector Modulation controller for motors of high load",
            duration:{
                start:"October 2022",
                end:"Now"
            }

        }
    ]
}