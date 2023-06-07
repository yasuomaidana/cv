import React from "react";
import { GitHub, SvgIconComponent, YouTube, LinkedIn } from "@mui/icons-material";

interface Social{
    link:string;
    icon: React.ReactElement<SvgIconComponent>;
    text: string;
}
interface Socials{
    Linkedin: Social;
    Github: Social;
    Youtube: Social;
}
const socials:Socials = {
    Linkedin:{ 
        link:"https://www.linkedin.com/in/yasuo-maidana/",
        text: "MyLinkedIn",
        icon: <LinkedIn/>
    },
    Github:{ 
        link:"https://github.com/yasuomaidana/",
        icon: <GitHub/>,
        text: "MyGithub"
    },
    Youtube:{
        link: "https://www.youtube.com/channel/UC-4Wu0YTb81bUBpsGI-gAWw",
        icon: <YouTube/>,
        text: "MyYoutube"
    }
}
export default socials;