import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { ContactText, ButtonDelete, ContactsBox } from './Contact.styled';

export const Contact = ({ contact: { id, name, phone } }) => {
  console.log(phone);
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactsBox>
      <ContactText>
        {name}: {phone}
      </ContactText>
      <ButtonDelete onClick={onDelete}>Delete</ButtonDelete>
    </ContactsBox>
  );
};

Contact.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  }),
};
