export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    const { stars, price, user } = req.body

    if (!stars || !price) {
      return res.status(400).json({
        success: false,
        message: 'Stars yoki narx mavjud emas'
      })
    }

    const botToken = process.env.BOT_TOKEN
    const adminChatId = process.env.BUYER_CHAT_ID

    if (!botToken) {
      return res.status(500).json({
        success: false,
        message: 'BOT_TOKEN topilmadi'
      })
    }

    if (!adminChatId) {
      return res.status(500).json({
        success: false,
        message: 'BUYER_CHAT_ID topilmadi'
      })
    }

    const firstName = user?.first_name || 'Nomaʼlum'

    const username = user?.username
      ? `@${user.username}`
      : '-'

    const userId = user?.id || '-'

    const text = `
⭐ <b>YANGI STARS BUYURTMASI</b>

━━━━━━━━━━━━━━

⭐ <b>Stars:</b> ${stars}
💰 <b>Narx:</b> ${Number(price).toLocaleString('uz-UZ')} so'm

━━━━━━━━━━━━━━

👤 <b>Mijoz:</b> ${firstName}
🔗 <b>Username:</b> ${username}
🆔 <b>User ID:</b> <code>${userId}</code>

━━━━━━━━━━━━━━

🟡 <b>Holat:</b> Yangi buyurtma
`

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: adminChatId,
          text,
          parse_mode: 'HTML'
        })
      }
    )

    const telegramData = await telegramResponse.json()

    if (!telegramData.ok) {
      return res.status(500).json({
        success: false,
        message: 'Telegram xabar yuborilmadi',
        telegram: telegramData
      })
    }

    return res.status(200).json({
      success: true
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      success: false,
      message: 'Server xatosi'
    })
  }
}