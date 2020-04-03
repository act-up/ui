import React from 'react';

// Semantic UI layout and styling
import { Grid, Header } from 'semantic-ui-react';

const Privacy = () => (
  <div className='privacy'>
  <Grid padded>
      <Grid.Row>
          <Grid.Column width={5}>
              <Header as='h1' floated='right'>Privacy</Header>
          </Grid.Column>
          <Grid.Column width={8}>
              <p>We won't store any of your data, or share your email address with anyone.</p>

              <p>We will track usage statistics, such as how many letters are sent using our platform. However,none of this data will be connected back to you.</p>
          </Grid.Column>
      </Grid.Row>
  </Grid>

  </div>
);

export default Privacy;
