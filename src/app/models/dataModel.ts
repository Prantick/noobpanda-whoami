import { About } from "./about";
import { Blogs } from "./blogs";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Skills } from "./skills";

export interface DataModel{
    about:About;
    experience:Array<Experience>;
    projects:Array<Projects>;
    skills:Array<Skills>;
    blogs:Array<Blogs>;
}