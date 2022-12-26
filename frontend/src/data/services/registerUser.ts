import axios from 'axios';

import { IUserInput } from '~/utils/types';

export const registerUser = async (user: IUserInput) => {

    const response = await axios.post('http://localhost:8000/api/user/', user)
    return response.data
}
