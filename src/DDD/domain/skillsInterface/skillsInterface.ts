export interface SkillsInterface {
    Title: string;
    Description: string;
    RelatedTechs: RelatedTechs[];
    Url: string;
    ImageSrc: string;
    ExperienceTime: number;
}

interface RelatedTechs { 
    Name: string;
    ImageSrc: string;
}