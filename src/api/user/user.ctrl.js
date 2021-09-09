async function register(req, res) {
    try {
        await res.send("REGISTER");
    } catch (e) {
        res.status(400).send(e.message)
    }
}

export default {
    register
};