export async function findUserById(userId) {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    
    return response.json();
}

// Exportar uma função usando o ES6 (Moderno)