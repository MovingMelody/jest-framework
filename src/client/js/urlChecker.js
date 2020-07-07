// const URL_REG = /^(ftp|http|https):\/\/[^ "]+$/;
// export const isValidUrl = (url) => !!url.match(URL_REG);


const SIMPLE_URL_REGEX = /^(https?:\/\/)?(\w+\.)?(\w+\.)(\w+)([\w\?\&\=\-]?)*(\/[\w\?\&\=\-]*)*$/g;

export const isValidUrl = url => !!url.match(SIMPLE_URL_REGEX);


// var url2 = 'http://www.google.com';
// var url = 'https://sumanth.netlify.app/wth-is-currying/';
// var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);

// console.log(valid);
