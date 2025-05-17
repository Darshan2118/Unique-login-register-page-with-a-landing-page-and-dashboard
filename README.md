# StylePage - Theme Switching Authentication App

A beautiful web application with user authentication and theme switching capabilities. Easily toggle between dark and light themes while enjoying a seamless authentication experience.

## Features

- **User Authentication**
  - Register new accounts
  - Login with existing credentials
  - Protected routes for authenticated users

- **Theme Switching**
  - Toggle between dark and light themes
  - Persistent theme preference using localStorage

- **Responsive Design**
  - Works on all screen sizes
  - Modern, clean UI

## Technologies Used

- React
- React Router
- CSS Variables for theming
- LocalStorage for data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory

```bash
cd LR
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## How It Works

### Application Flow

The application follows a logical user flow:

1. **Landing Page**: Users first see a public landing page with information about the app
2. **Registration/Login**: Users can register for a new account or log in with existing credentials
3. **Dashboard**: After authentication, users are redirected to their personalized dashboard
4. **Protected Routes**: The dashboard and other authenticated pages are protected from unauthorized access

### Authentication

The application uses localStorage to simulate a backend authentication system:

1. **Registration**: When a user registers, their information is stored in localStorage
2. **Login**: When a user logs in, their credentials are checked against the stored data
3. **Session Management**: Authentication state is maintained using localStorage

### Theme Switching

The application uses CSS variables and React Context to manage theme switching:

1. **Theme Context**: A context provider manages the current theme state
2. **Toggle Component**: A toggle switch allows users to switch between themes
3. **CSS Variables**: Different sets of CSS variables are applied based on the selected theme

## Project Structure

- `src/components/`: Reusable UI components (Navbar, ThemeToggle, ProtectedRoute)
- `src/pages/`: Main application pages (PublicLanding, Login, Register, Dashboard)
- `src/context/`: React context providers (ThemeContext)
- `src/styles/`: CSS stylesheets (global, auth, landing, publicLanding, themeToggle)
- `public/`: Static assets (favicon)

## Usage

1. Visit the landing page to learn about the application features
2. Register a new account on the registration page
3. Log in with your credentials
4. Access your personalized dashboard
5. Toggle between dark and light themes using the theme switch
6. Log out when finished

## Credits

This project was developed with the assistance of [Augment AI Coder](https://augment.dev), an advanced AI coding assistant that helped with:

- Project structure and organization
- Implementation of authentication logic
- Theme switching functionality

## License

This project is open source and available under the MIT License.
