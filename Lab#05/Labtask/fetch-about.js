const axios = require('axios');

axios.get('https://www.somesite.com/about')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
