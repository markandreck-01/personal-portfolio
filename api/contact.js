export default async function handler(req, res) {
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

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                error: 'All fields are required.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Form received successfully.'
        });

    } catch (error) {
        console.error('Contact API error:', error);

        return res.status(500).json({
            error: 'Something went wrong.'
        });
    }
}
