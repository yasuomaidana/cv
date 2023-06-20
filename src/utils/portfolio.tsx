import { SvgIconComponent, YouTube } from "@mui/icons-material";
import { Code } from "@mui/icons-material";

import big_3d_printer_assembly_img from "../assets/portfolio/3D Printer assembly and modification/Big 3D printer assembly.jpg";
import extrude_holder_modification_img from "../assets/portfolio/3D Printer assembly and modification/Extrude holder modification.jpg";
import d_printer_assembly_and_modification_thumb_img from "../assets/portfolio/3D Printer assembly and modification/thumb.jpeg";
import ultimaker_with_customized_extruder_for_viscous_materials_img from "../assets/portfolio/3D Printer assembly and modification/Ultimaker with customized extruder for viscous materials.jpg";
import d_printer_assembly_img from "../assets/portfolio/3D Printer with computer vision system/3D printer assembly.jpg";
import heat_bed_holder_img from "../assets/portfolio/3D Printer with computer vision system/Heat bed holder.jpeg";
import programming_3d_printer_img from "../assets/portfolio/3D Printer with computer vision system/Programming 3D printer.jpeg";
import zaxis_img from "../assets/portfolio/3D Printer with computer vision system/zaxis.jpeg";
import tcp_ip_controlled_car_img from "../assets/portfolio/Car controlled by TCP-IP and Labview/TCP IP Controlled Car.jpg";
import car_controlled_by_voice_thumb_img from "../assets/portfolio/Car controlled by voice/thumb.jpg";
import picture_with_the_crew_img from "../assets/portfolio/Car controlled by voice v2/Picture with the crew.jpg";
import car_controlled_by_voice_v2_thumb_img from "../assets/portfolio/Car controlled by voice v2/thumb.jpeg";
import inc_enterpreneour_participation_thumb_img from "../assets/portfolio/INC Enterpreneour Participation/thumb.jpg";
import line_follower_with_alcohol_sensor_car_thumb_img from "../assets/portfolio/Line follower with alcohol sensor car/thumb.jpg";
import maes_nomination_thumb_img from "../assets/portfolio/Maes Nomination/thumb.jpg";
import machine_bomb_img from "../assets/portfolio/Pick and Place Machine/Machine Bomb.jpeg";
import pick_and_place_machine_thumb_img from "../assets/portfolio/Pick and Place Machine/thumb.jpg";
import diagrams_img from "../assets/portfolio/Position algorithm/diagrams.jpg";
import rssi_img from "../assets/portfolio/Position algorithm/rssi.jpg";
import submission_img from "../assets/portfolio/Position algorithm/submission.jpg";
import position_algorithm_thumb_img from "../assets/portfolio/Position algorithm/thumb.jpg";
import race_participation_thumb_img from "../assets/portfolio/Race participation/thumb.jpg";
import talkshow_thumb_img from "../assets/portfolio/Talkshow/thumb.jpg";
import presenting_my_algorithm_img from "../assets/portfolio/Universitas 21 Participation conference/Presenting my algorithm.jpg";
import presenting_my_research_at_edinburgh_img from "../assets/portfolio/Universitas 21 Participation conference/Presenting my research at Edinburgh.jpg";


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
        thumbnail: presenting_my_research_at_edinburgh_img,
        title: "Pick and Place Machine",
        description: "This prototype is capable of holding electronic components and placing them into the working area. We incorporated a laser led to simulate micro soldering using laser technique",
        portFolioMedia:[
            {
                youtube_id:"https://www.youtube.com/watch?v=HjTVGrmYySE",
                description:"Pick and place wireless demo",
                thumbnail:"https://img.youtube.com/vi/HjTVGrmYySE/maxresdefault.jpg" //https://i.ytimg.com/vi/uqGu26pprZs/maxres2.jpg
            },{
                image_link:presenting_my_algorithm_img,
                image_description:"Pick and place machine"
            },
            {
                image_link:presenting_my_algorithm_img,
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