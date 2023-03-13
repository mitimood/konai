import React from "react"
import { Redirect } from "react-router-dom"

function discord(req, res){
    const CLIENT_ID = process.env.CLIENT_LOGIN
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const REDIRECT_URI = "http://localhost:3000/api/discord"
    const code = req.query.code
    const scope = "identify"

    const params = new URLSearchParams();

    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', REDIRECT_URI);
    params.append('scope', scope);

    fetch('https://discord.com/api/oauth2/token', {
        method: 'post',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
      }).then(r=>r.json().then(data=>{
        fetch("https://discordapp.com/api/users/@me", {method: 'get', headers:{Authorization: `Bearer ${data.access_token}`}})
            .then(r=>r.json().then(user=>
            {
            }))
      }))
}

export default discord