// api/index.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Hello from GET!' });
  }
  if (req.method === 'POST') {
    const { address } = req.body || {};
    if (!address) {
      return res
        .status(400)
        .json({ error: 'Missing "address" in request body' });
    }
    return res.status(200).json({ success: true, addressReceived: address });
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
}
