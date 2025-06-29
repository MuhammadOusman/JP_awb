import React from 'react';
import styles from './NewsAndBlogs.module.css';
import BlogCard from './BlogCard/BlogCard';
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';

const NewsAndBlogs = () => {
  const blogPosts = [
    { id: 1, img: blog1, date: 'April 18', category: 'Education', title: 'Kids future Schools & Corona Prevent to Growth', author: 'Charlie Doyle' },
    { id: 2, img: blog2, date: 'April 18', category: 'Education', title: 'Echooling future Schools & social Innovation', author: 'Charlie Doyle' },
    { id: 3, img: blog3, date: 'April 18', category: 'Education', title: '7 Learning system design tips For better eLearning', author: 'Charlie Doyle' },
    { id: 4, img: blog1, date: 'April 18', category: 'Education', title: 'Why schools should continue remote study', author: 'Charlie Doyle' },
  ];
  return (
    <section className={`${styles.newsAndBlogs} pt---120 pb---120 graybg-home`}>
      <div className="container">
        <div className="section-title"><h2>Echooling News and Blogs</h2></div>
        <div className={styles.blogGrid}>
          {blogPosts.map(post => (<BlogCard key={post.id} img={post.img} date={post.date} category={post.category} title={post.title} author={post.author} />))}
        </div>
      </div>
    </section>
  );
};
export default NewsAndBlogs;