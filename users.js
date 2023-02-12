import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();
const Users=[
    {
        firstName:"pallavi",
        lastName: "Doe",
        age:20
        
    },
    {
        firstName:" Mansi",
        lastName:'kama',
        age:20
    }
]

router.get('/', getUsers);
console.log(users);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;