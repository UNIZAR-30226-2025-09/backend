# Vibra Backend

Backend for Vibra, a music streaming platform built around a REST API architecture.

The project goes beyond basic operations and covers authentication, media management, social features, collaborative playlists, payments, persistent playback state and automated deployment.

It was designed with a strong focus on backend architecture, automated testing and deployment workflows.

## Key Features

### Authentication and User Management

The platform implements a complete user management system including:

* Secure authentication using JWT.
* Password hashing and account management.
* User profiles and profile images.
* Password recovery through email.
* Premium account support.
* Social features.
* Personalized content recommendations.

### Music Streaming Platform

The backend manages the core entities and behaviour expected from a music streaming service:

* Songs, artists and playlists.
* Audio files, artwork and lyrics.
* Song and playlist likes.
* Playlist visits and ratings.
* Playback state persistence.
* Daily song-skip limits.
* Artist-to-song relationships.
* User listening interactions.

The API is responsible not only for storing music metadata, but also for maintaining user-specific state across sessions.

## Collaborative Playlists

Playlists include a collaboration system that allows multiple users to participate in their management.

The backend handles collaborator relationships and permissions, extending playlists beyond simple collections of songs into shared resources with controlled access.

## Social Features

Vibra also includes a social layer.

Implemented functionality includes:

* User relationships and friendships.
* Social interactions between users.
* Real-time-oriented chat functionality.
* Sharing and interaction around music and playlists.

## Payments and Premium Features

The backend integrates Stripe to support paid features and premium accounts.

Payment functionality is integrated with the application's user system, connecting external payment processing with internal account state.

## Database Design

The application uses PostgreSQL with Sequelize and includes a relational data model covering users, artists, songs, playlists, friendships, chats, likes, ratings, visits, collaborators and playback state.

Database evolution is managed through migrations and seeders, providing a reproducible way of creating and evolving the application's data model.

## Automated Testing

The project includes an automated backend test suite covering the main application funcionalities.

API behaviour is tested using Jasmine and Supertest, allowing HTTP endpoints and backend workflows to be validated automatically.

## CI/CD with GitHub Actions

The repository includes a GitHub Actions based deployment pipeline.

Changes merged into the main branch automatically trigger the deployment workflow.

Push to main
      |
      v
GitHub Actions
      |
      v
Remote server deployment
      |
      v
Docker rebuild
      |
      v
Automated backend test workflow

Deployment credentials are managed through GitHub Secrets, avoiding the need to expose server access credentials directly inside the workflow.

## Containerized Deployment

The application is containerized using Docker and is designed to run as part of a multi-service environment.

The deployment architecture combines:

                    Nginx
                   /     \
                  /       \
             Frontend  Backend API
                            |
                            v
                       PostgreSQL

Nginx acts as the entry point to the application while the backend and database run as separate services.
