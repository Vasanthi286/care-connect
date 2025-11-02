# Contributing to Care Connect

Thank you for your interest in contributing to Care Connect! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Set up your environment variables (copy `.env.example` to `.env` in the backend directory)
5. Start the development server: `npm run dev`

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git

### Environment Setup
1. Copy `backend/.env.example` to `backend/.env`
2. Update the MongoDB connection string in `.env`
3. Install dependencies: `npm install`

## Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Commit Guidelines

- Use clear, descriptive commit messages
- Start commit messages with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 50 characters
- Add detailed description if necessary

Example:
```
Add user authentication middleware

- Implement JWT token validation
- Add role-based access control
- Update route protection for admin endpoints
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with a clear description

### Pull Request Template
- **Description**: What does this PR do?
- **Type of Change**: Bug fix, new feature, documentation update, etc.
- **Testing**: How was this tested?
- **Screenshots**: If applicable, add screenshots

## Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node.js version, etc.)
- Screenshots or error messages if applicable

## Feature Requests

For new features:
- Check if the feature already exists or is planned
- Provide a clear use case
- Describe the expected behavior
- Consider the impact on existing functionality

## Code Review Process

- All submissions require review
- Reviewers will check for code quality, functionality, and adherence to guidelines
- Address feedback promptly
- Be open to suggestions and improvements

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the project's code of conduct

## Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Contact the maintainers
- Check existing documentation

Thank you for contributing to Care Connect!
