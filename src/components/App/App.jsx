import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Heading marginBottom="50px" textAlign="center">
        Phonebook
      </Heading>
      <Section>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </Container>
  );
};
