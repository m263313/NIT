/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function(req, res) {
    res.render('mainPage', {
<<<<<<< HEAD
        pageTitle: 'НІТ'
    });
};

/*exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Оформлення замовлення'
    });
};*/
=======
        pageTitle: 'Вибір Піци'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Оформлення замовлення'
    });
};
>>>>>>> 57a8a0e92779d38c50c4e900c67f20fdb36b435b
