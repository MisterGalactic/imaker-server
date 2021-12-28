# Install & Configuration

## Local
- Run `$ npm install`
- Run `$ npm run localInit`

## Heroku
> Make sure you already have a heroku repo
> Make sure the heroku repo is added git remote
> Make sure you have already pushed to heroku

- Run `$ heroku addons:create papertrail` (this adds a service that will keep your logs)
- Run `$ heroku addons:create heroku-postgresql:hobby-dev` (this adds a postgresql)
- Run `$ heroku config:set SECRET=SOME_SECRET`
- Run `$ heroku run npm run herokuInit`

heroku dyno:restart 

heroku logs -t