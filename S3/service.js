'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const BUCKET = 'mys3buckoperationsss';
const OBJECTKEY = 'file.txt';

module.exports.appendText = text => {
    return getS3Object(BUCKET, OBJECTKEY)
        .then(data => appendText(data.Body, text))
        .then(buffer => putS3Object(BUCKET, OBJECTKEY, buffer))
        .then(() => getSignedUrl(BUCKET, OBJECTKEY));
};
/*
  gets3Object function gets the object from the bucket in s3 
  using the arguments passed bucket and key
  **/
async function getS3Object(bucket, key) {

    return await S3.getObject({
            Bucket: bucket,
            Key: key,
            ResponseContentType: 'text/plain'
        })
        .promise()
        .then(file => {
            return file;
        })
        .catch(error => {
            //file not found
            return putS3Object(bucket, key, '');
        });
}

async function appendText(data, text) {
    try {
        if (data === undefined) {
            return text;
        }
        return await data.toString('ascii') + '\n' + text;
    } catch (error) {
        throw error;
    }
}
/*
 puts3Object puts the object into the bucket
 **/
async function putS3Object(bucket, key, body) {
    try {
        return await S3.putObject({
            Body: body,
            Bucket: bucket,
            ContentType: 'text/plain',
            Key: key
        }).promise();
    } catch (error) {
        throw error;
    }
}
//gets the url of the bucket after putting the object into bucket
async function getSignedUrl(bucket, key) {
    try {
        const params = {
            Bucket: bucket,
            Key: key
        };
        return await S3.getSignedUrl('getObject', params);
    } catch (error) {
        throw error;
    }
}