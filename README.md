# Profilio - Personal Portfolio

**Live Demo**: [ruhanpacolli.online](https://ruhanpacolli.online)

## Overview

**Profilio** is a sleek, modern portfolio designed to showcase personal projects, skills, and experience in a professional and visually appealing manner. Built with **Next.js** and **TypeScript**, the portfolio is fully responsive and uses **Tailwind CSS** for styling, and **Framer Motion** for animations.

### Portfolio Sections

- **Home**: Intro with rotating roles like "Software Developer" and "Tech Enthusiast."
- **About Me**: Bio section including tech stack, languages, location, and social links.
- **Projects**: Displays personal projects with descriptions, links, and technologies used.
- **Contact**: Contact form integrated with EmailJS.

---

## Getting Started

### Prerequisites

To run this project, you’ll need the following installed on your local machine:

- **Node.js** (v18.x or higher)
- **npm** (v7.x or higher)

### Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   
   ```bash
   git clone https://github.com/Ruhanpaco/my-profilio.git
   ```

2. Navigate to the project folder:
   
   ```bash
   cd my-profilio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the project:

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to see the project in action.

---

## What's New in Version 1.1 Beta

### New Features and Changes:

- **Location Display**: Your city and country are now shown in the About section, along with a location icon.
- **Language Section**: A dynamic "Languages I Speak" section has been added below the location.
- **Like Feature**: A like counter with an animated heart icon has been added to enhance engagement on the site.
- **General Information in JSON**: A `general.json` file stores all critical personal information (name, location, social links) for easy customization and future updates.
- **Refined Animations**: Improved animations using Framer Motion across different sections for smoother transitions.
- **Footer**: A new footer added with a hidden copyright message for security.

---

## Technologies Used

- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: Type safety for scalable development.
- **Tailwind CSS**: Responsive UI and styling.
- **Framer Motion**: Animations and transitions.
- **EmailJS**: Email notifications for the contact form.

---

## Email Integration with EmailJS

### Setting Up EmailJS

1. Sign up on [EmailJS](https://www.emailjs.com/) and connect your email service.
2. Create an email template with placeholders like `{{name}}`, `{{email}}`, and `{{message}}`.
3. Add your EmailJS credentials (`serviceID`, `templateID`, `userID`) in the environment variables.

---

## Deployment

1. **Vercel**: Easily deploy the project on Vercel by connecting your GitHub repository.
2. **Environment Variables**: Add your EmailJS credentials as environment variables for security.

---

## Contact Information

For any feedback or collaboration inquiries, feel free to reach out through the contact form or via email at **pacolliruhan844@gmail.com**.

Explore the live portfolio: [ruhanpacolli.online](https://ruhanpacolli.online).
```

### Key Changes from Version 1.0 to 1.1 Beta:

1. **Location Section**: Added location details under the profile picture with an icon.
2. **Languages I Speak**: Added a section dynamically showing the languages you speak.
3. **Like Feature**: Added a like button with animation to increase interaction.
4. **general.json File**: Now stores all personal details, making it easy to update information such as name, social links, and bio.
5. **Footer**: Added a footer with hidden copyright information.
6. **Refined Animations**: Improved transitions using **Framer Motion** for smoother user interactions.
