export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token, timestamp } = req.body;

  if (!token || !timestamp) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('🌟 Webhook received!');
  console.log('Token:', token);
  console.log('Timestamp:', timestamp);

  // Example: You could add your processing logic here.
  // (right now we just confirm receipt)

  return res.status(200).json({
    success: true,
    message: 'Webhook received successfully!',
    received: { token, timestamp }
  });
}
