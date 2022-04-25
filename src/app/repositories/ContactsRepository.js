const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Irineu Campos',
    email: 'irineu@email.com',
    phone: '917546612181',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'jose@email.com',
    phone: '53215120351',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
