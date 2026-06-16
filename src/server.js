const express = require("express")
const logger = require("./logger")
const health = require("./health")
const users = require("./routes/users")
const app = express()
app.use(express.json())
app.use("/users" , users)
app.use("/", health)
app.listen(3000, ()=>{
    logger.info("Server Running")
})


/*
Single Stage                     |                   Multi Stge 
 1.Eveything                                   1.Split into two stages
                                  |            2. less size
                                  |            3. less attack
 happens in one iamge             |              4. Build faster
                                                 5. Production use
 Example :                                        6. Complexity Medium

   FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","src/server.js"]     |
                                 |
 2. Build :
   docker build -t
    user-service 
                                 |
3. Result:

Image
│
├── Node
├── npm
├── node_modules
├── source code
├── build cache
├── temporary files
└── app

flow:

Docker Build
↓

Install Dependencies

↓

Copy Source

↓

Run App
                                 |
                                 |
*/