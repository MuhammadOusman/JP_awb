import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Login.module.css";

const Login = ({ onToggleAuth }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login attempt initiated!");
    };

    return (
        <div className={styles.pageWrapper}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={5} xl={4}>
                        <Card className={`p-4 ${styles.authCard}`}>
                            <h3 className={`text-center mb-4 ${styles.pageTitle}`}>Welcome Back!</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.inputLabel}>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="e.g., user@example.com" className={styles.formInput} name="email" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.inputLabel}>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" className={styles.formInput} name="password" required />
                                </Form.Group>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Form.Check type="checkbox" label="Remember me" className={styles.customCheckbox} />
                                    <a href="#" className={styles.authLink}>Lost your password?</a>
                                </div>

                                <Button type="submit" className={`w-100 ${styles.submitBtn}`} data-testid="login-button">
                                    Sign In Securely
                                </Button>

                                <div className="text-center mt-4">
                                    <small>
                                        New here?{" "}
                                        <span className={styles.authLink} onClick={onToggleAuth} style={{ cursor: "pointer" }}>
                                            Create an account
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

export default Login;
