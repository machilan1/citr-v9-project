
export default async function postContact(name, email, message) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })

    if (!response.ok) {
        throw new Error('Failed to post contact')
    }

    return response.json()
}