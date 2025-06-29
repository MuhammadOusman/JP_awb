import React from 'react';
import styles from './PopularCourses.module.css';
import CourseCard from './CourseCard/CourseCard';
import course1 from '../../assets/images/course-1.png';
import course2 from '../../assets/images/course-2.png';
import course3 from '../../assets/images/course-3.png';
import course4 from '../../assets/images/course-4.png';
import { FaArrowRight } from 'react-icons/fa';

const PopularCourses = () => {
  const coursesData = [
    { id: 1, img: course1, category: 'UX Design', lessons: 5, title: 'Dave conservatoire is the Entirely free online', students: 56, price: '72.00' },
    { id: 2, img: course2, category: 'UX Design', lessons: 4, title: 'Strategy law and Organization foundation', students: 77, price: '68.00' },
    { id: 3, img: course3, category: 'UX Design', lessons: 4, title: 'Python for Data Science & Machine Learning', students: 77, price: '68.00' },
    { id: 4, img: course4, category: 'UX Design', lessons: 4, title: 'The complete web develop Ment bootcamp.', students: 77, price: '68.00' },
  ];
  return (
    <section className={`${styles.popularCourses} pt---100 pb---100`}>
      <div className="container">
        <div className="section-title"><h2>Popular Courses</h2></div>
        <div className={styles.courseGrid}>
          {coursesData.map(course => (<CourseCard key={course.id} img={course.img} category={course.category} lessons={course.lessons} title={course.title} students={course.students} price={course.price} />))}
        </div>
        <div className={styles.viewAllCourses}>
          <a className="react-btn-common" href="/course">View All Courses <FaArrowRight style={{ marginLeft: '8px' }} /></a>
        </div>
      </div>
    </section>
  );
};
export default PopularCourses;