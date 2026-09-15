import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        const {
            name,
            email,
            subject,
            message
        } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                error: 'All fields are required.'
            });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Please provide a valid email address.'
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <contact@tmapara.com>',
            to: ['markmapara@gmail.com'],
            replyTo: email,
            subject: `Portfolio Inquiry: ${subject}`,
            text: `
Name: ${name}
Email: ${email}

Subject:
${subject}

Message:
${message}
            `.trim()
        });

        if (error) {
            console.error('Resend error:', error);

            return res.status(500).json({
                error: 'Failed to send email.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Inquiry sent successfully.',
            id: data?.id
        });

    } catch (error) {
        console.error('Contact API error:', error);

        return res.status(500).json({
            error: 'Something went wrong while sending your inquiry.'
        });
    }
}
