import EngFloor1 from "../api/engineering/floors/EngFloor1";
import EngFloor2 from "../api/engineering/floors/EngFloor2";
import EngFloor3 from "../api/engineering/floors/EngFloor3";

const buildingFloors = {
    'College of Engineering Building': {
      totalFloors: 3, // Updated total floors
      floorImages: {
        1: <EngFloor1 />,
        2: <EngFloor2 />,
        3: <EngFloor3 />,
      }
    },
    'CME/COE Building': 4,
    'Education Building': 3,
    'Graduate School Building': 4,
    'Bistro': 1,
    'University Canteen': 1,
    'Stage': 1,
    'College of Technology/ COT Building': 2,
    'Old Admin Building': 2,
    'New Admin Building': 3,
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

export default buildingFloors;
