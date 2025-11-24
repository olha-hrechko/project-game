# Adventure Game - Financial Literacy for Kids

An interactive educational game designed to teach children about financial planning and goal-setting through an engaging adventure in Money City.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)

## Overview

Adventure Game is an educational platform where young players create profiles, set financial goals (bicycle, gaming computer, or trendy doll), and complete interactive levels to learn about money management and achieving objectives.

## ✨ Features

- **User Authentication** - Secure profile creation with username and password validation
- **Goal Selection** - Choose from multiple financial objectives
- **Interactive Gameplay** - Progress through levels in Money City
- **Data Persistence** - User data saved in LocalStorage
- **Form Validation** - Real-time input validation with error messages
- **Protected Routes** - Authentication-based navigation
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Logout Functionality** - Secure session management

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Storage:** LocalStorage
- **Icons:** React Icons
- **Package Manager:** npm

## Project Structure

```
project-game/
├── public/
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable UI components
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── Input/
│   │   └── Select/
│   ├── context/          # React Context providers
│   │   ├── UserContext.jsx
│   │   └── GoalContext.jsx
│   ├── pages/            # Route components
│   │   ├── Auth/
│   │   ├── GreetingPage/
│   │   ├── HomePage/
│   │   ├── Introduction/
│   │   ├── MoneyCity/
│   │   └── NotFound/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd project-adventure-game/project-game
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Create Profile** - Navigate to the homepage and click "Create profile"
2. **Enter Credentials** - Provide a username (min 5 characters) and password (min 6 characters)
3. **Receive Greeting** - View personalized welcome message
4. **Choose Goal** - Select your financial objective in Money City
5. **Start Playing** - Begin your adventure through game levels
6. **Track Progress** - Monitor your journey toward your goal
7. **Logout** - Securely exit your profile when finished

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Homepage | Landing page with profile creation link |
| `/auth` | Auth | User authentication and registration |
| `/greeting` | GreetingPage | Personalized welcome screen |
| `/introduction` | Introduction | Game introduction and rules |
| `/money-city` | MoneyCity | Goal selection interface |
| `/game-page` | GamePage | Interactive game levels |
| `*` | NotFound | 404 error page |

## Contributing

This is an educational project developed as part of Nomades training program.

## License

This project is part of Nomades educational initiative.

---

**Built with love for financial education**
