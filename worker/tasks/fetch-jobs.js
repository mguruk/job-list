var fetch = require('node-fetch');
var redis = require("redis"),client = redis.createClient();
const API_URL = "https://jobs.github.com/positions.json?page=1";

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);


async function fetchJob (){
    console.log("fetch job");
        const res = await fetch(`${API_URL}`);
        const jobList =await  res.json();
      console.log("fetch done");
        const success = await setAsync('github', JSON.stringify(jobList));

        console.log({success});

}

module.exports = fetchJob;