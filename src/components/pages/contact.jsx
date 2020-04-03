import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Grid, Header, Form, Input, TextArea, Button } from 'semantic-ui-react';

const Contact = () => (
  <div className='contact'>

      <Grid padded>
          <Grid.Row>
              <Grid.Column width={5}>
                  <Header as='h1' floated='right'>Contact Us</Header>
              </Grid.Column>
              <Grid.Column width={8}>
                  <p>Questions? Comments? Please use the form below to contact us.</p>
                  <p>Please don't use this form to suggest a new issue campaign. Please use the button at the top of the page or <Link to='/suggestions'>click here</Link>.</p>

                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                      />
                      <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                      />
                    </Form.Group>
                    <Form.Field
                      id='form-textarea-control-message'
                      control={TextArea}
                      label='Message'
                      placeholder='Message'
                    />
                    <Form.Field
                      id='form-input-control-email'
                      control={Input}
                      label='Email'
                      placeholder='joe@schmoe.com'
                    />
                    <Form.Field
                      id='form-button-control-public'
                      control={Button}
                      content='Send'
                    />
                  </Form>

              </Grid.Column>
          </Grid.Row>
      </Grid>


  </div>
);

export default Contact;
