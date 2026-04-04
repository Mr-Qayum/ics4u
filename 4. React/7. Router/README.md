# 🔀 React Router

## Overview

This project is a **React + TypeScript single-page application (SPA)** built using **React Router**. It demonstrates how to structure a modern frontend application that interacts with the **TMDB API** and uses client-side routing to navigate between multiple views without page reloads.

The app includes movie browsing features such as trending movies, now playing, search and detailed movie pages with credits and reviews.

## 🚀 Features

- Client-side routing with React Router
- Trending and Now Playing movies
- Search functionality with debounce optimization
- Dynamic movie detail pages (`/movie/:id`)
- Search parameters (`/trending?=week`)
- Movie credits and reviews pages
- Movie trailer
- Reusable UI components
- API integration using Axios
- Custom hooks (debounce)

## 🧠 Key Concepts

### Component Architecture

UI is split into reusable components for maintainability.

### Client-Side Routing

Navigation handled without page reloads using React Router.

### Dynamic Routes

Movie details use URL parameters (`:id`).

### URL Search Parameters

The application also uses `useSearchParams` from React Router to manage query strings in the URL.

### Custom Hooks

`useDebounce` reduces unnecessary API calls.

### API Integration

Data is fetched from TMDB via Axios.

## 🔧 Tech Stack

- React
- TypeScript
- React Router DOM
- Axios
- Vite
- React Icons
