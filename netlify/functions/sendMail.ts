export const handler = async function (event, context) {
  const { name, message, email } = event.body;
  const data = {
    service_id: "service_ms5a8kk",
    template_id: "contact",
    user_id: "Gn64YX1hDLtHp5in",
    template_params: {
      name,
      message,
      email,
    },
  };

  try {
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(data),
    });
    return {
      statusCode: 200,
      body: "Your message has been sent, thank you!",
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: "Your message could not be sent, please try again or send an email from your own email client.",
    };
  }
};
