let access = false

function setAccess(req, res) {
    access = !access;
    return res.status(200).json({access: access})
}
function accessListener(req, res) {
    return res.status(200).json({access: access})
}

module.exports = {
    setAccess,
    accessListener
}