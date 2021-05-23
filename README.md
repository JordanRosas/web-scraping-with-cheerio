# web-scraping-with-cheerio

## How to run locally:

- clone this repo by typing `git clone git@github.com:JordanRosas/web-scraping-with-cheerio.git`
- `cd web-scraping-with-cheerio && npm install`
- `npm install -g json-server` -> I have this installed globally on my system but should be ok to install as a dev dependency
-  open another terminal, navigate to the project directory and run the following command: `json-server -w -p 5002 data.json` `-w` is the watch command and `-p` specifies the port you want it to run on and lastly data.json is the file we are watching.
- 