/* Floor 1 */
/*En room*/
import cme101 from "/img/CME1.jpg";
import cme102 from "/img/CME2.jpg";

/* comfort room*/
import feCR1 from "./img/LCR103.jpg";
/* others room*/
import RTBL from "./img/RTBL03.jpg";


/*Floor 2 */
import COED from "./img/CollegeOfEngineering.jpg";

/* comfort room*/
import meCR1 from "./img/Men'sRestroom.jpg";

/*Floor 3 */
import BSIE_Flipped from "./img/EN303B.jpg";

import feCR3 from "./img/Fe'sRestroom.jpg";



const EngAPI = {
  "College of Engineering Building": {
"floors": {
    "1": {
        "rooms": {
            /*Rooms-labs */
            "CME101": { "name": "CME101 lecture room", "description": "blavlallvlavlalvalva", "image": cme101},
            
             "CME102": { "name": "CME102 lecture room", "description": "blavlallvlavlalvalva", "image": cme102},
             /*BathRooms */
            "FE-CR-1": { "name": "Female's Bathroom", "description": "Women's & Person with disabilities' bathroom 1", "image": feCR1},
            "FE-CR-2": { "name": "Female's Bathroom", "description": "Women's & Person with disabilities' bathroom 1", "image": feCR2},

            

            /*Storage Room */
            "STORAGE-1": { "name": "Storage room 1", "description": "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.", "image": strgRM1},   
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

