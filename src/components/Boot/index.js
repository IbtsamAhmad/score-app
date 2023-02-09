import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

const About = (props) => {
    return (
        <>
        <Container>
          <h1>This is a form</h1>
          <Row>
            <Col lg={4}>
              <p>
                <strong>design more and troubleshoot less.</strong>
              </p>
            </Col>
            <Col lg={8}>
              <Form
                action="https://app.convertkit.com/forms/4843495/subscriptions"
                className="seva-form formkit-form"
                method="post"
                data-sv-form="4843495"
                data-uid="4843495"
                data-format="inline"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                min-width="400 500 600 700 800"
              >
 
                <Form.Group as={Col} lg={4}>
                    <Form.Control
                        required
                        aria-label="Your first name"
                        name="fields[first_name]" 
                        placeholder="Your first name" 
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} lg={5}>
                    <Form.Control
                        required
                        name="email_address" 
                        aria-label="Your email address" 
                        placeholder="Your email address"
                        type="email"
                    />
                </Form.Group>
                <Form.Group as={Col} lg={3}>
                    <Button data-element="submit" variant="outline-primary" type="submit">Subscribe Now!</Button>
                </Form.Group>
      
                 
              </Form>
            </Col>
          </Row>
        </Container>
      </>

    )
}

export default About;
