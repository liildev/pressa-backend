const LOGINUSER = `
    SELECT 
    * 
    FROM admins 
    WHERE username = $1 
        AND password = $2`;


const REGISTER = `
    INSERT INTO admins (username, PASSWORD, role)
        VALUES ($1, $2, $3) RETURNING *;
`;


export default {LOGINUSER, REGISTER}