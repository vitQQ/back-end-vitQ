const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'postmessage'
);

exports.getProfileInfo = async googleProfile => {
    // untuk mendapatkan token
    const res = await client.getToken(googleProfile);
    const idToken = res.tokens.id_token;

    const ticket = await client.verifyIdToken({
        idToken,
        audience:process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    return payload
}