import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

export const App = () => {
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
        <ContactList />
      </Section>
    </Container>
  );
};
