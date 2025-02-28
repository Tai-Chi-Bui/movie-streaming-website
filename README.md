# Services Architecture

## API Gateway (NestJS)

The API Gateway serves as the single entry point for all client requests, built with:

- **NestJS**: Provides robust dependency injection, modular architecture, and built-in support for microservices

Key responsibilities:

- Routes API requests to appropriate microservices using intelligent routing
- Handles authentication via JWT for secure access
- Acts as a reverse proxy to hide internal service complexity

## Auth Service (NestJS + gRPC)

Handles all authentication flows, built with:

- **NestJS**: Perfect for handling auth workflows with extensive auth libraries and built-in security features
- **gRPC**: Chosen for token validation as it provides low-latency, type-safe communication needed for high-frequency auth checks. Kafka would add unnecessary complexity and latency for these synchronous operations.

Core features:

- Manages user authentication with multiple strategies (email/password, OAuth)
- Issues and validates JWT tokens with configurable expiry
- Provides gRPC endpoints for other services to verify tokens

## Movies Service (NestJS + gRPC/Kafka)

Manages all movie-related operations, using:

- **NestJS**: Offers excellent TypeScript support and modular architecture
- **gRPC**: Used for real-time operations like fetching movie details where immediate response is required
- **Kafka**: Used for analytics processing where eventual consistency is acceptable and high throughput is needed

Capabilities:

- Stores and serves movie metadata (title, description, genres etc.) via gRPC
- Handles user subscription logic and access control via gRPC
- Processes viewing analytics via Kafka for recommendations

## Streaming Service (NestJS + gRPC/Kafka)

Optimized for video delivery:

- **NestJS**: Provides excellent streaming capabilities through built-in Observable support
- **gRPC**: Used for stream initialization where bidirectional streaming is needed
- **Kafka**: Used for analytics where eventual consistency is acceptable

Features:

- Handles video streaming with adaptive bitrate
- Uses efficient chunking and buffering strategies
- Tracks detailed viewing analytics via Kafka

## Kafka Event Bus

Central nervous system for async communication:
(Used when real-time response isn't critical and data persistence is important)

Topics:

- `user-authenticated`: Triggers post-login workflows
- `movie-played`: Updates watch history, recommendations
- `movie-paused`: Saves timestamp for resume
- `subscription-updated`: Syncs access permissions

Benefits:

- Decoupled services can scale independently
- Reliable event delivery with persistence
- Enables real-time analytics and monitoring
