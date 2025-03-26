import comLab from "./img/ENCLA3.jpg";

const EngFloorsData = {
  floors: [
    {
      floor: 1,
      rooms: [
        {
          roomNumber: "1",
          name: "Electrical Engineering Lab",
          description: "Serves as the front desk for visitors and inquiries. Includes a waiting area and an information counter.",
          image: comLab
        },
        {
          roomNumber: "2",
          name: "Civil Engineering Lab 1",
          description: "A fully equipped meeting room with a projector, whiteboard, and seating for 15 people.",
          image: comLab
        },
        {
          roomNumber: "3",
          name: "Civil Engineering Lab 2",
          description: "A fully equipped meeting room with a projector, whiteboard, and seating for 15 people.",
          image: comLab
        },
        {
          roomNumber: "4",
          name: "Computer Engineering Lab 1",
          description: "Office space for the IT department, equipped with multiple workstations and a server cabinet.",
          image: comLab
        },
        {
          roomNumber: "5",
          name: "Computer Engineering Lab 2",
          description: "Office space for the IT department, equipped with multiple workstations and a server cabinet.",
          image: comLab
        },
        {
          roomNumber: "6",
          name: "Electronics Lab",
          description: "Secured space for storing office supplies, equipment, and documents.",
          image: comLab
        },
        {
          roomNumber: "101",
          name: "Lecture Room 101",
          description: "Secured space for storing office supplies, equipment, and documents.",
          image: comLab
        },
        {
          roomNumber: "102",
          name: "Lecture Room 102",
          description: "Secured space for storing office supplies, equipment, and documents.",
          image: comLab
        }
      ],
      bathrooms: [
        {
          bathroomNumber: "B1",
          description: "Men's bathroom with two stalls and a sink.",
          image: "/images/rooms/bathroom_men.jpg"
        },
        {
          bathroomNumber: "B2",
          description: "Women's bathroom with two stalls and a sink.",
          image: "/images/rooms/bathroom_women.jpg"
        }
      ],
      studyarea: [
        {
          studyareaNumber: "SA1",
          name: "Red Tables",
          description: "lorem bahog tae",
          image: "/image/rooms/studyarea.jpg"
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
