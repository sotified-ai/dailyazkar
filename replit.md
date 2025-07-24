# Daily Azkar Application

## Overview

This is a full-stack Islamic spiritual companion application built with React, TypeScript, Express, and Drizzle ORM. The application provides users with authentic Islamic daily remembrance (Azkar), Quranic verses, and spiritual guidance through an elegant, modern interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom Islamic-themed design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix
- **Middleware**: Express JSON parsing, URL encoding, and custom logging
- **Development**: Hot reloading with Vite integration in development mode

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon Database serverless)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema management

## Key Components

### Core Pages
1. **Home Page**: Hero section with featured content and image gallery
2. **Morning Azkar**: Collection of authentic morning Islamic remembrance
3. **Evening Azkar**: Evening prayers and supplications
4. **Quran**: Browse Surahs with Arabic text and translations
5. **Dua after Salah**: Post-prayer supplications
6. **Rabbana Duas**: Quranic supplications beginning with "Our Lord"
7. **Ruqiya**: Protective verses for spiritual healing

### UI Components
- **Header**: Navigation with theme toggle and search functionality
- **Footer**: Links and social media integration
- **Hero Section**: Landing page with animated call-to-action buttons
- **Image Gallery**: Interactive gallery with filtering capabilities
- **Search Modal**: Advanced search functionality for Islamic content
- **Floating Actions**: Share, bookmark, and scroll-to-top features

### Theme System
- **Dark/Light Mode**: Complete theme switching with CSS custom properties
- **Islamic Design**: Emerald and amber color palette with geometric patterns
- **Typography**: Custom fonts including Amiri for Arabic text
- **Animations**: CSS transitions and keyframe animations for smooth UX

## Data Flow

### Client-Side Data Flow
1. User interactions trigger React component state updates
2. API calls are managed through TanStack Query for caching and synchronization
3. Theme preferences are persisted in localStorage
4. Navigation state is managed by Wouter router

### Server-Side Data Flow
1. Express routes handle API endpoints with proper error handling
2. Storage interface abstracts database operations
3. Drizzle ORM provides type-safe database queries
4. Response data is JSON-formatted with consistent error handling

### Database Schema
- **azkar_categories**: Categories of Islamic remembrance
- **azkar_items**: Individual prayers and supplications
- **quran_surahs**: Quranic chapters metadata
- **users**: User accounts and preferences

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS, Radix UI components
- **Icons**: Font Awesome, Lucide React
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js, HTTP server creation
- **Database**: Drizzle ORM, Neon Database serverless client
- **Development**: tsx for TypeScript execution, Vite for development server

### Build Dependencies
- **Bundling**: Vite for frontend, esbuild for backend production builds
- **Development**: TypeScript compiler, PostCSS, Autoprefixer
- **Replit Integration**: Runtime error overlay and cartographer plugins

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and error overlay
- **Backend**: tsx with file watching for automatic restarts
- **Database**: Drizzle push for schema synchronization
- **Environment**: Replit-optimized with banner integration

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: esbuild bundle with ESM format and external packages
- **Static Assets**: Served from dist/public directory
- **Database**: Production PostgreSQL with connection pooling

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development Mode**: NODE_ENV detection for development-specific features
- **Replit Integration**: REPL_ID detection for Replit-specific tooling

The application follows modern web development best practices with type safety, responsive design, and performance optimization. The Islamic theme and content are carefully curated to provide an authentic spiritual experience for Muslim users.