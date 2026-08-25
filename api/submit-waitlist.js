export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, firstName, lastName, id } = req.body;

  try {
    const response = await fetch('https://n8n.mathportal.com.au/webhook/c0808945-d92e-4e7c-a5f1-fe79e331b018chprepwaitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${process.env.N8N_WEBHOOK_SECRET}`
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
        fullName: `${firstName} ${lastName}`.trim(),
        id: id || 'chprelabwaitlist10112'
      })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Webhook responded with status: ${response.status}. Details: ${text}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error triggering webhook:', error);
    return res.status(500).json({ success: false, error: error.message || 'Failed to process request' });
  }
}
