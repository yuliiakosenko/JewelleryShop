// Initialize an array to store user data
const users = [];

// Function to create a new user and store it in the users array
function createUser(username, password) {
    users.push({ username, password });
    console.log(users); // Log the current state of the users array
}

function authenticateUser(username, password) {
    //find the user by userbame in the array
    const user = users.find(user => user.username === username)

    if (!user || user.password !== password)
    {
        return false;
    }
    return true;
}


// Export the createUser and authenticateUser functions for use in other modules
module.exports = {createUser, authenticateUser};