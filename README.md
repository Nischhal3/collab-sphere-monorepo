# collab-sphere-monorepo

## Prerequisites

- Node.js >= 22
- npm >= 9
- PostgreSQL (Can be run locally or as container. This project is using postgres container as database)
- Docker / Podman
- OpenSSL (optional; only needed to generate self-signed SSL certificates for development/testing)

## Cloning repository
- git pull git@github.com:Nischhal3/collab-sphere-monorepo.git

## Backend installation
1. Install dependencies
- cd server
- npm install

2. Configure environment variables
- Create .env file under server folder
- Add these item inside .env file <br>
      PORT=3001 <br>
      DATABASE_URL=postgres://<YOUR_USERNAME>:<YOUR_PASSWORD>@<HOST>:<PORT>/<YOUR_DATABASE_NAME>

3. Start backend
- npm start

## Frontend installation
1. Install dependencies
- cd client
- npm install

2. Start frontend
- npm start

## Deployment
1. Creating backend image from Docker file
- cd server
- docker build -t collabsphere-backend .
- Verify image via command: docker images

2. Generate Self-Signed SSL Certificates
- mkdir -p docker/nginx/certs
- Use this command to create certificates: <br> openssl req -x509 -newkey rsa:4096 -keyout docker/nginx/certs/key.pem -out docker/nginx/certs/cert.pem -days 365 -nodes -subj "/CN=<YOUR_IP_ADDRESS>"

3. From root directory use this command to deploy the product
- podman-compose -f compose.yml up -d

## Initialize the Database Tables (if they don't exist)
1. Under server/src folder create file config.local.json (add this file inside .gitignore as well) & and following content inside it <br>  
```json
{
  "db": {
    "host": "localhost",
    "port": 5432,
    "user": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD",
    "database": "YOUR_DATABASE_NAME"
  }
}
```

2. From root folder run following commands:
```bash
cd postgres
chmod +x init_db.sh
./init_db.sh
```

