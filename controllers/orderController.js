const https = require("https");
const api_key = require("../api_key");

class orderController {
    async getOrders(req, res) {
        const {date_start, date_end, skip, take} = req.query
        const options = {
            host: 'suppliers-api.wildberries.ru',
            path: `/api/v2/orders?date_start=${date_start}&date_end=${date_end}&skip=${skip}&take=${take}`,
            method: 'GET',
            headers: {
                'Authorization': api_key
            }
        }
        https.get(options, (resH) => {
            let data = ''

            resH.on("data", (chunk) => {
                // append this chunk to our growing `data` var
                data += chunk;
            });

            // this event fires *one* time, after all the `data` events/chunks have been gathered
            resH.on("end", () => {
                // you can use res.send instead of console.log to output via express
                return res.json(JSON.parse(data))
            });
        })
    }
}

module.exports = new orderController()