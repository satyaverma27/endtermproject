import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Satya Verma',
    email: 'satya@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anayra Srivastava',
    email: 'anayra@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Vihaan Sinha',
    email: 'vihaan@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Emly Dsouza',
    email: 'emly@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ashraf khan',
    email: 'ashraf@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
