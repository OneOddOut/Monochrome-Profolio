Here's the revised README that clarifies database setup through Vercel's query editor and omits instructions for setting EmailJS environment variables in Vercel.

---

# Profilio - Personal Portfolio

**Live Demo**: [your-portfolio-link.com](https://your-portfolio-link.com)

## Overview

**Profilio** is a customizable personal portfolio built with **Next.js** and **TypeScript**, designed to showcase projects, skills, and experiences in a visually engaging and responsive way. With **Framer Motion** animations and **Tailwind CSS** styling, the site offers a smooth user experience.

This portfolio is easily customizable by modifying the centralized `general.json` file, which holds key personal information like name, location, languages spoken, resume details, social media links, and email configurations for the contact form.

### Portfolio Sections

- **Home**: Intro with rotating roles like "Software Developer" and "Tech Enthusiast."
- **About Me**: Bio section with tech stack, location, languages, and social links.
- **Projects**: Displays personal projects with descriptions, technologies used, and links.
- **Resume**: Downloadable resume feature and timelines for experience and education.
- **Contact**: Contact form integrated with EmailJS.

---

## Key Features

### New in Version 1.1 Beta

1. **Like Counter**: A like button that allows users to interact with the page.
2. **Easily Editable Content**: Personal data in `general.json` for quick updates.
3. **Location and Languages Section**: Displays city, country, and languages spoken.
4. **Resume Download**: Option to allow or disallow downloading a resume, controlled in `general.json`.
5. **Social Media Links**: Configurable links through `general.json`.
6. **Enhanced Animations**: Framer Motion adds smooth transitions.
7. **Centralized EmailJS Configuration**: EmailJS settings stored directly in `general.json`.

---

## Getting Started

### Prerequisites

- **Node.js** (v18.x or higher)
- **npm** (v7.x or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd your-portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the project**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Go to `http://localhost:3000` in your browser.

---

## Customization with `general.json`

The `general.json` file centralizes your personal information. Here’s a guide on how each section works:

### `Information`

Define personal details like name, email, country, city, and phone number.

```json
"Information": {
  "firstName": "Your First Name",
  "lastName": "Your Last Name",
  "email": "your-email@example.com",
  "country": "Your Country",
  "city": "Your City",
  "phoneNumber": "+123456789"
}
```

### `socialMedia`

Add or edit social media links. Leave fields empty if you don't want them displayed.

```json
"socialMedia": {
  "github": "https://github.com/your-username",
  "linkedin": "",
  "twitter": "",
  "instagram": "https://instagram.com/your-username",
  "facebook": "",
  "youtube": ""
}
```

### `languagesSpeak`

Define the languages you speak with flags and labels.

```json
"languagesSpeak": [
  {
    "language": "English",
    "flag": "🇺🇸"
  },
  {
    "language": "Spanish",
    "flag": "🇪🇸"
  }
]
```

### `aboutMe`

Edit your bio paragraphs and homepage description.

```json
"aboutMe": {
  "paragraphs": [
    "Hi, I’m [Your Name], a software developer with a passion for building scalable web applications...",
    "I have experience with front-end and back-end technologies...",
    "In my free time, I enjoy working on open-source projects and contributing to the developer community."
  ],
  "homepageDescription": "Welcome to my personal portfolio..."
}
```

### `resume`

Control the resume download feature and specify the file name. Set `downloadAllowed` to `true` to enable download, and specify the resume file name in `fileName`.

```json
"resume": {
  "downloadAllowed": true,
  "fileName": "Your_Name_Resume.pdf"
}
```

If `downloadAllowed` is set to `false`, a message saying “No resume available for download” will be displayed.

### `emailJS`

Configure EmailJS directly within `general.json`. This integration handles contact form submissions.

```json
"emailJS": {
  "serviceID": "your_service_id",
  "templateID": "your_template_id",
  "userID": "your_user_id",
  "toEmail": "your-email@example.com"
}
```

---

## Database Setup on Vercel

To set up a PostgreSQL database for features like the **Like Counter**:

1. **Create Database**:  
   In Vercel, go to **Project > Settings > Storage** and add a PostgreSQL database (using Neon or Supabase as a provider).

2. **Go to the Query Editor**:  
   After the database is created, open the **Query Editor** from your database dashboard.

3. **Create the Table**:  
   Run the following SQL command in the Query Editor to create a `likes` table:

   ```sql
   CREATE TABLE likes (
     id SERIAL PRIMARY KEY,
     like_count INT DEFAULT 0
   );
   ```

4. **Seed Initial Data (Optional)**:  
   Insert a row in the `likes` table to initialize the counter.

   ```sql
   INSERT INTO likes (like_count) VALUES (0);
   ```

Vercel will provide connection strings such as `POSTGRES_URL` and `POSTGRES_PRISMA_URL` after setup. These are used within the code to connect your app to the database, and vercel will automaticly create envirment varible for you.

---

## Deployment on Vercel

To deploy the portfolio on Vercel:

1. **Connect Repository**:  
   Go to [Vercel](https://vercel.com/) and connect your GitHub repository.

2. **Deploy**:  
   Deploy directly from Vercel’s dashboard by selecting your project and deploying.

---

## Key Updates and Features in Version 1.1 Beta

| Feature                    | Description |
|----------------------------|-------------|
| **Like Counter**           | Allows users to interact by liking the page. |
| **Easily Editable Content**| Centralized information in `general.json`. |
| **Resume Download Option** | Toggle the availability of a resume download. |
| **Location and Languages** | Display user's location and spoken languages. |
| **EmailJS Integration**    | Configure email service to handle contact form submissions. |
| **Animated Experience**    | Enhanced animations using Framer Motion. |
| **Social Media Links**     | Add/remove social media links via JSON. |

---

## Contact Information

For feedback or collaboration inquiries, reach out via the contact form or email at **pacolliruhan844@gmail.com*.

Explore the live portfolio: [your-portfolio-link.com](https://ruhanpacolli.online).
