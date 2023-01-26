import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from 'components';
import { BoardContacts, ContactsItem } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <BoardContacts>
      {visibleContacts.map(item => {
        return (
          <ContactsItem key={item.id}>
            <Contact contact={item}></Contact>
          </ContactsItem>
        );
      })}
    </BoardContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
