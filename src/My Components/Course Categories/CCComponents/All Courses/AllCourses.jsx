import './AllCourses.css';
import EveryCourse from './EveryCourse';

const All_Courses_Data = [
  {
    id: 1,
    course_name: 'c1',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user1',
    price: 4000,
  },
  {
    id: 2,
    course_name: 'c2',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user2',
    price: 4000,
  },
  {
    id: 3,
    course_name: 'c3',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user3',
    price: 4000,
  },
  {
    id: 4,
    course_name: 'c4',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user4',
    price: 4000,
  },
  {
    id: 5,
    course_name: 'c5',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user5',
    price: 4000,
  },
  {
    id: 6,
    course_name: 'c6',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user6',
    price: 4000,
  },
  {
    id: 7,
    course_name: 'c7',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user7',
    price: 4000,
  },
  {
    id: 8,
    course_name: 'c8',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user8',
    price: 4000,
  },
  {
    id: 9,
    course_name: 'c9',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user9',
    price: 4000,
  },
  {
    id: 10,
    course_name: 'c10',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user10',
    price: 4000,
  },
  {
    id: 11,
    course_name: 'c11',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user11',
    price: 4000,
  },
  {
    id: 12,
    course_name: 'c12',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user12',
    price: 4000,
  },
  {
    id: 13,
    course_name: 'c13',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user13',
    price: 4000,
  },
  {
    id: 14,
    course_name: 'c14',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user14',
    price: 4000,
  },
  {
    id: 15,
    course_name: 'c15',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user15',
    price: 4000,
  },
  {
    id: 16,
    course_name: 'c16',
    course_link: 'http://codebysonu.com',
    course_img:
      'https://res.cloudinary.com/dlohsmjjy/image/upload/v1692138342/Ekalakaar/dancing-girl-in-white-cloths.png',
    posted_by: 'user16',
    price: 4000,
  },
];

const AllCourses = () => {
  for (var i = 0; i < 4; i++) {}
  return (
    <>
      <div id="AllCourses">
        <EveryCourse course={All_Courses_Data[0]} />
        <EveryCourse course={All_Courses_Data[1]} />
        <EveryCourse course={All_Courses_Data[2]} />
        <EveryCourse course={All_Courses_Data[3]} />
        <EveryCourse course={All_Courses_Data[4]} />
        <EveryCourse course={All_Courses_Data[5]} />
        <EveryCourse course={All_Courses_Data[6]} />
        <EveryCourse course={All_Courses_Data[7]} />
        <EveryCourse course={All_Courses_Data[8]} />
        <EveryCourse course={All_Courses_Data[9]} />
        <EveryCourse course={All_Courses_Data[10]} />
        <EveryCourse course={All_Courses_Data[11]} />
        <EveryCourse course={All_Courses_Data[12]} />
        <EveryCourse course={All_Courses_Data[13]} />
        <EveryCourse course={All_Courses_Data[14]} />
        <EveryCourse course={All_Courses_Data[15]} />

        {/* multipages */}
      </div>
      <div id="multiple-pages">
        <div id="back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="23px" viewBox="0 0 14 23" fill="none" >
            <path d="M12.5 1L2 11.5L12.5 22" stroke="black" strokeWidth="2" />
          </svg>
        </div>
        <div id="page-number-box">
          <div className="page-number">1</div>
          {/* <div className="page-number">2</div> */}
          {/* <div className="page-number">3</div> */}
        </div>
        <div id="next-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="23px" viewBox="0 0 14 23" fill="none" >
            <path d="M1 1L11.5 11.5L1 22" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
