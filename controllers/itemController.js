const https = require("https")
const api_key = require("../api_key");

class itemController {
    async getItems(req, res) {
        const {skip, take} = req.query
        const options = {
            host: 'suppliers-api.wildberries.ru',
            path: `/api/v2/stocks?skip=${skip}&take=${take}`,
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

module.exports = new itemController()