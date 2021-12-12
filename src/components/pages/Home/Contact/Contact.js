import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{'backgroundColor': '#fad062'}} className='contact-section py-5'>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h2>Let us handle your project, professionally</h2>
                        <p>With well written codes, we build  amazing apps for all <br/> platforms, mobile and web apps in genera</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className='p-2' type="email" placeholder="Email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className='p-2'  type="email" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control controlId="your message" as="textarea"  rows={8} />
                            </Form.Group>
                            <Button className='call-to-action-btn' variant='dark' type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;