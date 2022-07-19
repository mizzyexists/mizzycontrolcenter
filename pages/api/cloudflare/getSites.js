const getSites = async (req, res) => {
    const response = await fetch(`https://api.cloudflare.com/client/v4/zones`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        },
    });
    const sites = await response.json();
    res.json(sites);
}

export default getSites;