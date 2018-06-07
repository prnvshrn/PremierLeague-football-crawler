# PremierLeague-football-crawler
This is a Crawler and scrapper for retrieving stats of football players from https://www.premierleague.com/. Built with Node.js.

## What does it do ?
Vital stats are retreived of players from the website and stored into a mongo database as following :-
 ```
 {
    "name": "Paul Scholes",
    "position": "\n        Midfielder",
    "goals": "107",
    "shooting_accuracy": "28%",
    "heading_goals": "107",
    "big_chances_miss": "1",
    "error_to_goal": "1",
    "interceptions": "191",
    "blocked_shots": "63",
    "big_chance_created": "5",
    "assists": "55",
    "tackle_success": "70%",
    "duel_won": "547",
    "aerial_battle_won": "26",
    "accurate_long_balls": "1,277",
}
 ```

## Technologies
Javascript, NodeJS, Mongoose, Cheerio

## How does it work
1. Fork or pull repository
2. Install npm on your machine
4. Change the mongo db path as pointed out in the code
5. Go to folder of repository and type npm install
6. It is advisable to crawl through around 500 players data at a time (Looking to improve this). So change variable a in app.js accordingly
7. Type nodemon to start crawling, scraping and storing data

## Future
I am looking to make the crawler export data as a json along with storing to a mongo database. The json then could be fed into elasticsearch or similar applications. Any help or advice would be appreciated, please raise a new issue if desired. :)
