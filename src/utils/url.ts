const url =
  process.env.NODE_ENV === 'test'
    ? 'http://localhost:7000'
    : 'https://ftvid.herokuapp.com';

export default url;
