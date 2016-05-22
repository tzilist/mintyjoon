function test(req, res) {
    if (req.body.userName === 'iluvpool19') {
        req.body.pinHold = true;
        User.create(req.body, function(err, data) {
            if (err) {
                // throw err
                return res.status(500).send('showAlert');
            }
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(data.password, salt);
            data.password = hash;
            res.cookie('SSID', data.id);
            sessionController.startSession(req, res, data._id);
            data.save();

            return res.send({
                redirect: '/profile?id=' + data.id
            });
        });
    }
}
