import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeContacts(contacts);
  } catch (error) {
    console.error('Generate Contacts: ', error);
  }
};

generateContacts(5);

// import { createFakeContact } from '../utils/createFakeContact';
// import { readContacts } from '../utils/readContacts';
// import { writeContacts } from '../utils/writeContacts';

// const generateContacts = async (number) => {
//   try {
//     const contacts = await readContacts();
//     let newContacts = [];
//     for (let i = 0; i < number; i++) {
//       contacts.push(createFakeContact());
//     }
//     const updatedContacts = [...contacts, ...newContacts];
//     await writeContacts(updatedContacts);
//   } catch (error) {
//     console.error(error);
//   }
// };

// generateContacts(5);
