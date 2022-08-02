DROP DATABASE IF EXISTS pressa;

CREATE DATABASE pressa;

DROP TABLE IF EXISTS admins;

CREATE TABLE admins (
    admin_id serial PRIMARY KEY,
    username varchar(32) NOT NULL,
    password varchar(60) NOT NULL,
    role varchar(20) DEFAULT 'USER'
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    post_id serial PRIMARY KEY,
    creator_name varchar(50) NOT NULL,
    creator_profession varchar(60) NOT NULL,
    creator_tel varchar(9) NOT NULL,
    creator_tel2 varchar(9) NOT NULL,
    conference_date timestamp NOT NULL,
    conference_category varchar(50) NOT NULL,
    conference_type varchar(10) NOT NULL,
    conference_link text DEFAULT NULL,
    post_title varchar(200) NOT NULL,
    post_desc text NOT NULL,
    post_image text NOT NULL,
    post_full_description text NOT NULL,
    status varchar(50) DEFAULT 'undefined'
);

