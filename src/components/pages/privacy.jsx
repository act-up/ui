import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Container, Grid, Header } from 'semantic-ui-react';

const Privacy = () => (
  <div className='privacy'>
  <Grid padded>
      <Grid.Row>
          <Grid.Column width={5}>
              <Header as='h1' floated='right'>Privacy</Header>
          </Grid.Column>
          <Grid.Column width={8}>
              <p>We won't collect or store any of your data, or share your email address with anyone.</p>

              <p>We will aggregate usage statistics, such as how many letters are sent using our platform. However, none of this data will be connected to any of your personal information.</p>

              <Header as='h2'>Email List Subscriptions</Header>

              <p>If you choose to opt-in to our email list we will store your email, but we will never share this information with anyone. You can unsubscribe from our emails at any time. We use Sendinblue as our mailing list platform. If you <Link className='clickable_link' to='/subscribe'>subscribe</Link>, you acknowledge that the information you provided will be transferred to Sendinblue for processing in accordance with their <a target="_blank" rel="noopener noreferrer" className="clickable_link" href="https://www.sendinblue.com/legal/termsofuse/">terms of use</a>.
              </p>

              <p>We have implemented reCAPTCHA v3 on this site to validate subscriptions to our email list. If you subscribe to our emails, your use of reCAPTCHA v3 is subject to the <a className='clickable_link' target='_blank' rel="noopener noreferrer" href='https://www.google.com/policies/privacy/'>Google Privacy Policy</a> and <a className='clickable_link' target='_blank' rel="noopener noreferrer" href='https://www.google.com/policies/terms/'>Terms of Use</a>. reCAPTCHA will only be used to fight spam and abuse on this site.</p>





          </Grid.Column>
      </Grid.Row>
      <Grid.Row></Grid.Row>
  </Grid>

  </div>
);
export default Privacy;

const PrivacyMobile = () => (
  <div className='MobileContentPadding'>
    <Grid>

      <Header as='h1'>Privacy</Header>

      <p>We won't collect or store any of your data, or share your email address with anyone.</p>

      <p>We will aggregate usage statistics, such as how many letters are sent using our platform. However, none of this data will be connected to any of your personal information.</p>

      <Header as='h2'>Email List Subscriptions</Header>

      <p>If you choose to opt-in to our email list we will store your email, but we will never share this information with anyone. You can unsubscribe from our emails at any time. We use Sendinblue as our mailing list platform. If you <Link className='clickable_link' to='/subscribe'>subscribe</Link>, you acknowledge that the information you provided will be transferred to Sendinblue for processing in accordance with their <a target="_blank" className="clickable_link" href="https://www.sendinblue.com/legal/termsofuse/" rel='noopener noreferrer'>terms of use</a>.
      </p>

      <p>We have implemented reCAPTCHA v3 on this site to validate subscriptions to our email list. If you subscribe to our emails, your use of reCAPTCHA v3 is subject to the <a className='clickable_link' target='_blank' rel='noopener noreferrer' href='https://www.google.com/policies/privacy/'>Google Privacy Policy</a> and <a className='clickable_link' target='_blank'  rel='noopener noreferrer' href='https://www.google.com/policies/terms/'>Terms of Use</a>. reCAPTCHA will only be used to fight spam and abuse on this site.</p>

      </Grid>


  </div>
);

export {
    Privacy,
    PrivacyMobile,
}
