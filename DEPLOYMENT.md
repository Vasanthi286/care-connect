# Deployment Guide

This guide covers how to deploy the Care Connect application to various platforms.

## Local Development

1. **Prerequisites**:
   - Node.js (v14+)
   - MongoDB (local or Atlas)
   - Git

2. **Setup**:
   ```bash
   git clone https://github.com/Vasanthi286/care-connect.git
   cd care-connect
   npm install
   ```

3. **Environment Configuration**:
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your MongoDB connection string
   ```

4. **Start the application**:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

## Production Deployment

### Option 1: Traditional Server (VPS/Dedicated Server)

1. **Server Setup**:
   ```bash
   # Install Node.js and MongoDB
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Application Deployment**:
   ```bash
   git clone https://github.com/Vasanthi286/care-connect.git
   cd care-connect
   npm install --production
   ```

3. **Environment Configuration**:
   ```bash
   cp backend/.env.example backend/.env
   # Configure production environment variables
   ```

4. **Process Management with PM2**:
   ```bash
   npm install -g pm2
   pm2 start app.js --name "care-connect"
   pm2 startup
   pm2 save
   ```

### Option 2: Heroku Deployment

1. **Prepare for Heroku**:
   ```bash
   # Install Heroku CLI
   npm install -g heroku
   heroku login
   ```

2. **Create Heroku App**:
   ```bash
   heroku create your-app-name
   ```

3. **Configure Environment Variables**:
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-atlas-connection-string"
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

### Option 3: Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install --production
   COPY . .
   EXPOSE 5000
   CMD ["npm", "start"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t care-connect .
   docker run -p 5000:5000 -e MONGODB_URI="your-connection-string" care-connect
   ```

### Option 4: Vercel Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Configure vercel.json**:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "app.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/app.js"
       }
     ]
   }
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## Database Setup

### MongoDB Atlas (Recommended for Production)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Create a database user
4. Get the connection string
5. Update your environment variables

### Local MongoDB

1. **Install MongoDB**:
   ```bash
   # Ubuntu/Debian
   sudo apt-get install mongodb
   
   # macOS
   brew install mongodb-community
   ```

2. **Start MongoDB**:
   ```bash
   sudo systemctl start mongod
   ```

## Environment Variables

Required environment variables:

```bash
# Database
MONGODB_URI=mongodb://localhost:27017/careconnect

# Server
PORT=5000
NODE_ENV=production
```

## SSL/HTTPS Setup

For production, set up SSL using:
- Let's Encrypt (free)
- Cloudflare (free tier available)
- Load balancer SSL termination

## Monitoring and Logging

Consider implementing:
- Application monitoring (e.g., New Relic, DataDog)
- Error tracking (e.g., Sentry)
- Log aggregation (e.g., ELK stack)

## Backup Strategy

1. **Database Backups**:
   - MongoDB Atlas: Automatic backups included
   - Self-hosted: Set up regular mongodump schedules

2. **Code Backups**:
   - Use Git for version control
   - Regular pushes to remote repository

## Security Considerations

- Use HTTPS in production
- Keep dependencies updated
- Use environment variables for secrets
- Implement rate limiting
- Regular security audits

## Troubleshooting

Common issues and solutions:

1. **Port already in use**: Change PORT in .env
2. **MongoDB connection failed**: Check connection string and network access
3. **Module not found**: Run `npm install`
4. **Permission denied**: Check file permissions and user privileges

For more help, check the logs or open an issue on GitHub.
