# Care Connect

A web application that connects elderly people with volunteers who can help them with various tasks and services.

## Features

- **Elder Registration & Login**: Elderly users can register and log in to request help
- **Volunteer Registration & Login**: Volunteers can register and offer their services
- **Help Request System**: Elders can create help requests for various needs
- **Request Management**: Volunteers can view and accept help requests
- **Dashboard**: Separate dashboards for elders and volunteers to manage their activities

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: HTML, CSS, JavaScript
- **CORS**: Enabled for cross-origin requests

## Project Structure

```
care-connect/
├── backend/
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── models/
│   │   ├── Elder.js       # Elder user model
│   │   ├── Volunteer.js   # Volunteer user model
│   │   ├── HelpRequest.js # Help request model
│   │   └── AcceptedRequest.js # Accepted request model
│   ├── routes/
│   │   ├── elderRoutes.js     # Elder-related routes
│   │   ├── volunteerroutes.js # Volunteer-related routes
│   │   └── requestRoutes.js   # Request-related routes
│   ├── app.js             # Backend server setup
│   └── .env               # Environment variables
├── frontend/
│   ├── public/
│   │   └── style.css      # Styling
│   └── views/
│       ├── index.html     # Landing page
│       ├── login.html     # General login page
│       ├── elder-login.html    # Elder login
│       ├── elder-register.html # Elder registration
│       ├── elder-dashboard.html # Elder dashboard
│       ├── volunteer.html      # Volunteer registration
│       ├── volunteer-dashboard.html # Volunteer dashboard
│       ├── request.html        # Create help request
│       ├── viewRequest.html    # View requests
│       └── dashboard.html      # Main dashboard
├── app.js                 # Main application entry point
└── package.json          # Project dependencies
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vasanthi286/care-connect.git
   cd care-connect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add your MongoDB connection string and other required variables

4. Start the application:
   ```bash
   npm start
   ```

## Usage

1. **For Elders**:
   - Register as an elder user
   - Log in to access the elder dashboard
   - Create help requests for various needs
   - View the status of your requests

2. **For Volunteers**:
   - Register as a volunteer
   - Log in to access the volunteer dashboard
   - Browse available help requests
   - Accept requests you can fulfill

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.

## Contact

For questions or support, please contact the development team.
