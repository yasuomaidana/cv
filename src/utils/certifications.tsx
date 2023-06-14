import fox from "../assets/images/fox.jpg";
export interface Certification{
    title:string;
    date:string;
    url:string;
}

export interface MainCertification extends Certification{
    icon:string;
    child_certifications?:Certification[];
}
export const certifications:MainCertification[] = [{
    title: "This will be a very long title, this should cut it",
    icon: fox,
    date: " today",
    url: "https://www.google.com"
},
{
    title: "Short title",
    icon: fox,
    date: " today",
    url: "https://www.google.com"
},
{
    title: "With children title",
    icon: fox,
    date: " today",
    url: "https://www.google.com",
    child_certifications:[{
        title: "Child 1",
    date: " today",
    url: "https://www.google.com",
    }]
},
{
    title: "With children title 2",
    icon: fox,
    date: " today",
    url: "https://www.google.com",
    child_certifications:[{
        title: "Child 3",
    date: " today",
    url: "https://www.google.com",
    },
    {
        title: "Child 3",
    date: " today",
    url: "https://www.google.com",
    }]
}
]