'use strict';

const manageFile = require('./service');

module.exports.appendText =async (event, context, callback) => {
    try{
        /*text is passed to the appendtext function **/
    const text = event.queryStringParameters.text;

   await manageFile.appendText(text).then(result => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                result
            })
        };

        callback(null, response);
    });
}
catch(error){
    throw error;
}
};