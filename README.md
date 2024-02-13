// create the Project

mkdir restaurant-app
cd restaurant-app


// Backend Setup

mkdir server 
cd server

npm init -y
npm i express cors mongoose

"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^8.0.4",
    "nodemon": "^3.0.2"
}

// Frontend Setup

npx create-react-app client
cd client
npm i axios

"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.6.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-query": "^3.39.3",
    "react-router-dom": "^6.21.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}

// Start the backend:

node server.js

// Start the frontend:

npm start