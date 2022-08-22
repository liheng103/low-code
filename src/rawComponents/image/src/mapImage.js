export default {
  type: 'image',
  data: [
    {
      id: 1,
      src: require('@/assets/test.jpeg'),
      fit: 'fill',
      style: {
        height: '100px',
        width: '100px'
      }
    },
    {
      id: 2,
      src: require('@/assets/test.jpeg'),
      fit: 'contain',
      style: {
        height: '100px',
        width: '100px'
      }
    },
    {
      id: 3,
      src: require('@/assets/test.jpeg'),
      fit: 'cover',
      style: {
        height: '100px',
        width: '100px'
      }
    },
    {
      id: 4,
      src: require('@/assets/test.jpeg'),
      fit: 'none',
      style: {
        height: '100px',
        width: '100px'
      }
    },
    {
      id: 5,
      src: require('@/assets/test.jpeg'),
      fit: 'scale-down',
      style: {
        height: '100px',
        width: '100px'
      }
    }
  ]
};
