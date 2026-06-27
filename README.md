# Insurance & Takaful Nomination Guide

A modern, interactive decision-tree web application that helps users understand insurance and takaful nomination.

## Features

- **Interactive Decision Tree**: Guided step-by-step navigation through complex nomination scenarios
- **Professional Design**: Clean, trustworthy financial planning aesthetic
- **Mobile-First**: Responsive design that works on all devices
- **Progress Tracking**: Visual progress indicator throughout the guide
- **User Journey Summary**: Shows the user's path through the decision tree
- **Central Data Structure**: Easy to edit decision tree logic
- **Contact Integration**: Configurable adviser contact details

## Tech Stack

- **React 18**: Modern component-based architecture
- **Tailwind CSS**: Professional styling with custom color scheme
- **Lucide Icons**: Clean, modern icon library
- **Standalone HTML**: No build process required

## Usage

### Local Development

Simply open `standalone.html` in your browser - no installation required!

### Editing the Decision Tree

The decision tree is located in the `decisionTree` object within `standalone.html`. Each node has:

- `id`: Unique identifier
- `type`: start/question/explanation/contact/ending
- `title`: Display title
- `body`: Main content
- `options`: Available choices (for question nodes)
- `next`: Next node ID (for start nodes)
- `keyPoints`: Bullet points (for explanation nodes)
- `moreInfo`: Expandable detailed information
- `contactDetails`: Adviser contact information (for contact nodes)

### Customization

#### Colors
Edit the Tailwind config in the `<script>` tag to customize colors:
- Teal: `#0F766E` (primary)
- Blue: `#1E40AF` (secondary)
- Amber: `#F59E0B` (accent)

#### Contact Details
Update the `contactDetails` object in the `adviser_contact` node with your actual adviser information.

## Deployment

### Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Deploy as a static site

The standalone HTML file can be deployed directly without any build process.

## Project Structure

```
nomination-guide/
├── standalone.html          # Main application (self-contained)
├── src/                    # React source files (alternative setup)
│   ├── App.jsx
│   ├── main.jsx
│   ├── decisionTree.js
│   ├── index.css
│   └── components/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Important Notes

- This is an educational guide, not legal advice
- Users should consult qualified advisers for personal situations
- The decision tree logic can be easily updated by editing the data structure
- Contact details are configurable for different advisers/companies

## License

This project is for educational purposes.
