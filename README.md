# enhive

### Overview

enhive is a platform for discovering and booking activities. This project was created to learn the basics of web development. Some parts of this project are a work in progress. Further functionality will follow.

### Tech Stack

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [express-validator](https://express-validator.github.io/docs)

## Getting Started

### Prerequisites

The following things need to be installed before running the project:

- [nodejs](https://nodejs.org/en/) (v22.19.0)
- [mongodb](https://www.mongodb.com/try/download/community) (local instance)

### Setup the project

1. Clone the repository
2. Install the dependencies using:

   ```bash
   npm i
   ```

3. Duplicate `.env.example` in the root folder and rename it to `.env` using:

   ```bash
   cp .env.example .env
   ```

4. Add the required environment variables to the `.env` file

### Running the project

Start the project using:

1. Development:

   ```bash
   npm run dev
   ```

2. Production:

   ```bash
   npm start
   ```

You can access the app at: `http://localhost:<port>`
