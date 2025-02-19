import { PATH_DB } from '../constants/contacts.js';
import fs from 'node.fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeContacts(PATH_DB, 'uft-8');
  } catch (error) {
    console.error(error);
  }
};
