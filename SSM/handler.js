'use strict';

module.exports.getssm = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        userid: process.env.USER_ID,
        password: process.env.PASSWORD        
      },
      null,
      2
    ),
  };
};
