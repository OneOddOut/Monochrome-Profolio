'use client';

import emailjs from 'emailjs-com';

export const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
  // Fetch email configuration from general.json
  const response = await fetch('/assets/data/general.json');
  const { emailJS } = await response.json();

  const { serviceID, templateID, userID, toEmail } = emailJS;

  // Check for missing configuration and log detailed messages
  if (!serviceID) console.error("Service ID is missing in general.json.");
  if (!templateID) console.error("Template ID is missing in general.json.");
  if (!userID) console.error("User ID is missing in general.json.");
  if (!toEmail) console.error("Recipient email is missing in general.json.");

  // Stop execution if any configuration variable is missing
  if (!serviceID || !templateID || !userID || !toEmail) {
    return;
  }

  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: toEmail,
      },
      userID
    );
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
