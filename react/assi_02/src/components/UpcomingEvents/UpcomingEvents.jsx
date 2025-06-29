import React from 'react';
import EventCard from './EventCard/EventCard';
import styles from './UpcomingEvents.module.css';

const UpcomingEvents = () => {
  const eventsData = [
    { id: 1, day: '10', month: 'January', year: '2022', time: '10:30AM - 12:00PM', title: 'A Better Alternative To Grading Student Writing', location: 'New York, USA' },
    { id: 2, day: '14', month: 'April', year: '2022', time: '12:00PM - 01:30PM', title: '12 Things Successful Mompreneurs', location: 'New York, USA' },
    { id: 3, day: '26', month: 'March', year: '2022', time: '01:30PM - 02:30PM', title: 'Ethics in AI Live Event Machines Judging.', location: 'New York, USA' },
    { id: 4, day: '10', month: 'April', year: '2022', time: '03:00PM - 04:30PM', title: 'The Importance Of Intrinsic Motivation.', location: 'New York, USA' },
    { id: 5, day: '10', month: 'May', year: '2022', time: '10:30AM - 12:30PM', title: 'A Better Alternative To Grading Student Writing', location: 'New York, USA' },
    { id: 6, day: '14', month: 'April', year: '2022', time: '12:00PM - 01:30PM', title: '12 Things Successful Mompreneurs', location: 'New York, USA' },
  ];
  return (
    <section className={`${styles.upcomingEvents} blog__area`}>
      <div className="container">
        <div className="section-title"><h2>Upcoming Events</h2></div>
        <div className={styles.eventGrid}> {/* Using grid instead of slider */}
          {eventsData.map(event => (<EventCard key={event.id} day={event.day} month={event.month} year={event.year} time={event.time} title={event.title} location={event.location} />))}
        </div>
        {/* Dots for static grid would be manual if needed, but not common for non-slider */}
      </div>
    </section>
  );
};
export default UpcomingEvents;