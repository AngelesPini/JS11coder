
let stockPlatos = [
    {id: 1, nombre: "TALLARINES", cantidad: 1, tipo: "Pasta", precio: 500, salsa: "blanca"},
    {id: 2, nombre: "TALLARINES", cantidad: 1, tipo: "Pasta", precio: 500, salsa: "roja"},
    {id: 3, nombre: "TALLARINES", cantidad: 1, tipo: "Pasta", precio: 500, salsa: "mixta"},
    // 
    {id: 25, nombre: "TALLARINES DE ESPINACA", cantidad: 1, tipo: "Pasta", precio: 500, salsa: "mixta"},
    {id: 26, nombre: "TALLARINES DE ESPINACA", cantidad: 1, tipo: "Pasta", precio: 500, salsa: "roja"},
    {id: 27, nombre: "TALLARINES DE ESPINACA", cantidad: 1, tipo: "Pasta", precio: 500, salsa: "blanca"},
    // 
    {id: 4, nombre: "RAVIOLES DE VERDURA", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "blanca"},
    {id: 5, nombre: "RAVIOLES DE VERDURA", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "roja"},
    {id: 6, nombre: "RAVIOLES DE VERDURA", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "mixta"},
    // 
    {id: 28, nombre: "RAVIOLES DE CARNE", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "blanca"},
    {id: 29, nombre: "RAVIOLES DE CARNE", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "roja"},
    {id: 30, nombre: "RAVIOLES DE CARNE", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "mixta"},
    // 
    {id: 31, nombre: "RAVIOLES DE POLLO", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "blanca"},
    {id: 32, nombre: "RAVIOLES DE POLLO", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "roja"},
    {id: 33, nombre: "RAVIOLES DE POLLO", cantidad: 1, tipo: "Pasta", precio: 600, salsa: "mixta"},
    // 
    {id: 7, nombre: "CANELONES DE VERDURA", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "blanca"},
    {id: 8, nombre: "CANELONES DE VERDURA", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "roja"},
    {id: 9, nombre: "CANELONES DE VERDURA", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "mixta"},
    // 
    {id: 34, nombre: "CANELONES DE CHOCLO", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "blanca"},
    {id: 35, nombre: "CANELONES DE CHOCLO", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "roja"},
    {id: 36, nombre: "CANELONES DE CHOCLO", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "mixta"},
    // 
    {id: 37, nombre: "CANELONES DE CARNE", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "blanca"},
    {id: 38, nombre: "CANELONES DE CARNE", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "roja"},
    {id: 39, nombre: "CANELONES DE CARNE", cantidad: 1, tipo: "Pasta", precio: 700, salsa: "mixta"},
    // 
    {id: 10, nombre: "ASADO COMPLETO", cantidad: 1, tipo: "Parrilla", precio: 1000, salsa: "ninguna"},
    {id: 11, nombre: "ASADO COMPLETO", cantidad: 1, tipo: "Parrilla", precio: 1000, salsa: "chimichurri"},
    {id: 12, nombre: "ASADO COMPLETO", cantidad: 1, tipo: "Parrilla", precio: 1000, salsa: "criolla"},
    // 
    {id: 40, nombre: "ACHURAS VARIEDAD", cantidad: 1, tipo: "Parrilla", precio: 1500, salsa: "ninguna"},
    {id: 41, nombre: "TABLA DE ASADO PARA 2", cantidad: 1, tipo: "Parrilla", precio: 1800, salsa: "chimichurri"},
    {id: 42, nombre: "MATAMBRE A LA PIZZA", cantidad: 1, tipo: "Parrilla", precio: 800, salsa: "criolla"},
    // 
    {id: 43, nombre: "POLLO A LA PARRILLA", cantidad: 1, tipo: "Parrilla", precio: 600, salsa: "ninguna"},
    {id: 44, nombre: "POLLO A LA PARRILLA", cantidad: 1, tipo: "Parrilla", precio: 1000, salsa: "chimichurri"},
    {id: 45, nombre: "POLLO A LA PARRILLA", cantidad: 1, tipo: "Parrilla", precio: 1000, salsa: "criolla"},
    // 
    {id: 13, nombre: "EMPANADA DE CARNE", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "ninguna"},
    {id: 14, nombre: "EMPANADA DE CARNE", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "criolla"},
    {id: 15, nombre: "EMPANADA DE CARNE", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "4 quesos"},
    // 
    {id: 46, nombre: "EMPANADA DE J&Q", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "ninguna"},
    {id: 47, nombre: "EMPANADA DE J&Q", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "criolla"},
    {id: 48, nombre: "EMPANADA DE J&Q", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "4 quesos"},
    // 
    {id: 49, nombre: "EMPANADA DE VERDURA", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "ninguna"},
    {id: 50, nombre: "EMPANADA DE VERDURA", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "criolla"},
    {id: 51, nombre: "EMPANADA DE VERDURA", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "4 quesos"},
    // 
    {id: 16, nombre: "EMPANADA DE HUMITA", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "ninguna"},
    {id: 17, nombre: "EMPANADA DE HUMITA", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "roja"},
    {id: 18, nombre: "EMPANADA DE HUMITA", cantidad: 1, tipo: "Entrada", precio: 80, salsa: "criolla"},
    // 
    {id: 19, nombre: "POLLO AL HORNO", cantidad: 1, tipo: "Plato", precio: 400, salsa: "ninguna"},
    {id: 20, nombre: "POLLO AL HORNO", cantidad: 1, tipo: "Plato", precio: 400, salsa: "limón"},
    {id: 21, nombre: "POLLO AL HORNO", cantidad: 1, tipo: "Plato", precio: 400, salsa: "champignones" },
    // 
    {id: 22, nombre: "ENSALADA MIXTA", cantidad: 1, tipo: "Guarnicion", precio: 200, salsa: "caesar"},
    {id: 23, nombre: "ENSALADA MIXTA", cantidad: 1, tipo: "Guarnicion", precio: 200, salsa: "queso"},
    // 
    {id: 52, nombre: "PAPAS FRITAS", cantidad: 1, tipo: "Guarnicion", precio: 350, salsa: "ninguna"},
    {id: 53, nombre: "PAPAS FRITAS", cantidad: 1, tipo: "Guarnicion", precio: 350, salsa: "chedar"},
    {id: 54, nombre: "PAPAS FRITAS", cantidad: 1, tipo: "Guarnicion", precio: 350, salsa: "ranchera"},
    {id: 55, nombre: "PAPAS FRITAS", cantidad: 1, tipo: "Guarnicion", precio: 350, salsa: "panceta y queso"},
    {id: 56, nombre: "PAPAS FRITAS", cantidad: 1, tipo: "Guarnicion", precio: 350, salsa: "verdeo"},
    
]

