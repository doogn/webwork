update member set year = year + 1;
update member set name = '이만수' where name = '이천수';
update member set position = '대리' where name in ('이철수', '차범근');
update member set position = '차장' where name = '지소연';
update basicsalary set salary = salary + 1500 where position in ('부장', '차장');
update basicsalary set salary = salary + 1000 where position in ('과장', '대리', '사원');
update basicsalary set position = '주임' where position = '사원';



alter table `news` add column `category` varchar(50);

update news set category = 'IT' where no = 1;
-- update 테이블명 set 컬럼명 = '수정할 값' where 조건
