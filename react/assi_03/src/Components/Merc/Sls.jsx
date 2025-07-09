import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./Sls.module.css";

function Sls({ img, title, price, desc, category, count }) {
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Card className={styles.card}>
      <div className={styles.badge}>Flash Sale</div>
      <Card.Img variant="top" src={img} className={styles.image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text className={styles.desc}>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className={styles.listItem}>Category: {formattedCategory}</ListGroup.Item>
        <ListGroup.Item className={styles.listItem}>{count} pieces available</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <span className={styles.price}>Rs. {price}</span>
      </Card.Body>
    </Card>
  );
}

export default Sls;
