# Profilio - Personal Portfolio

**Live Demo**: [ruhanpacolli.online](https://ruhanpacolli.online)

## Overview

**Profilio** is a sleek, modern portfolio designed to showcase your personal projects, skills, and experience in a professional and visually appealing manner. Built with **Next.js (14.2.13)** and **TypeScript**, the portfolio is fully responsive and utilizes **Tailwind CSS** for styling and **Framer Motion** for smooth, subtle animations that enhance user interaction.

Visit the live portfolio at [ruhanpacolli.online](https://ruhanpacolli.online) to see the design and structure, which includes:
- **Aesthetic Design**: A clean, black-and-white color scheme with minimalist elements that keep the focus on content while delivering a high-quality user experience.
- **Animations**: Gentle transitions powered by Framer Motion that bring the UI to life without overwhelming the user.
- **Typography**: Elegant, easy-to-read font pairings that maintain readability and professionalism.
- **Interactive Elements**: CTA buttons, social links, and a functional contact form that enhances engagement.

### Portfolio Sections

- **Home**: A welcoming introduction with a rotating title showcasing different roles like "Software Developer" and "Tech Enthusiast."
- **About Me**: A detailed bio with tech stack icons and links to my social profiles.
- **Projects**: Displays a series of personal projects with descriptions, links, and the technologies used.
- **Contact**: A fully functional contact form that sends email notifications via EmailJS.

## Technologies Used

The project leverages modern web development tools and technologies:

- **Next.js**: For server-side rendering, routing, and static site generation.
- **TypeScript**: For type-safe development and scalability.
- **Tailwind CSS**: A utility-first CSS framework that enables quick and responsive UI development.
- **Framer Motion**: For animations and UI transitions.
- **EmailJS**: To handle email notifications through the contact form.

## Look and Feel

Profilio's aesthetic centers around simplicity and professionalism:
- **Black-and-White Theme**: The monochromatic color palette gives the website a sleek and polished look, perfect for presenting technical skills without distracting the viewer.
- **Typography**: Uses modern, sans-serif fonts for a clean and clear presentation.
- **Interactive Elements**: Subtle hover effects and button animations enhance usability without overcomplicating the interface.
  
This design choice focuses on ensuring the user's attention remains on your skills, projects, and ability to connect with potential clients or collaborators.

## How to Run the Project Locally

This portfolio is built with **Next.js (14.2.13)** using TypeScript. To run it locally:

1. Clone the repository and navigate to the project directory.
2. Run the project with these commands:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

### Versions

- **Next.js**: 14.2.13
- **Node.js**: 18.x.x
- **TypeScript**: 5.x.x
- **Tailwind CSS**: 3.x.x
- **Framer Motion**: 7.x.x

## Email Integration with EmailJS

Profilio uses **EmailJS** for handling email communication via the contact form. Users can submit messages, and the site owner and will receive an email that a form has been filled and will show name email and text.

### Steps to Get Your EmailJS Credentials

1. **Sign Up on EmailJS**:
   - Go to [EmailJS](https://www.emailjs.com/) and create an account.
   - Once logged in, navigate to the **Dashboard**.

2. **Create an Email Service**:
   - Go to the **Email Services** section and click on **Add New Service**.
   - Connect your preferred email provider (e.g., Gmail, Outlook) and follow the steps to link it.

3. **Create an Email Template**:
   - In the **Email Templates** section, create a new template.
   - Customize it with placeholders like `{{name}}`, `{{email}}`, and `{{message}}` for dynamic content.

4. **Get Your EmailJS Credentials**:
   - Go to the **Account** section to retrieve your **Service ID**, **Template ID**, and **User ID**.
   - Replace the placeholder values in the project with your credentials:

```ts
const serviceID = 'your_service_id';  // EmailJS Service ID
const templateID = 'your_template_id';  // EmailJS Template ID
const userID = 'your_user_id';  // EmailJS User ID
```

### Example Email Template for Contact Form

When a user submits the contact form, the emailjs will send an email to you. Below is an example of an owner email template:

```html
<div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f2f4f7; padding: 40px 20px;">
  <div style="max-width: 700px; margin: 0 auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
    <h2 style="text-align: center;">New Contact Form Submission</h2>
    <p><strong>Name:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Message:</strong></p>
    <blockquote style="border-left: 4px solid #0070f3; padding-left: 16px;">{{message}}</blockquote>
    <p>Check your admin panel for further details.</p>
  </div>
</div>
```

## Deployment

Deploying the portfolio is simple:

1. **Vercel Deployment**:
   - Go to the [Vercel website](https://vercel.com/).
   - Connect your GitHub repository.
   - Deploy the project directly through Vercel's dashboard.

2. **Environment Variables**:
   - Be sure to add your EmailJS **Service ID**, **Template ID**, and **User ID** as environment variables in the Vercel dashboard to keep them secure.

Once deployed, the site will be live with the contact form working seamlessly to send notifications via email.

## Contact Information

For any questions, feedback, or collaboration requests, feel free to reach out via the contact form on the website or email directly at **pacolliruhan844@gmail.com**.

Explore the full portfolio at [ruhanpacolli.online](https://ruhanpacolli.online).
