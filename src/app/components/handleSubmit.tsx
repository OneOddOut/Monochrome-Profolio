import emailjs from 'emailjs-com';

export const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
  const serviceID = 'service_95pdnds';   // Your EmailJS Service ID
  const templateID = 'template_fn7xz4q'; // Replace with your EmailJS Template ID for owner notification
  const userID = 'Oc4_X4NlO1Aq61fQW';    // Replace with your EmailJS User ID

  try {
    // Send email to the owner
    await emailjs.send(
      serviceID,
      templateID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'pacolliruhan844@gmail.com', // Your email address
      },
      userID
    );

    console.log('Email sent to the owner');
  } catch (error) {
    console.error('Failed to send email to the owner:', error);
    throw error;
  }
};
