enum Contribution {
    IDEATION ="Ideation", 
    PROTOTYPING = "Prototyping", 
    DEVELOPMENT = "Development", 
    TESTING ="Testing", 
    PRESENTATION = "Presentation"
}
export interface Projects {
    type: string;
    url: any;
    flags: any;
    techStack: Array<string>;
    name: string;
    review: string;
    contribution: Array<Contribution>;
    role:string,
    timelineStart:string;
    timelineEnd:string;
    view:string;
    contd:string;
}