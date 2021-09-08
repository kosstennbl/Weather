import {request} from "https";

export async function getHourJson() {
    let options = {
        hostname: 'data.climacell.co',
        port: 443,
        path: '/v4/timelines?apikey=mNtDw1HrpsLHQ9JvT5Ce54mNH0OTUqFc&location=49.195061, 16.606836&fields=temperature,precipitationProbability,windSpeed&startTime=2021-09-08T14:00:00Z&endTime=2021-09-09T14:00:00Z&timesteps=1h&units=metric&timezone=Europe/Prague',
        method: 'GET'
    }
    console.log("started");
    const req = request(options, (res) => {
        console.log(res.statusCode)
        res.on('data', (d) => {
            console.log(d)
        })
    })
    req.on('error', (e) => {
        console.log(e)
    })
}