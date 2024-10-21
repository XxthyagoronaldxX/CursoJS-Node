const users = [
    {
        id: 1,
        name: "Thyago",
        age: 18,
        email: "thyagoemail",
        telefone: "thyagotelefone"
    },
    {
        id: 2,
        name: "Kaleo",
        age: 20,
        email: "kaleoemail",
        telefone: "kaleotelefone"
    },
    {
        id: 3,
        name: "Ronaldo",
        age: 28,
        email: "ronaldoemail",
        telefone: "ronaldotelefone"
    },
    {
        id: 4,
        name: "Emilly",
        age: 16,
        email: "emillyemail",
        telefone: "emillytelefone"
    }
];

function filterUsersByAgeHigherThan18(user) {
    return user.age > 18;
}

function mapUsersToNameAndAge(user) {
    return {
        name: user.name,
        age: user.age,
    }
}

function orderByAge(userA, userB) {
    return userA.age - userB.age;
}

function userAgeAverage(acc, value) {
    return acc + value.age;
}

function processList(users) {
    const usersProcessed = users.filter(filterUsersByAgeHigherThan18)
        .map(mapUsersToNameAndAge)
        .sort(orderByAge);

    const ageAverage = usersProcessed.reduce(userAgeAverage, 0) / usersProcessed.length;

    return {
        users: usersProcessed,
        ageAverage,
    }
}

console.log(processList(users));