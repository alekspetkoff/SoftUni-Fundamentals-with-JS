function login(input) {

    let username = input[0];
    let password = "";
    let index = 0;
    for (let i = username.length - 1; i >= 0; i--) {
        password = password + username[i];
    }
    while (true) {
        index++;
        if (index == 4) {
            console.log(`User ${username} blocked!`); break;
        } else if (input[index] == password) {
            console.log(`User ${username} logged in.`); break;
        } else if (input[index] != password) {
            console.log(`Incorrect password. Try again.`);
        }
    }
}
login(['sunny','rainy','cloudy','sunny', 'not sunny']);
