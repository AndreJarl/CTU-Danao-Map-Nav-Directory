/*FLOOR 1*/

/*En room*/
import eeLab from "./img/EELAB03.jpg";
import ceLab1 from "./imgCELAB01.jpg";
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






const EngFloorsData = {
  floors: [
    {
      floor: 1,
      rooms: [
        {
          roomNumber: "EN-102B",
          name: "Electrical Engineering Lab",
          description: "A fully equipped laboratory where basic electrical principles are studied using circuit components, power supplies, and measuring instruments",
          image: eeLab
        },
        {
          roomNumber: "EN-102A",
          name: "Civil Engineering Lab 1",
          description: "A fully equipped laboratory with soil testing equipment, fluid mechanics apparatus, and material testing instruments, designed for hands-on learning.",
          image: ceLab1
        },
        {
          roomNumber: "EN-101A",
          name: "Civil Engineering Lab 2",
          description: "An advanced laboratory featuring concrete testing machines, structural analysis equipment, and transportation engineering tools, supporting practical experimentation.",
          image: ceLab2
        },
        {
          roomNumber: "EN-COM-LAB-1A",
          name: "Computer Engineering Lab 1",
          description: "A modern laboratory with high-performance computers, programming software, and network facilities, providing a space for coding, simulations, and technical computing.",
          image: comLab1
        },
        {
          roomNumber: "EN-COM-LAB-2A",
          name: "Computer Engineering Lab 2",
          description: "An advanced laboratory with high-speed computers, specialized software, and networking equipment for programming, data analysis, and system simulations.",
          image: comLab2
        },
        {
          roomNumber: "EN-ELE-LAB-1",
          name: "Electronics Lab",
          description: "A fully equipped laboratory with oscilloscopes, signal generators, circuit boards, and soldering stations for studying electronic components and circuit design.",
          image: elecLab
        },
        {
          roomNumber: "101",
          name: "Engineering Lecture Room 101",
          description: " A spacious and well-lit room with comfortable seating, a projector, a whiteboard, and an audio system for effective teaching and learning.",
          image: ENlecLab1
        },
        {
          roomNumber: "102",
          name: "Engineering Lecture Room 102",
          description: "S A spacious and well-lit room with comfortable seating, a projector, a whiteboard, and an audio system for effective teaching and learning.",
          image: ENlecLab2
        }
      ],
      bathrooms: [
        {
          bathroomNumber: "FE1",
          description: "Women's & Person with disabilities' bathroom 1",
          image: feCR1
        },
        {
          bathroomNumber: "FE2",
          description: "Women's & Person with disabilities' bathroom 2",
          image: feCR2
        }
      ],
      studyarea: [
        {
          studyareaNumber: "SA1",
          name: "Red Tables",
          description: "A dedicated study space featuring red tables, comfortable seating, and a quiet environment for focused learning and collaboration.",
          image: RTBL
        }
      ],
      storageRoom: [
        {
          storageRoomNumber: "STRG1",
          name: "Storage room 1",
          description: "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.",
          image: strgRM1
        },
        {
          storageRoomNumber: "STRG2",
          name: "Storage room 2",
          description: "A secure and organized space with shelves, cabinets, and storage racks for keeping equipment, supplies, and materials safely stored.",
          image: strgRM2
        }
      ],
      ElectronicsRoom: [
        {
          studyareaNumber: "EE/ECE 1 ",
          name: "EE/ECE Room",
          description: " A secure and organized space with shelves, bins, and cabinets for storing electronic components, circuit boards, tools, and testing equipment.",
          image: EECroom
        }
      ]
    },
    {
      floor: 2,
      rooms: [
        {
          roomNumber: "1",
          name: "Dean's Office",
          description: "Private office for the building manager, including a desk, sofa, and bookshelves.",
          image: "/images/rooms/manager_office.jpg"
        },
        {
          roomNumber: "2",
          name: "Engineering Faculty Office 1",
          description: "Office space for the HR team, responsible for recruitment and employee relations.",
          image: "/images/rooms/hr_office.jpg"
        },
        {
          roomNumber: "3",
          name: "Engineering Faculty Office 2",
          description: "Office space for the HR team, responsible for recruitment and employee relations.",
          image: "/images/rooms/hr_office.jpg"
        },
        {
          roomNumber: "3",
          name: "CME Faculty Office 1",
          description: "Office space for the HR team, responsible for recruitment and employee relations.",
          image: "/images/rooms/hr_office.jpg"
        },
        {
          roomNumber: "4",
          name: "CME Lab 1",
          description: "A relaxing space for employees with a kitchenette, coffee machine, and seating area.",
          image: "/images/rooms/break_room.jpg"
        },
        {
          roomNumber: "204",
          name: "Training Room",
          description: "A learning space equipped with a projector, whiteboard, and desks for training sessions.",
          image: "/images/rooms/training_room.jpg"
        }
      ],
      bathrooms: [
        {
          bathroomNumber: "B3",
          description: "Unisex bathroom with two stalls and a sink.",
          image: "/images/rooms/bathroom_unisex.jpg"
        },
        {
          bathroomNumber: "B4",
          description: "Unisex bathroom with two stalls and a sink.",
          image: "/images/rooms/bathroom_unisex.jpg"
        }
      ]
    },
    {
      floor: 3,
      rooms: [
        {
          roomNumber: "301",
          name: "Executive Office",
          description: "A spacious office for the company executive, featuring a large desk, meeting table, and lounge area.",
          image: "/images/rooms/executive_office.jpg"
        },
        {
          roomNumber: "302",
          name: "Accounting Office",
          description: "Office space for the finance and accounting team, with multiple workstations and filing cabinets.",
          image: "/images/rooms/accounting_office.jpg"
        },
        {
          roomNumber: "303",
          name: "Server Room",
          description: "A climate-controlled room housing the building’s main servers and networking equipment.",
          image: "/images/rooms/server_room.jpg"
        },
        {
          roomNumber: "304",
          name: "Lounge Area",
          description: "A comfortable space for employees and visitors to relax, with sofas and reading materials.",
          image: "/images/rooms/lounge_area.jpg"
        }
      ],
      bathrooms: [
        {
          bathroomNumber: "B5",
          description: "Men's bathroom with two stalls and a sink.",
          image: "/images/rooms/bathroom_men.jpg"
        },
        {
          bathroomNumber: "B6",
          description: "Women's bathroom with two stalls and a sink.",
          image: "/images/rooms/bathroom_women.jpg"
        }
      ]
    }
  ]
};

export default EngFloorsData;
