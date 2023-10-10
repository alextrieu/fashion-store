export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand Name',
    },
    {
      name: 'imageLink',
      type: 'url',
      title: 'Image Link',
    },
    {
      name: 'storageOptions',
      type: 'array',
      title: 'Storage Options',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'storageSize',
              type: 'string',
              title: 'Storage Size',
              options: {
                list: [
                  {title: '64GB', value: '64GB'},
                  {title: '128GB', value: '128GB'},
                ],
              },
            },
            {
              name: 'price',
              type: 'number',
              title: 'Price',
            },
          ],
        },
      ],
    },
    {
      name: 'colorAvailability',
      type: 'array',
      title: 'Color Availability',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'},
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tag Line',
    },
  ],
}
