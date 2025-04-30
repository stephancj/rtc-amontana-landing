// pages/api/redeploy.js
export default async function handler(req, res) {
    const webhookUrl = 'https://api.vercel.com/v1/integrations/deploy/prj_MR2wT4VhiduEwdUPa328S1tC4ZCu/QKyrTe1yPt';
  
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Failed to trigger redeploy');
      }
  
      res.status(200).json({ message: 'Redeploy triggered' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Redeploy failed' });
    }
  }
  