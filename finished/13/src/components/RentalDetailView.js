import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  staying: {
    id: 'rentalDetailView.staying',
    defaultMessage: 'Here is where you will be staying:'
  }
});

const RentalDetailView = ({ detail }) => (
  <div>
    Detail: {detail.get('name')}

    <FormattedMessage {...messages.staying} />
    <img src={detail.get('picture_url')} alt="detail location" />
  </div>
);

RentalDetailView.propTypes = {
  detail: React.PropTypes.object
};

export default RentalDetailView;
