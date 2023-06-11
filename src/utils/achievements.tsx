import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';


export interface Achievement{
    title:String;
    achievement_image: string|JSX.Element;
    institution: String;
    date:String;
}



export const achievements:Achievement[] = [
    {
        title: "Student Development Diploma",
        achievement_image: <EmojiEventsIcon/>,
        institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
        date: "December 2020",
    },
    {
        title: "Mitacs internship program participation",
        achievement_image: <WorkspacePremiumIcon/>,
        institution: "Mitacs - Concordia",
        date: "November 2018",
    },
    {
        title: "\"Future Societies, Global Citizens\" International conference participation.",
        achievement_image: <RecordVoiceOverIcon/>,
        institution: "Universitas 21 - The university of Edinburgh",
        date: "July 2017",
    },
    {
        title: "\"47th Research and Development Congress\" Conference participation.",
        achievement_image: <RecordVoiceOverIcon/>,
        institution: "Instituo Tecnológico y de Estudios Superiores de Monterrey",
        date: "March 2017",
    },{
        title: "Best Academic Mentor Nomination",
        achievement_image: <WorkspacePremiumIcon/>,
        institution: "MAES - Instituto Tecnológico y de Estudios Superiores de Monterrey",
        date: "February 2018",
    },{
        title: "Workshop on Telecomunnication Principles - Speaker",
        achievement_image: <RecordVoiceOverIcon/>,
        institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
        date: "November 2019",
    },{
        title: "Participation in entrepreneurship competition",
        achievement_image: <WorkspacePremiumIcon/>,
        institution: "INC - Instituto Tecnológico y de Estudios Superiores de Monterrey",
        date: "November 2018",
    },{
        title: "Master's Degree Scholarship",
        achievement_image: <EmojiEventsIcon/>,
        institution: "Jasso - Shizuoka University",
        date: "October 2022",
    }
]
