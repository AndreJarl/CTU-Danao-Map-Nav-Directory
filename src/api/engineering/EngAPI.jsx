/* Floor 1 */
/*En room*/
import eeLab from "./img/EELAB03.jpg";
import ceLab1 from "./img/CELAB01.jpg";
import ceLab2 from "./img/CELAB03.jpg";
import comLab1 from "./img/ENCLA3.jpg";
import comLab2 from "./img/ENLAB2B3.jpg";
import elecLab from "./img/EL02.jpg";
import ENlecLab2 from "./img/ENCME1023.jpg";
import ENlecLab1 from "./img/ENCME1012.jpg";


/* confort room*/
import feCR1 from "./img/LCR103.jpg";
import feCR2 from "./img/LCR202.jpg";

/* others room*/
import RTBL from "./img/RTBL03.jpg";
import strgRM1 from "./img/STRGRM203.jpg";
import strgRM2 from "./img/STRGRM102.jpg";
import EECroom from "./img/EECER01.jpg";
import stair1 from "./img/GFSTRS101.jpg";
import stair2 from "./img/GFSTRS201.jpg";
import ramp1 from "./img/RAW01.jpg";
import ramp2 from "./img/RAW02.jpg";
import frExit from "./img/FEGF03.jpg";

/*Floor 2 */
import COED from "./img/CollegeOfEngineering.jpg";
import CONF from "./img/CONFERENCEROOM.jpg";
import FCLTY1 from "./img/FACULTY.jpg";
import FCLTY2 from "./img/EN201B.jpg";



const EngAPI = {
  "College of Engineering Building": {
"floors": {
    "1": {
        "rooms": {
            /*Rooms-labs */
            "EN-102B": { "name": "Electrical Engineering Lab", "description": "A fully equipped laboratory where basic electrical principles are studied using circuit components, power supplies, and measuring instruments", "image": eeLab},

            "EN-102A": { "name": "Civil Engineering Lab 1", "description": "A fully equipped laboratory with soil testing equipment, fluid mechanics apparatus, and material testing instruments, designed for hands-on learning.", "image": ceLab1},

            "EN-101A": { "name": "Civil Engineering Lab 2", "description": "An advanced laboratory featuring concrete testing machines, structural analysis equipment, and transportation engineering tools, supporting practical experimentation.", "image": ceLab2},

            "EN-COM-LAB-1A": { "name": "Computer Engineering Lab 1", "description": "A modern laboratory with high-performance computers, programming software, and network facilities, providing a space for coding, simulations, and technical computing.", "image": comLab1},

            "EN-COM-LAB-1A": { "name": "Computer Engineering Lab 2", "description": "An advanced laboratory with high-speed computers, specialized software, and networking equipment for programming, data analysis, and system simulations.", "image": comLab2},

            "EN-ELE-LAB-1": { "name": "Electronics Lab", "description": "A fully equipped laboratory with oscilloscopes, signal generators, circuit boards, and soldering stations for studying electronic components and circuit design.", "image": elecLab},

            "101": { "name": "Engineering Lecture Room 1", "description": "A spacious and well-lit room with comfortable seating, a projector, a whiteboard, and an audio system for effective teaching and learning.", "image":ENlecLab1},

            "102": { "name": "Engineering Lecture Room 2", "description": "A spacious and well-lit room with comfortable seating, a projector, a whiteboard, and an audio system for effective teaching and learning.", "image": ENlecLab2 },

             /*BathRooms */
            "FEb1": { "name": "Female's Bathroom", "description": "Women's & Person with disabilities' bathroom 1", "image": feCR1},
            "FEb2": { "name": "Female's Bathroom", "description": "Women's & Person with disabilities' bathroom 1", "image": feCR2},

             /*study area*/
            "SA1": { "name": "Study Area: Red Tables", "description": "A dedicated study space featuring red tables, comfortable seating, and a quiet environment for focused learning and collaboration.", "image": RTBL},

            /*Storage Room */
            "STRG1": { "name": "Storage room 1", "description": "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.", "image": strgRM1},

            "STRG2": { "name": "Storage room 2", "description": "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.", "image": strgRM2},

            "EE/ECE1": { "name": "EE/ECE Room", "description": "A secure and organized space with shelves, bins, and cabinets for storing electronic components, circuit boards, tools, and testing equipment.", "image": EECroom},
            
            /*first floor stairs*/
            "Stair1": { "name": "Stair 1", "description": "First floor, right stair to Second floor", "image": stair1},
            "Stair2": { "name": "Stair 2", "description": "First floor, left stair to Second floor", "image": stair2},
             /*first floor ramps*/
             "Ramp1": { "name": "Ramp 1", "description": "First floor, Ramp for PWD near Civil and Engineering Lab", "image": ramp1},
             "Ramp2": { "name": "Ramp 2", "description": "First floor, Ramp for PWD near near Fablab", "image": ramp2},
             /*first floor fire exit*/
             "frExit": { "name": "Fire Exit", "description": "First floor, Fire Exit near Computer Laboratory", "image": frExit},
        }
    },
    "2": {
        "rooms": {
            "COE-D": { "name": "COE Dean's Office/Conference room", "description": "The COE Dean's Office is a central administrative space where students, faculty, and staff can seek academic guidance, administrative support, and college-related services.", "image": [COED, CONF]},

            "EN-202A": { "name": "Faculty Office 1", "description": "Dedicated space where engineering faculty members conduct academic work, collaborate on research, and engage in administrative tasks to support the college’s educational mission.", "image": FCLTY1},

            "EN-201B": { "name": "Faculty Office 2", "description": "Dedicated space where engineering faculty members conduct academic work, collaborate on research, and engage in administrative tasks to support the college’s educational mission.", "image": FCLTY2},

            /*Comfort rooms */
        
        }
    },
    "3": {
        "rooms": {
            "301": { "name": "Faculty Office", "description": "Professors' workspaces and consultation rooms." },
            "302": { "name": "Thesis Room", "description": "Reserved for final-year engineering students’ projects." }
        }
    }
}
},
}

