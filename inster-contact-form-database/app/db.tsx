import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'mysql-22f53810-techaliraza838-113d.d.aivencloud.com',
    port: 25143, // Port lazmi add karein
    user: "avnadmin",
    password: "AVNS_UOL04zjY5jwbeWTiLbJ", // 'ali@' prefix hata dein agar ye password ka hissa nahi hai
    database: "contactdata",
    ssl: {
        rejectUnauthorized: false // Ye cloud connection ke liye zaroori hai
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});  