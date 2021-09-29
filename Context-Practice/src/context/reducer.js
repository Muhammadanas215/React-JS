export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:{},
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123sss555',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: 'xse3sss555',
            role: 'student'
        },
    ]
}
export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "REGISTER_USER": {
               data.users = data.users.concat(action.payload)
               console.log(data.users)
                // return {
                //     ...state,
                //     user:usersClone
                // }
        }
        default:
            return state;

    }
}