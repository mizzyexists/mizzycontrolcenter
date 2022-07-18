const getSites = async (req, res) => {
    const response = await fetch(`https://api.cloudflare.com/client/v4/zones`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer zDIJ4B_zGHrlPgyRq7GUP61vSvhBm71Nj0kqf2Lf`,
        },
    });
    const sites = await response.json();
    res.json(sites);
}

export default getSites;