drop database if exists pressa;
create database pressa;


drop table if exists admins;
create table admins(
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null
);

drop table if exists posts;
create table posts(
    post_id serial primary key,
    creator_name varchar(50) not null,
    creator_profession varchar(60) not null,
    creator_tel varchar(9) not null,
    creator_tel2 varchar(9) not null,
    conference_date timestamp not null,
    conference_category varchar(50) not null,
    conference_type varchar(10) not null,
    conference_link text default null,
    post_title varchar(200) not null,
    post_desc text not null,
    post_image text not null,
    post_full_description text not null,
    status varchar(50) default 'undefined'
);