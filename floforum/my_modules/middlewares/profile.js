
const profile = {

    findUser: (id, callback) => {

        // In order to be sure id is a number, let parseint it
        const userID = parseInt(id);
        // Find the user informations in the database with its ID
        const query = `SELECT * FROM user WHERE id = ${userID};`;

        // The error or results will be managed by the callback function so we just pass it to the callback
        client.query(query, (error, data) => {
                callback(error, data);
        });
    },
    
    display: (request, response) => {


        const userID = parseInt(request.params.id);

        // Check if the user is Logged : if he is, call findUser function, if he is not, redirect him to the login page
        // TODO màj du test en fonction du login de Julien

        if (request.session.login === true) {

            profile.findUser(userID, (error, data) => {

                // If everything is OK, render the myProfile page
                if (error === null && data.rows.length > 0) {
                    response.render('myProfile', {
                        userInfo: data.rows[0],
                    });
                } 
                // Else, redirect the user to the login page
                else {
                    response.redirect('/login');
                }
            });
        }
        else {
            response.redirect('/login');
        }
        
    }
};

module.exports = profile;