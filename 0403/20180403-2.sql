update member set name = '김태리' where name = '김태희';
update member set email = 'insung@naver.com' where name = '조인성';
update member set authcode = 2 where name in ('손예진', '최민식');
update board set content = 'hello mariadb' where no = 5;
update auth set authority = '승인대기' where authority = '예비회원';

start transaction;
delete from member;
commit;
rollback;



select position from basicsalary
	where salary = (select max(salary) from basicsalary);
	
select * from member2 where position in (
	select position from basicsalary where salary >= 7000
	);
	