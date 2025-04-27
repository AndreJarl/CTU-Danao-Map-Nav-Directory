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


/* comfort room*/
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
import CHAIROFFICE from "./img/CHAOROFFICE.jpg";
import EN202A from "./img/EN202A.jpg";
import FCLTY2 from "./img/EN201B.jpg";
import EN201A from "./img/EN201A.jpg";

/* comfort room*/
import meCR1 from "./img/Men'sRestroom.jpg";

/*Floor 3 */
import BSIE_Flipped from "./img/EN303B.jpg";
import BSIE_Com_Lab from "./img/EN302B.jpg";
import BSIE_Lab from "./img/EN301B.jpg";

/* comfort room*/
import feCR3 from "./img/Fe'sRestroom.jpg";



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
            "FE-CR-1": { "name": "Female's Bathroom", "description": "Women's & Person with disabilities' bathroom 1", "image": feCR1},
            "FE-CR-2": { "name": "Female's Bathroom", "description": "Women's & Person with disabilities' bathroom 1", "image": feCR2},

             /*study area*/
            "SA-1": { "name": "Study Area: Red Tables", "description": "A dedicated study space featuring red tables, comfortable seating, and a quiet environment for focused learning and collaboration.", "image": RTBL},

            /*Storage Room */
            "STORAGE-1": { "name": "Storage room 1", "description": "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.", "image": strgRM1},

            "STORAGE-2": { "name": "Storage room 2", "description": "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.", "image": strgRM2},

            "EE/ECE1": { "name": "EE/ECE Room", "description": "A secure and organized space with shelves, bins, and cabinets for storing electronic components, circuit boards, tools, and testing equipment.", "image": EECroom},
            
            /*first floor stairs*/
            "Stair-1": { "name": "Stair 1", "description": "First floor, right stair to Second floor", "image": stair1},
            "Stair-2": { "name": "Stair 2", "description": "First floor, left stair to Second floor", "image": stair2},
             /*first floor ramps*/
             "Ramp-1": { "name": "Ramp 1", "description": "First floor, Ramp for PWD near Civil and Engineering Lab", "image": ramp1},
             "Ramp-2": { "name": "Ramp 2", "description": "First floor, Ramp for PWD near near Fablab", "image": ramp2},
             /*first floor fire exit*/
             "Fire-Exit": { "name": "Fire Exit", "description": "First floor, Fire Exit near Computer Laboratory", "image": frExit},
        }
    },
    "2": {
        "rooms": {
            "COE-D": { "name": "COE Dean's Office", "description": "The COE Dean's Office is a central administrative space where students, faculty, and staff can seek academic guidance, administrative support, and college-related services.", "image": COED},

            "COE-C": { "name": "Conference room", "description": "The COE Dean's Office is a central administrative space where students, faculty, and staff can seek academic guidance, administrative support, and college-related services.", "image": CONF},

            "EN-202A": { "name": "Chairman's Office", "description": "The Chairman’s Office is the executive workspace where the department chair oversees academic strategy, faculty affairs, and day‑to‑day administration of the department.", "image": [CHAIROFFICE, EN202A]},

            "EN-201B": { "name": "Faculty Office", "description": "Dedicated space where engineering faculty members conduct academic work, collaborate on research, and engage in administrative tasks to support the college’s educational mission.", "image": [FCLTY2, EN201A]},

            /*Comfort rooms */
            "ME-CR-1": { "name": "Men's Bathroom", "description": "Men's & Person with disabilities' bathroom 1", "image": meCR1},            
            
        }
    },
    "3": {
        "rooms": {
           "EN-303": { "name": "BSIE-Flipped Room", "description": "The BSIE-Flipped Room is a specially designed learning environment for Industrial Engineering students, promoting a student-centered approach where lectures are minimized in favor of active, collaborative activities. It encourages teamwork, critical thinking, and hands-on problem-solving, allowing students to engage more deeply with course materials through discussions, projects, and real-world applications.", "image": BSIE_Flipped},
           "EN-302": { "name": "BSIE-Computer Laboratory", "description": "The BSIE Computer Lab is a dedicated facility equipped with specialized software and high-performance computers to support Industrial Engineering students in data analysis, simulations, design projects, and research activities. It provides a practical environment where students can apply theoretical concepts, develop technical skills, and work on academic and industry-related projects.", "image": BSIE_Com_Lab},
           "EN-301": { "name": "BSIE-Laboratory", "description": "The BSIE Laboratory is a hands-on learning space where Industrial Engineering students conduct experiments, practice industrial processes, and apply engineering principles to real-world scenarios. It supports skill development in areas like work measurement, ergonomics, production systems, and quality control, bridging the gap between theory and practical application.", "image":  BSIE_Lab},

           /* comfort room*/
           "FE-CR-3": { "name": "Men's Bathroom", "description": "Men's & Person with disabilities' bathroom 1", "image": feCR3},      

        }
    }
}
},
}

