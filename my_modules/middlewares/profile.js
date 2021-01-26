const users = require('../database/users');

const profile = {
    //TODO function to verify if user is logged in. If true, call the display function. else, return an error "you do not have permission to access to this section. Please log in and retry".


    display: (request, response) => {

        const userID = parseInt(request.params.id);
        
        const userProfile = users.find(user => user.id === userID);

        response.render('profile', {userProfile});
        
    }
}

module.exports = profile;