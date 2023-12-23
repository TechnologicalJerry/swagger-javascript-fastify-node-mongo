

const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: Item,
        },
      },
    },
    handler: getItems,
  }