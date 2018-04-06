-- 테이블 생성
create table `news` (
	`no` int,
	`title` varchar(50),
	`desc` longtext
)

-- column명 변경 (title -> title2)
alter table `news` change column `title` `title2` varchar(100)
employee


-- 테이블 지우기
drop table `news`
