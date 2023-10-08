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
      name: 'imageLink',
      type: 'url',
      title: 'Image Link',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'storageAvailability',
      type: 'array',
      title: 'Storage Availability',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '64GB', value: '64GB'},
          {title: '128GB', value: '128GB'},
        ],
      },
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
