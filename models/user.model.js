

const getUsersOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                user: Item,
            },
        },
    },
    handler: getUser,
}