import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Login/Login.module.css"; 

const Signup = ({ onToggleAuth }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Signup request sent!");
    };

    return (
        <div className={styles.pageWrapper}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={5} xl={4}>
                        <Card className={`p-4 ${styles.authCard}`}>
                            <h3 className={`text-center mb-4 ${styles.pageTitle}`}>Join Our Community</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.inputLabel}>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your full name" className={styles.formInput} name="fullName" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.inputLabel}>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="name@domain.com" className={styles.formInput} name="email" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.inputLabel}>Create Password</Form.Label>
                                    <Form.Control type="password" placeholder="Minimum 6 characters" className={styles.formInput} name="password" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.inputLabel}>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Re-enter your password" className={styles.formInput} name="confirmPassword" required />
                                </Form.Group>

                                <Form.Check type="checkbox" label="I agree to the privacy policy & terms" className={`${styles.customCheckbox} mb-4`} required />

                                <Button type="submit" className={`w-100 ${styles.submitBtn}`} data-testid="signup-button">
                                    Register Account
                                </Button>

                                <div className="text-center mt-4">
                                    <small>
                                        Already a member?{" "}
                                        <span className={styles.authLink} onClick={onToggleAuth} style={{ cursor: "pointer" }}>
                                            Log in here
                                        </span>
                                    </small>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;
