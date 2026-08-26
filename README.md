# Character Counter — React + TypeScript

An interactive character and word counter built with React, TypeScript, and Vite. This project demonstrates core frontend concepts such as state management, event handling, component communication, and real‑time UI updates.

Designed as part of a learning lab, the component simulates a feature commonly used in content management systems to help writers track progress and meet content requirements.

## Features

- Real‑time character count
- Real‑time word count
- Estimated reading time (mm:ss format)
- Dynamic styling based on min/max word limits
- Clean component architecture
- Fully typed with TypeScript
- Responsive UI using Tailwind CSS

## Learning Objectives

This project reinforces:

- useState for state management
- Event handling with onChange
- Parent → child → parent communication via callbacks
- Controlled vs uncontrolled inputs
- Passing computed data through props
- Component responsibility separation
- TypeScript interface design

## Components Overview

### CharacterCounter

The parent component that:

- Stores the text input
- Computes statistics
- Applies validation rules
- Determines dynamic styling
- Passes data to child components

Props:

- minWords
- maxWords
- targetReadingTime

### TextInput

A presentational component that:

- Renders a textarea
- Sends user input back to the parent via onTextChange
- Does not store or compute anything

Props:

- onTextChange
- placeholder
- initialValue

### StatsDisplay

Displays:

- Character count
- Word count
- Reading time (optional)
- Dynamic color styling

Props:

- stats
- showReadingTime
- color

## Usage

<CharacterCounter
minWords={25}
maxWords={100}
targetReadingTime={200}
/>

Start typing in the text box — statistics update instantly.

### Reading Time Calculation

readingTime = wordCount / targetReadingTime

Converted to mm:ss format.

### Dynamic Styling

The word counter changes color based on limits:

- Red → below minWords or above maxWords
- Green → within valid range

This logic lives in CharacterCounter and is passed to StatsDisplay.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS