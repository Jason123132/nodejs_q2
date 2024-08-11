const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8001;

app.use(cookieParser());

app.get('/', (req, res) => {
    let visitCount = req.cookies.visitCount;
    let lastVisit = req.cookies.lastVisit;
    
    console.log('Cookies:', req.cookies);
    
    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
        const now = new Date();
        res.cookie('visitCount', visitCount);
        res.cookie('lastVisit', now.toString());
        
        res.send(`Hello, this is the ${visitCount} time that you are visiting my webpage. <br>
          Last time you visited my webpage on: ${lastVisit}`);
    } else {
        res.cookie('visitCount', 1);
        res.cookie('lastVisit', new Date().toString());
        res.send('Welcome to my webpage! It is your first time that you are here.'); 
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
