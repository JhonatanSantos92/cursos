export interface Curso  {
    id: number;
    img: string;
    instructor: string;
    progress: number;
    qualification: number;
    title: string;
}

export interface DetalleCurso {
    title: string;
    section: string;
    classes: string[];
}
