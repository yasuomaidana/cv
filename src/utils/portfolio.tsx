import { SvgIconComponent, YouTube } from "@mui/icons-material";
import port_folio_image from "../assets/images/fox.jpg"
import { Code } from "@mui/icons-material";

export enum PortfolioTag{
    Coding = "Coding",
    Robotics = "Robotics",
    Electronics = "Electronics"
}

export interface ImageMedia {
    image_link:string;
    image_description:string;
}

export interface YoutubeMedia {
    youtube_id:string;
    description:string;
    thumbnail:string;
}

export type PortFolioMedia = ImageMedia | YoutubeMedia;

export interface PortFolioItem {
    tags : PortfolioTag[];
    thumbnail: string | React.ReactElement<SvgIconComponent>;
    portFolioMedia?: PortFolioMedia[];
    title: string;
    description: string;
    links? : {link:string; icon:React.ReactElement<SvgIconComponent>}[]
}
export const portfolioItems:PortFolioItem[] = [
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        thumbnail: port_folio_image,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        portFolioMedia:[
            {
                youtube_id:"https://www.youtube.com/watch?v=HjTVGrmYySE",
                description:"Pick and place wireless testing",
                thumbnail:"https://img.youtube.com/vi/HjTVGrmYySE/maxresdefault.jpg"
            }
        ],
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE",
                icon: <YouTube/>
            }
        ]
    },
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        thumbnail: <Code/>,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE&ab_channel=YasuoIgnacioMaidanaP%C3%A9rez",
                icon: <YouTube/>
            }
        ]
    }
    
];