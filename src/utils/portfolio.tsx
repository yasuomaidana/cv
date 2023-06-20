import { SvgIconComponent, YouTube } from "@mui/icons-material";
import pick_and_place_thumbnail from "../assets/portfolio/Pick and Place Machine/thumb.jpg";
import pick_and_place_bomb from "../assets/portfolio/Pick and Place Machine/Machine Bomb.jpeg"
import { Code } from "@mui/icons-material";

export enum PortfolioTag{
    Coding = "Coding",
    Robotics = "Robotics",
    Electronics = "Electronics",
    Control = "Control",
    Other = "Other"
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
    description: string | JSX.Element;
    links? : {link:string; icon:React.ReactElement<SvgIconComponent>}[]
}
export const portfolioItems:PortFolioItem[] = [
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        thumbnail: pick_and_place_thumbnail,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        portFolioMedia:[
            {
                youtube_id:"https://www.youtube.com/watch?v=HjTVGrmYySE",
                description:"Pick and place wireless demo",
                thumbnail:"https://img.youtube.com/vi/HjTVGrmYySE/maxresdefault.jpg" //https://i.ytimg.com/vi/uqGu26pprZs/maxres2.jpg
            },{
                image_link:pick_and_place_thumbnail,
                image_description:"Pick and place machine"
            },
            {
                image_link:pick_and_place_bomb,
                image_description:"Machine bomb"
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
        tags: [PortfolioTag.Robotics],
        thumbnail: <Code/>,
        title: "Pick and Place Machine",
        description: <><p><p>"This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique"</p><p><p>"This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique"</p></p></p></>,
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE",
                icon: <YouTube/>
            }
        ]
    }
    
];