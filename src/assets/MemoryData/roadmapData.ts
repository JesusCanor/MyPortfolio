import { roadMapInterface } from "../../DDD/domain";

export const roadmapData : roadMapInterface[] = [
    {
        Technologies: ['Spring', 'Java 11', 'React', 'AWS', 'Docker', 'Python', 'DJango', 'Angular'],
        Rol: 'FullStack Software Developer',
        CompanyName: 'Obuu',
        Description: `<ul>
                        <li>
                            <p>Nuevos desarrollos, mantenimiento y optimización de producto propio <b>Stockwatch</b>. Un software SaaS diseñado para la optimización logística de almacenamiento.</p>
                        </li>
                        <li>
                            <p>Implementación desde 0 de un software para ejecutar scripts de <b>Inteligencia artificial en Python</b> junto a un front-end.</p>
                        </li>
                        <li>
                            <p>Implementación y diseño completo desde 0 de <b>Vector-AI</b>. Un software de detección de errores mediante visión artificial.</p>
                        </li>
                        <li>
                            <p>Team Lead de proyectos de <b>consultoria y desarrollo</b>, para software personalizados destinado a cliente final.</p>
                        </li>
                      </ul>`,
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
        Description: `<ul>
                        <li>
                            <p>Nuevas implementaciones, mejoras y corrección de errores de producto propio.</p>
                        </li>
                        <li>
                            <p>Nuevas implementaciones, mejoras y corrección de errores de producto propio.</p>
                        </li>
                        <li>
                            <p>Nuevas implementaciones, mejoras y corrección de errores de producto propio.</p>
                        </li>
                      </ul>`,
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