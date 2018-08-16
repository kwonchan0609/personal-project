insert into vlogs
(user_id, date, heading, vlog_string)
values
($1, $2, $3, $4)
RETURNING *;