interface Publication{
    title:string;
    journal:string;
    date:string;
    url?:string;
}
export const publications:Publication[] = [
    {
        title: "Statistical Evaluation of the Positioning Error in Sequential Localization Techniques for Sensor Networks",
        journal: "Proceedings of the 3rd International Electronic Conference on Sensors and Applications",
        date: "November 2016",
        url: "https://www.mdpi.com/2504-3900/1/2/15"
    }
]