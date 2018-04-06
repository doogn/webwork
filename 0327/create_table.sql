create table `member` (
	`no` int,
	`id` varchar(20),
	`name` varchar(30),
	`pass` varchar(20),
	`email` varchar(30),
	`authcode` int,
	`regDate` timestamp,
	`lastConnectTime` timestamp
)

create table `board` (
	`no` int,
	`id` varchar(20),
	`title` varchar(50),
	`content` longtext,
	`regdate` timestamp,
	`lastUpdate` timestamp
)

create table `auth` (
	`authcode` int,
	`authority` varchar(20)
)