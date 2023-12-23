

const getUsersOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                user: {
                    type: 'object',
                    properties: {
                        id: {},
                        name: {}
                    }
                },
            },
        },
    },
    handler: getUser,
}