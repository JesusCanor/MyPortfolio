export interface SkillsInterface {
    Title: string;
    Description: string;
    RelatedTechs: RelatedTechs[];
    ExperienceTime: number;
    color: string;
}

interface RelatedTechs { 
    Name: string;
    ImageSrc: string;
}