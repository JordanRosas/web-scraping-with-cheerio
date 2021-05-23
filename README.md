# web-scraping-with-cheerio

### Just a small project that scrapes the web for the presidents and their birthdays and drops that payload into a local json file. 
## How to run locally:

- navigate to your workspace directory and clone this repo by typing `git clone git@github.com:JordanRosas/web-scraping-with-cheerio.git` in your terminal
- `cd web-scraping-with-cheerio && npm install`
- `npm install -g json-server` -> I have this installed globally (hence the `-g` argument) on my system but should be ok to install as a dev dependency by using `npm install json-server --save-dev`
-  open another terminal, navigate to the project directory and run the following command: `json-server -w -p 5002 data.json` `-w` is the watch command and `-p` specifies the port you want it to run on and lastly `data.json` is the file we are watching.
- in your other terminal window just run the command `node potus.js`
- after it is done running you should see all 46 presidents in the data.json file result should look like this:

 ```
 {
     "presidents":[
         {
             "name":"George Washington",
             "birthday": "1732-22-2",
             "id":1
         },
         ...
     ]
 }
 ```
 -!Viola!


 > I do reccomend poking around the code. Though it is pretty simple it is fun to see how all the pieces work together!