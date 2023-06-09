import { SvgIconComponent } from "@mui/icons-material";
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import TranslateIcon from '@mui/icons-material/Translate';

export interface Skill{
    icon?: React.ReactElement<SvgIconComponent>;
    title: string;
}

export interface CoreSkill extends Skill{
    icon: React.ReactElement<SvgIconComponent>;
    subSkills: Skill[];
}

export interface Skills{
    programming:CoreSkill;
    robotics:CoreSkill;
    electronics:CoreSkill;
    machineLearning:CoreSkill;
    softSkills:CoreSkill;
    languages:CoreSkill;
};
export const skills:Skills = {
    programming:{
        icon:<CodeIcon/>,
        title:"Programming",
        subSkills: [
            {
                title:"Backend (Java-Spring, Kotlin-Micronaut)"
            },
            {
                title:"Frontend (React, Angular)"
            },
            {
                title:"Simulation desing (Matlab, Python)"
            },{
                title: "Web apps"
            }
        ]
    },
    robotics:{
        icon: <PrecisionManufacturingIcon/>,
        title: "Robotics",
        subSkills:[
            {
                title:"CAD design (Fusion360)"
            },
            {
                title:"Simulation (Matlab, RoboStudio, Python)"
            },{
                title:"Microcontrollers (Arduino, Pic18, C, C++)"
            },{
                title:"Microprocessors (RaspberryPi)"
            }
        ]
    },
    electronics:{
        icon: <ElectricBoltIcon/>,
        title: "Electronics",
        subSkills:[
            {
                title:"Circuit simulations (PSIM, LTspice)"
            },{
                title:"Circuit assembly"
            },
            {
                title:"Testing (Oscilloscope)"
            },{
                title:"Circuit design (KiCad)"
            }
        ]
    },
    machineLearning:{
        icon:<SettingsSuggestIcon/>,
        title:"Machine Learning",
        subSkills:[
            {
                title:"Computer Vision (OpenCV, Python Keras, Pytorch)"
            },
            {
                title:"Web scrapping"
            },
            {
                title:"Data analysis (Pandas, Seaborn)"
            }
        ]
    },
    softSkills:{
        icon:<WorkspacesIcon/>,
        title:"Soft Skills",
        subSkills:[
            {
                title:"Minor in Research and Innovation"
            },
            {
                title:"Processes analysis"
            },{
                title:"Teaching"
            }
        ]
    },
    languages:{
        icon:<TranslateIcon/>,
        title:"Languages",
        subSkills:[
            {
                title:"Spanish"
            },
            {
                title:"English"
            },
            {
                title:"Japanese"
            }
        ]
    }
}