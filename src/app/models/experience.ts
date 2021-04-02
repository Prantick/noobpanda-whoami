enum ExperienceType{
    UNIVERSITY = "university",
    OFFICE = "office",
    GOAL = "goal" 
}
export interface Experience{
    type: ExperienceType;
    name:string,
    yearStart:string,
    yearEnd:string,
    role:string,
    location:string,
    focus:boolean
}