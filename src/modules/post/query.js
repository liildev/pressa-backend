export const POST = `insert into posts 
(creator_name, 
creator_profession, 
creator_tel, 
creator_tel2, 
conference_date, 
conference_category, 
conference_type, 
conference_link, 
post_title, 
post_desc, 
post_image, 
post_full_description) 
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *`


export const PUT = `
  update posts set status = 'active' where post_id = $1 returning *
`

export const DELETE = `
update posts set status = 'deleted' where post_id = $1 returning *`
