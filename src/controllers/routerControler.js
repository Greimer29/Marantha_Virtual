const controller = {};

controller.landing = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM guias', (err, guia) => {
            if (err) {
                res.json(err);
            }
            res.render('index', {
                data: guia
            })
        });
    });
};

controller.castellano1y2 = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM guias', (err, guia) => {
            res.render('index', {
                data: guia
            })
        })
    })
}

module.exports = controller;