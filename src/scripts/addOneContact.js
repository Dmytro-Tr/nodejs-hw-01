import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const newContact = createFakeContact();
    data.push(newContact);
    await writeContacts(data);
  } catch (error) {
    console.error('Add Contacts: ', error);
  }
};

addOneContact();
