import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.lengty === 0) {
      console.log('Contacts list is empty!');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);
  } catch (error) {
    console.error('Remove last Contatc: ', error);
  }
};

removeLastContact();
