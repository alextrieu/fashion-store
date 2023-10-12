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
      name: 'basePrice',
      type: 'number',
      title: 'Base Price',
    },
    {
      name: 'variants',
      type: 'array',
      title: 'Variants',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'color',
              type: 'string',
              title: 'Color',
              options: {
                list: [
                  {title: 'Black', value: 'black'},
                  {title: 'White', value: 'white'},
                  {title: 'Green', value: 'green'},
                  // ... other colors ...
                ],
              },
            },
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
            {
              name: 'imageLinks',
              type: 'array',
              title: 'Image Links',
              of: [{type: 'url'}],
            },
          ],
        },
      ],
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
    {
      name: 'details',
      type: 'string',
      title: 'Details',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'object',
          title: 'Feature',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
            },
            {
              name: 'featureDescription',
              type: 'object',
              title: 'Feature Description',
              fields: [
                {
                  name: 'part1',
                  type: 'string',
                  title: 'Part 1',
                },
                {
                  name: 'part2',
                  type: 'string',
                  title: 'Part 2',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      of: [
        {
          type: 'object',
          title: 'Review',
          fields: [
            {
              name: 'id',
              type: 'number',
              title: 'Id',
            },
            {
              name: 'reviewerName',
              type: 'string',
              title: 'Reviewer Name',
            },
            {
              name: 'rating',
              type: 'number',
              title: 'Rating',
              validation: (Rule: any) => Rule.min(1).max(5),
            },
            {
              name: 'comment',
              type: 'text',
              title: 'Comment',
            },
          ],
        },
      ],
    },
  ],
}
