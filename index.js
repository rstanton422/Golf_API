require("dotenv").config();
const {API_KEY} = process.env;

const express = require("express");
const app = express();
const request = require("request");


const baseURL = "https://api.sportsdata.io/golf/v2/json"
const api_name = "Ocp-Apim-Subscription-Key"
const tournamentid = 497

console.log(API_KEY)

app.get("/leaderboard", (req,res) => {
    let route = `Leaderboard/${tournamentid}`
    let endpoint = `${baseURL}/${route}`

    const options = {
        url: endpoint,
        headers: { "Ocp-Apim-Subscription-Key": "c0e825f17bdf495b8b04bfbd934cf557" }
    };

    
    //console.log(endpoint)

    // function callback(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         const info = JSON.parse(body);
    //         console.log(info.Players.Name);
    //          res.send("I am see what is going on")
    //         }
    //     }

    request(options, (error, response, body)=>{
        let info = JSON.parse(body)
        console.log(info.Players)
    });   
    }
);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=> {
    console.log(`app is listening on port ${PORT}`)
});
