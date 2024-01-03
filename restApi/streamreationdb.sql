drop database if exists streamreactionerdb;
create database if not exists streamreactionerdb charset utf8mb4;
use streamreactionerdb;

create table users(
	id_user INT UNSIGNED auto_increment,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(45) UNIQUE NOT NULL,
    passwd VARCHAR(30) NOT NULL,
    userrole enum('admin', 'user') DEFAULT 'user',
    CONSTRAINT pk_userid PRIMARY KEY(id_user)
);

create table videos(
	id_video INT UNSIGNED auto_increment,
    video_url VARCHAR(255),
    description_video VARCHAR(15) NOT NULL,
    CONSTRAINT pk_id_video primary key(id_video)
);