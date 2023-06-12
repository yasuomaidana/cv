import { SvgIconComponent, YouTube } from "@mui/icons-material";
import port_folio_image from "../assets/images/fox.jpg"

export enum PortfolioTag{
    Coding = "Coding",
    Robotics = "Robotics",
    Electronics = "Electronics"
}

export interface PortFolioItem {
    tags : PortfolioTag[];
    portfolio_image: string;
    video?: string;
    title: string;
    description: string;
    links? : {link:string; icon:React.ReactElement<SvgIconComponent>}[]
}
export const portfolioItems:PortFolioItem[] = [
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        portfolio_image: port_folio_image,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE&ab_channel=YasuoIgnacioMaidanaP%C3%A9rez",
                icon: <YouTube/>
            }
        ]
    },
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        portfolio_image: port_folio_image,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE&ab_channel=YasuoIgnacioMaidanaP%C3%A9rez",
                icon: <YouTube/>
            }
        ]
    },
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        portfolio_image: port_folio_image,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE&ab_channel=YasuoIgnacioMaidanaP%C3%A9rez",
                icon: <YouTube/>
            }
        ]
    },
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        portfolio_image: port_folio_image,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        links: [
            {
                link:"https://www.youtube.com/watch?v=HjTVGrmYySE&ab_channel=YasuoIgnacioMaidanaP%C3%A9rez",
                icon: <YouTube/>
            }
        ]
    },
    {
        tags: [PortfolioTag.Robotics, PortfolioTag.Coding, PortfolioTag.Electronics],
        portfolio_image: port_folio_image,
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