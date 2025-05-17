/* Floor 1 */
import Clinic0 from "./img/Clinic0.jpg";
import Clinic1 from "./img/Clinic1.jpg";
import Clinic2 from "./img/Clinic2.jpg";
import Cashier0 from "./img/Cashier0.jpg";
import Cashier1 from "./img/Cashier1.jpg";
import Registrar0 from "./img/Registrar0.jpg";
import Registrar1 from "./img/Registrar1.jpg";
import MIS0 from "./img/MIS0.jpg";
import MIS1 from "./img/MIS1.jpg";
import MIS2 from "./img/MIS2.jpg";

/*Floor 2 */
import CDoffice0 from "./img/CampusDOffice0.jpg"
import CDoffice1 from "./img/CampusDOffice1.jpg"
import Admin0 from "./img/AdminOffice1.jpg"
import Admin1 from "./img/AdminOffice2.jpg"
import SA0 from "./img/2ndFloor-StudyArea0.jpg"
import SA1 from "./img/2ndFloor-StudyArea1.jpg"
import HRMO1 from "./img/HRMO.jpg"
import RA0 from "./img/Record&Archives0.jpg"
import RA1 from "./img/Record&Archives1.jpg"
import RA2 from "./img/Record&Archives2.jpg"
import SAO0 from "./img/SAO0.jpg"
import SAO1 from "./imgSAO1.jpg"

/*Floor 3 */
import library0 from "./img/Library.jpg"
import library1 from "./img/Library-Inside0.jpg"
import library2 from "./img/Library-Inside1.jpg"
import library3 from "./img/Library-Outside.jpg"



const EngAPI = {
  "College of Engineering Building": {
"floors": {
    "1": {
        "rooms": {
            /*Rooms-labs */
            "Clinic": { "name": "Campus Clinic - Health Services", "description": "Healthcare facility on campus that provides medical services, first aid, and health consultations to students, faculty, and staff. It is staffed by licensed medical professionals and equipped to handle minor illnesses, injuries, and emergency care, ensuring the well-being and safety of the school community.", "image": {Clinic0, Clinic1, Clinic2}},

            "Cashier": { "name": "Cashier's Office", "description": "Official payment center where students settle tuition fees, miscellaneous charges, and other school-related transactions. It ensures secure handling of payments and provides receipts and financial records for student accounts.", "image": {Cashier0, Cashier1}},

            "Registrar": { "name":"Registrar Office", "description": "Responsible for managing student records, enrollment, grades, transcripts, and other academic documentation. It serves as the central hub for academic registration, ensuring the integrity and accuracy of student information throughout their academic journey.", "image": {Registrar0, Registrar1}},

            "MIS": { "name":"MIS Office", "description": "Responsible for maintaining and supporting the school’s IT infrastructure, including networks, databases, and software systems. It ensures the smooth operation of digital services, provides technical assistance, and supports the technological needs of students, faculty, and staff.", "image": {MIS0,MIS1,MIS2}},
        }
    },
    "2": {
        "rooms": {
            "Director-Office": { "name": "Campus Director Office", "description": "Central leadership hub of the campus, overseeing overall operations, implementing policies, and ensuring that academic and administrative functions align with the institution’s goals. It is where key decisions are made to support student success, faculty development, and campus growth.", "image": {CDoffice0, CDoffice1}},     

            "Admin": { "name": "Admin Office", "description": "Admin Office manages the day-to-day administrative operations of the campus, handling personnel matters, facility management, supplies, and general services. It supports various departments to ensure efficient and organized campus functioning.", "image": {Admin0, Admin1}},        

            "SA": { "name": "Study Area 2nd Floor", "description": "A dedicated study space featuring red tables, comfortable seating, and a quiet environment for focused learning and collaboration.", "image": {SA0, SA1}},    
            
            
            "HRMO": { "name": "Human Resources Management Office", "description": "Overseeing employee relations, recruitment, benefits, and personnel records. It ensures that hiring, staff development, and workplace policies support the institution’s goals and provide a fair, professional environment for all employees.", "image": {HRMO1}},        

            "R&A": { "name": "Records and Archives Office", "description": "Safe storage, management, and retrieval of institutional documents and student records. It ensures the preservation, confidentiality, and proper organization of vital files for administrative, academic, and historical reference.", "image": {RA0, RA1, RA2}},     

            "SAO-SO": { "name": "Student Affairs Office and Scholarship Office", "description": "he Student Affairs Office supports student development by overseeing campus activities, student organizations, and welfare services, fostering a vibrant and inclusive campus life. The Scholarship Office manages the application, evaluation, and distribution of financial aid and scholarship programs, helping students access educational opportunities and reduce financial barriers.", "image": {SAO0, SAO1}},        
            
        }
    },
    "3": {
        "rooms": {
           "LIBRARY": { "name": "CTU-Danao Library", "description": "The Campus Library is the central academic resource hub of the school, offering a vast collection of books, journals, and digital materials to support learning and research. It provides a quiet, well-equipped space for individual study, group work, and access to online databases, helping students and faculty achieve their academic goals.", "image": {library0,library1,library2,library3}},     
        }
    }
}
},
}

