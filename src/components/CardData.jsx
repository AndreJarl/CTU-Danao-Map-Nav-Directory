
import coefront from "../assets/COEFront1.jpg";
import coefront1 from "../api/frontsBuilding/img/COEFront.jpg"
import ceasfront1 from "../api/frontsBuilding/img/CEASFront.jpg"
import ceasfront from "../assets/CEASFront.jpg";
import cemfront1 from "../api/frontsBuilding/img/CMEFront.jpg"
import cemfront from "../assets/CME_COEFront.jpg"
import adminfront from "../api/frontsBuilding/img/AdminFront.jpg"
import cotfront from "../api/frontsBuilding/img/COTFront.jpg"

const cardData = {
    'College of Engineering Building': {
        totalFloors: 3,
        img: coefront1
    },
     'CME/COE Building': {
       totalFloors: 4,
       img:cemfront1,
    },
    'Education Building': {
       totalFloors: 3,
       img: ceasfront1,
    },
    'Graduate School Building': 4,
    'Bistro': 1,
    'University Canteen': 1,
    'Stage': 1,
    'College of Technology/ COT Building': {
        totalFloors:3,
        img:cotfront
    },
    'Old Admin Building': 2,
    'New Admin Building': {
        totalFloors: 3,
        img: adminfront
    },
    'Student Activity Center': 1,
    'Fitness Gym': 1,
    'Sewing Area': 1,
    'Fablab': 1,
    'Tennis Court': 1,
    'Kadasig Gym': 1,
    'Oval': 1,
    'Grandstand': 1,
    'Study Area': 1,
    'Existing Academic Science Building': 1,
    'Cultural Center': 1,
    'Floating Classroom': 1,
    'CTU Facility Centrum': 2,
    'HM Laboratory': 1,
    'Mens Dorm': 1,
    'Women Dorm': 2,
    'Furniture Workshop': 1,
    'Security Office': 1,
    'ERRC Building': 2,
};

export default cardData;