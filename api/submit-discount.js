export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, firstName, lastName } = req.body;

  try {
    const response = await fetch('https://n8n.mathportal.com.au/webhook/95fbe0ae-c332-44c1-ac7e-e07a1893125c222', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.N8N_WEBHOOK_SECRET}`
      },
      body: JSON.stringify({ email, firstName, lastName })
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error triggering webhook:', error);
    return res.status(500).json({ success: false, error: 'Failed to process request' });
  }
}
