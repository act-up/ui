import React from 'react';

// Semantic UI layout and styling
import { Grid, Header, Form, Input, TextArea, Button, Select } from 'semantic-ui-react';

const Suggestions = () => (
    <div className='suggestions'>
    <Grid padded>
        <Grid.Row>
          <Grid.Column width={5}>
              <Header as='h1' floated='right'>Suggest a New Issue</Header>
          </Grid.Column>
          <Grid.Column width={8}>

              <p>Got an issue in mind? Submit it here! Our team will research the issue and put together a new campaign. We will contact you when the new campaign is live on our site.</p>

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

export default Suggestions;
