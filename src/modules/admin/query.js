const LOGINUSER = `
    SELECT 
    * 
    FROM admins 
    WHERE username = $1 
        AND password = $2`;

export default { LOGINUSER };
