const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Irineu Campos',
    email: 'irineu@email.com',
    phone: '917546612181',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
