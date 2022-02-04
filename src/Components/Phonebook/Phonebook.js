// import { useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import styled from 'styled-components';
// import data from '../../data/contacts.json';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
// import * as actions from '../../redux/contacts/contacts-action';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: venter;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: center;
`;

const SubHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

export default function Phonebook() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.items);
  // const filter = useSelector(state => state.filter);

  // const changeFilter = event => {
  //   dispatch(actions.filterContact(event.target.value));
  // };

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   dispatch(actions.addContact(contact));
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const deleteContact = event => {
  //   dispatch(
  //     actions.deleteContact(
  //       contacts.filter(
  //         element =>
  //           element.name !==
  //           event.target.parentNode.childNodes[2].nodeValue.trim(),
  //       ),
  //     ),
  //   );
  //   dispatch(actions.filterContact(''));
  // };

  // const normalizedFilter = useMemo(() => filter.toLowerCase(), [filter]);

  // const getCurrentPhonebook = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter.trim()),
  //   );
  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const contactList = normalizedFilter ? getCurrentPhonebook() : contacts;

  return (
    <Wrapper>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <SubHeading>Contacts</SubHeading>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
