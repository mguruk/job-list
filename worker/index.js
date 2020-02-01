var CronJob = require('cron').CronJob;

const fetchJob = require('./tasks/fetch-jobs')

// fetch github jobs
new CronJob('5 * * * *', fetchJob
,null, true, 'Asia/Kolkata');