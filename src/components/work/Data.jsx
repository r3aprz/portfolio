import Work1 from '../../assets/work1.jpg';
import Kopilot from '../../assets/kopilot.svg';
import Nowcast from '../../assets/nowcast.png';
import IRC from '../../assets/IRC.png';
import TerminalPortfolio from '../../assets/terminalPortfolio.PNG';
import VoxelEngine from '../../assets/VoxelEngine.png';
import Portfolio from '../../assets/portfolio.PNG';

export const projectsData = [
    {
        id: 1,
        image: Kopilot,
        title: 'Kopilot',
        description: 'Web platform for offering and requesting rides',
        category: 'Web',
        github: 'https://github.com/r3aprz/kopilot-tw6/',
        demo: '',
        languages: [
            'devicon-html5-plain-wordmark colored', 
            'devicon-css3-plain-wordmark colored', 
            'devicon-javascript-plain colored', 
            'devicon-python-plain-wordmark colored', 
            'devicon-flask-original',
            'devicon-sqlite-plain colored',
            'devicon-jquery-plain-wordmark colored',
            'devicon-bootstrap-plain-wordmark colored',
        ],
    },
    {
        id: 2,
        image: Nowcast,
        title: 'RainPredRNN2',
        description: 'DL model for meteorological nowcasting',
        category: 'App',
        github: 'https://github.com/r3aprz/RainPredRNN2',
        demo: '',
        languages: [
            'devicon-python-plain-wordmark colored', 
            'devicon-numpy-plain colored', 
            'devicon-pytorch-plain colored',
        ],
    },
    {
        id: 3,
        image: IRC,
        title: 'Chat IRC',
        description: 'Java based IRC client with a custom protocol',
        category: 'App',
        github: 'https://github.com/r3aprz/IRC-p3proj',
        demo: '',
        languages: [
            'devicon-java-plain colored', 
            'devicon-mysql-plain colored', 
        ],
    },
    {
        id: 4,
        image: TerminalPortfolio,
        title: 'Terminal Portfolio',
        description: 'Working Linux like terminal portfolio website',
        category: 'Web',
        github: 'https://github.com/r3aprz/CLIportfolio',
        demo: '#',
        languages: [
            'devicon-html5-plain-wordmark colored', 
            'devicon-css3-plain-wordmark colored', 
            'devicon-javascript-plain colored', 
            'devicon-jquery-plain-wordmark colored',
        ],
    },
    {
        id: 5,
        image: VoxelEngine,
        title: 'Voxel Engine',
        description: 'A simple voxel engine with a custom raycaster',
        category: 'App',
        github: 'https://github.com/r3aprz/VoxelEngine',
        demo: '',
        languages: [
            'devicon-python-plain-wordmark colored', 
            'devicon-pycharm-plain colored',
            'devicon-opengl-plain colored',
        ],
    },
    {
        id: 6,
        image: Portfolio,
        title: 'Portfolio',
        description: 'My personal portfolio website',
        category: 'Web',
        github: 'https://github.com/r3aprz/portfolio',
        demo: 'https://francescodemicco-portfolio.netlify.app/',
        languages: [
            'devicon-html5-plain-wordmark colored', 
            'devicon-css3-plain-wordmark colored', 
            'devicon-javascript-plain colored', 
            'devicon-react-original colored',
            'devicon-vitejs-plain colored',
            'devicon-devicon-plain colored',
            'devicon-json-plain colored',
        ],
    },

    // password manager, pathfinder visualizer, sorting visualizer, discord clone, netflix clone, yt clone, spotify clone, 3dprint web site
];

export const projectsNav = [ 
    {
        name: 'All',
    },
    {
        name: 'Web',
    },
    {
        name: 'App',
    }
]