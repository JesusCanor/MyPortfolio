import { roadMapInterface } from "../../DDD/domain";

export const roadmapData : roadMapInterface[] = [
    {
        Technologies: ['Spring', 'Java 11', 'React', 'AWS', 'Docker', 'Python', 'DJango'],
        Rol: 'FullStack Software Developer',
        CompanyName: 'Obuu',
        Description: `<p>Nuevos desarrollos, mantenimiento y optimización de producto propio <b>Stockwatch</b>. Un software diseñado para la optimización logística</br>
                      En esta oportunidad laboral, he podido continuar el desarrollo del producto propio consistente en <br>Optimización logística de almacenamiento.</br>
                      Gracias a su arquitectura he podido aprender varios servicios de AWS como el API Gateway y lambda principalmente, entre otros.
                      </p>
                      <p>Implementación desde 0 de la arquitectura y el frontend de un software para ejecutar scripts de <b>Inteligencia artificial en Python</b></p>
                      <p>Implementación y diseño desde 0 de un software  <b>Vector-AI</b></p>
                      <p><b>Indra sas</b></p>
                      <p><b>Estimación Indra</b></p>`,
        InitialDate: new Date(2020, 9, 1),
        FinalDate: new Date(),
        borderTop: '#00abff',
        iconColor: '#00abff',
        boxShadowIconColor: 'white',
    },
    {
        Technologies: ['Spring', 'Java 8', 'Angular JS'],
        Rol: 'FullStack Software Developer',
        CompanyName: 'Work4Data',
        Description: 'Este seria un ejemplo de lo que hice en esta empresa',
        Rol: 'Desarrollador backend',
        InitialDate: new Date(2018, 9, 11),
        FinalDate: new Date(2020, 4, 1),
        borderTop: 'black',
        iconColor: '#FFF',
        boxShadowIconColor: '#00abff',
    },
    {
        Technologies: ['Spring', 'Java', 'JavaScript'],
        Rol: 'FullStack Software Developer',
        CompanyName: 'Neoris',
        Description: 'Este seria un ejemplo de lo que hice en esta empresa',
        InitialDate: new Date(2017, 9, 1),
        FinalDate: new Date(2018, 9, 1),
        borderTop: 'black',
        iconColor: '#FFF',
        boxShadowIconColor: '#00abff',
    },
    {
        Technologies: ['Cobol', 'DB2'],
        Rol: 'Backend Software Developer',
        CompanyName: 'Tecnilógica Accenture',
        Description: '-Hice vinagre to flaman /n -Hice algo to flaman /n -Hice algo',
        InitialDate: new Date(2015, 7, 1),
        FinalDate: new Date(2017, 9, 1),
        borderTop: 'black',
        iconColor: 'black',
        boxShadowIconColor: '#00abff',
    },
]