

const getUsersOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' }
                    }
                },
            },
        },
    },
    handler: getUser,
}