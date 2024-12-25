# GitHub Clone App

## Overview
The **GitHub Clone App** replicates key features of GitHub, allowing users to:
- Log in using their GitHub account.
- View their most starred repositories.
- Explore repositories with the most likes and all other repositories associated with their profile.

## Features
- **GitHub Login**: Secure authentication using OAuth with GitHub API.
- **Starred Repositories**: View the most starred repositories of the user.
- **Liked Repositories**: Display repositories with the most likes.
- **All Repositories**: Browse all repositories associated with the logged-in user.

## Tech Stack

### Backend
- **Express.js**: Backend framework for API handling.
- **Passport.js**: For user authentication using GitHub OAuth.
- **Passport-GitHub2**: GitHub strategy for OAuth.
- **MongoDB**: Database for storing user session data.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Environment variable management.
- **nodemon**: Development utility for live updates.
- **concurrently**: For running server and client simultaneously.

### Frontend
- **React**: For building the user interface.
- **React Router DOM**: For navigation and routing.
- **Tailwind CSS**: For responsive design and styling.
- **React Icons**: For UI elements.
- **React Hot Toast**: For toast notifications.
- **React Router DOM**: For routing.

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/github-clone.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd github-clone
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add:
   ```env
   CLIENT_ID=your-github-client-id
   CLIENT_SECRET=your-github-client-secret
   CALLBACK_URL=http://localhost:5000/auth/github/callback
   MONGO_URI=your-mongodb-connection-string
   SESSION_SECRET=your-secret
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Run Full Stack
To run both client and server simultaneously:
```bash
npm run dev
```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Log in using your GitHub credentials.
3. Explore your starred, liked, and all repositories.

## Screenshots

### Dashboard
![Dashboard](.client/public/UI.png)

## Scripts

### Backend
- **Development**:
  ```bash
  npm run server
  ```
- **Production**:
  ```bash
  npm start
  ```
- **Build**:
  ```bash
  npm run build
  ```

### Frontend
- **Development**:
  ```bash
  npm run dev
  ```
- **Build**:
  ```bash
  npm run build
  ```
- **Preview**:
  ```bash
  npm run preview
  ```

## License
This project is licensed under the [ISC License](LICENSE).

## Contact
Developed by **Utkarsh Raj**.  
For any inquiries, email [utkarshraj525@gmail.com](mailto:utkarshraj525@gmail.com).
