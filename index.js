require("dotenv").config();
const {API_KEY} = process.env;

const express = require("express");
const app = express();
const request = require("request");


const baseURL = "https://api.sportsdata.io/golf/v2/json"
const tournamentid = 497


app.get("/leaderboard", (req,res) => {
    let route = `Leaderboard/${tournamentid}`
    let endpoint = `${baseURL}/${route}`

    const options = {
        url: endpoint,
        headers: { "Ocp-Apim-Subscription-Key" : API_KEY }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            console.log(info.Players[0]);
            res.render("leaderboard.ejs", {data: info.Players})
            }
        }

    request(options, callback);   
    }
);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=> {
    console.log(`app is listening on port ${PORT}`)
});
