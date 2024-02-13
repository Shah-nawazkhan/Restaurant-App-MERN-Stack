// create the Project

mkdir restaurant-app
cd restaurant-app


// Backend Setup

mkdir backend
cd backend

npm init -y
npm i express cors mongoose


// Frontend Setup

npx create-react-app frontend
cd frontend
npm i axios



// Start the backend:

node server.js

// Start the frontend:

npm start