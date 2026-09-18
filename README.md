# Task 3 - Docker Node.js + Redis Application

## 1. Overview

This project demonstrates how to containerize a Node.js Express application using Docker and connect it with Redis.

The Node.js application uses Redis to store and retrieve visitor count data. The Node.js application and Redis run as separate Docker containers and communicate through a custom Docker network.

## 2. Objective

The main objectives of this task are:

- Understand Docker containerization.
- Create a Docker image for a Node.js application.
- Run the Node.js application inside a Docker container.
- Run Redis as a separate Docker container.
- Create a custom Docker network.
- Establish communication between the Node.js and Redis containers.
- Store and retrieve visitor count data using Redis.
- Access the application through a web browser.
- Verify the complete Docker setup.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Node.js | Application runtime |
| Express.js | Web framework |
| Redis | Data storage |
| Git | Version control |
| GitHub | Repository hosting |
| Git Bash | Command-line environment |

## 4. Project Structure

```text
visitor-app/
├── .dockerignore
├── Dockerfile
├── index.js
├── package.json
└── README.md

### Step 5 - Create the Dockerfile

The Dockerfile defines how the Node.js application is packaged into a Docker image.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 8081

CMD ["npm", "start"]
The Dockerfile performs the following operations:

Uses Node.js 20 Alpine as the base image.
Creates /app as the working directory.
Copies the package files.
Installs the application dependencies.
Copies the Node.js application code.
Exposes port 8081.
Starts the application using npm start.
Step 6 - Create .dockerignore

The .dockerignore file prevents unnecessary files from being included in the Docker build context.

node_modules
npm-debug.log
.git
.gitignore
README.md
screenshots
Step 7 - Build Docker Image

The Docker image was created using:

docker build -t my-visitor-app .

The image was verified using:

docker images

The image name used for this project is:

my-visitor-app
Step 8 - Create Docker Network

A custom Docker network was created so that the Node.js application and Redis container can communicate.

docker network create visitor-app-net

The network was verified using:

docker network ls

The network name is:

visitor-app-net
Step 9 - Run Redis Container

Redis was started using:

docker run -d \
  --name redis-server \
  --network visitor-app-net \
  redis:alpine

The Redis container was verified using:

docker ps
Step 10 - Run Node.js Container

The Node.js application was started using:

docker run -d \
  --name web-app \
  --network visitor-app-net \
  -p 4000:8081 \
  my-visitor-app

The port mapping is:

Host Port       Container Port
4000            8081

The application can be accessed using:

http://localhost:4000
Step 11 - Verify Running Containers

The running containers were checked using:

docker ps

The expected containers are:

web-app
redis-server

The web-app container runs the Node.js application and the redis-server container runs Redis.

Step 12 - Test the Application

The application was opened in a web browser using:

http://localhost:4000

The application displays:

Docker Node.js + Redis Application
Visitor Count: 1

When the page is refreshed, the visitor count increases.

For example:

Visitor Count: 2
Visitor Count: 3
Visitor Count: 4

The visitor count is maintained using Redis.

14. Screenshots

The following six screenshots document the completed Task-3 implementation, including the project files, Docker configuration, final code, container execution, and application output.

Screenshot 1

Paste the first final screenshot here.

Screenshot 2

Paste the second final screenshot here.

Screenshot 3

Paste the third final screenshot here.

Screenshot 4

Paste the fourth final screenshot here.

Screenshot 5

Paste the fifth final screenshot here.

Screenshot 6

Paste the sixth final screenshot here.

16. Conclusion

This task provided practical experience with Docker containerization, Docker networking, Node.js, Express.js, and Redis.

The Node.js application was successfully containerized and connected to Redis through a custom Docker network. The visitor count was successfully stored and retrieved using Redis, and the application was verified through a web browser.

The task demonstrates practical understanding of:

Docker images
Docker containers
Dockerfiles
Docker networks
Port mapping
Container communication
Node.js application deployment
Redis integration
Application testing

