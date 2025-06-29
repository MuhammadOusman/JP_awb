import React from 'react';
import styles from './Testimonial.module.css';
import testimonialImg from '../../assets/images/testimonial.png';
import commaImg from '../../assets/images/comma.png';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonial = () => {
  const testimonialsData = [
    { id: 1, img: testimonialImg, name: 'Justin Case', designation: 'Student', review: 'Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.', rating: 4.9, reviewsCount: 14 },
    { id: 2, img: testimonialImg, name: 'Jane Doe', designation: 'Graduate', review: 'Fantastic platform for learning! The courses are well-structured and easy to follow. Highly recommend to anyone looking to expand their knowledge.', rating: 5.0, reviewsCount: 25 }
  ];
  return (
    <section className={`${styles.testimonialsSection} react-clients pt---90 pb---120`}>
      <div className="container">
        <div className="section-title"><h2>What our student saying</h2></div>
        <div className={styles.testimonialGrid}> {/* Using grid instead of slider */}
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className={styles.singleClient}>
              <div className={styles.clientBottom}><span className={styles.clientAuthor}><img src={testimonial.img} alt="Client" /></span></div>
              <div className={styles.clientContent}>
                <span className={styles.clientTitle}>{testimonial.name} <em> {testimonial.designation}</em></span>
                <p>{testimonial.review}</p>
                <div className={styles.ratings}>
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (<FaStar key={`full-${i}`} className={styles.starIcon} />))}
                  {testimonial.rating % 1 !== 0 && (<FaStarHalfAlt className={styles.starIcon} />)}
                  <span><em> {testimonial.rating}</em> ({testimonial.reviewsCount} Reviews)</span>
                </div>
                <img className={styles.comma} src={commaImg} alt="Comma" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonial;