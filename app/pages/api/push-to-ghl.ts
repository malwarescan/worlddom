// pages/api/push-to-ghl.ts

import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  message?: string
  data?: any
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const body = req.body

    // Log incoming data for debugging
    console.log('📦 Incoming push-to-ghl data:', body)

    // Example validation
    if (!body.fullName || !body.email || !body.businessName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      })
    }

    // TODO: Replace with actual logic to push to GHL API
    // const response = await fetch('https://api.gohighlevel.com/v1/...', {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${process.env.GHL_API_KEY}` },
    //   body: JSON.stringify(body),
    // })

    return res.status(200).json({
      success: true,
      message: 'Mock: Data received and would be sent to GHL',
      data: body,
    })
  } catch (err: any) {
    console.error('❌ Error in push-to-ghl:', err)
    return res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}