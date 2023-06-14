# CEO-bot

A slack bot made for automating mundane tasks that a CEO of QGroup has to do.

- [x] Generate a reminder to timereport message through a slash command.
- [ ] Seasonal emojis if it's an holiday for the current month.
- [ ] Automatic message queing.

## How to contribute

- Install ngrok
- Setup an account on ngrok to get started with authtoken locally.
- Install dependencies with `npm install`
- Run app.ts server on port 3000 `npm run start`
- Use ngrok to publish the server online `npm run server`
- Update request url for command in slack bots configuration UI with the server ngrok is forwarding port 3000 to. And which channel to publish the message to.
- Test commands (currently /timereport),
