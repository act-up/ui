import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Grid, Header, Form, Input, TextArea, Button, Container } from 'semantic-ui-react';

const ContactForm = () => {
    return (
        <div>
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
        </div>
    )
};

const Contact = () => (
  <div className='contact'>

      <Grid padded>
          <Grid.Row>
              <Grid.Column width={5}>
                  <Header as='h1' floated='right'>Contact Us</Header>
              </Grid.Column>
              <Grid.Column width={8}>

                <p>Questions? Comments? Concerns? We will have a contact form up on this page soon, but in the meantime please send us an email at act [dot] up [dot] advocacy [at] gmail.com.</p>

                  {/*<p> Please use the form below to contact us.</p>
                  <p>Please don't use this form to suggest a new issue campaign. Please use the button at the top of the page or <Link class='clickable_link' to='/suggestions'>click here</Link>.</p>

                  */}

              </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
      </Grid>


  </div>
);
export default Contact;


const ContactMobile = () => {
    return (

        <div className='MobileContentPadding'>
            <Grid >
                <Header as='h1'>Contact Us</Header>
                <p>Questions? Comments? Concerns? We will have a contact form up on this page soon, but in the meantime please send us an email at act [dot] up [dot] advocacy [at] gmail.com.</p>
            </Grid>
        </div>


    );
};



export {
    Contact,
    ContactMobile,
}
