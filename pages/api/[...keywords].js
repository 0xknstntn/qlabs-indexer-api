export default async function handler(req, res) {
        switch (req.method) {
                case "POST":
                        var data = await fetch("https://89.108.83.252:5785", {
                                method: 'POST',
                                headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(req.body),
                                mode: 'no-cors',
                        });

                        var dataJson = await data.json()
                        console.log(dataJson)
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Content-Type', 'application/json');
                        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
                        res.status(200).json(dataJson);
                        break;
        
                case "GET":
                        var url = "";
                        if ((req.query.keywords).length != 0) {
                                for (let index = 0; index < (req.query.keywords).length; index++) {
                                        url += "/" + req.query.keywords[index]
                                }
                        }
                        if (Object.keys(req.query).length > 1) {
                                url += ("?tokenA=" + req.query.tokenA)
                                url += ("&tokenB=" + req.query.tokenB)
                        }
                        
                        var data = await fetch("https://89.108.83.252:5785" + url, {
                                mode: 'cors',
                        });


                        var dataJson = await data.json()
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).json(dataJson);
                        break;
        }
}