export default async function handler(req, res) {
        switch (req.method) {
                case "POST":
                        var data = await fetch("http://89.108.83.252:26657", {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(req.body),
                                mode: 'cors',
                        });

                        var dataJson = await data.json()
                        console.log(dataJson)
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Content-Type', 'application/json');
                        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
                        res.status(200).json(dataJson);
                        break;
                case "OPTIONS":
                        var data = await fetch("http://89.108.83.252:26657", {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(req.body),
                                mode: 'cors',
                        });

                        var dataJson = await data.json()
                        console.log(dataJson)
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Content-Type', 'application/json');
                        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
                        res.status(200).json(dataJson);
                        break;
        }
}