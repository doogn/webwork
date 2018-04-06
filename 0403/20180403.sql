select * from board order by no asc;
select * from board order by no desc;
select * from board order by no asc, regdate desc;
select * from board order by no desc, regdate asc;
select count(*) '사람 수' from member where authcode in (2, 3);
select count(*) '사람 수' from member where no >=1 && no <7 && authcode = 2;
select left(name, 1) '성' from member;
select concat(title, " : ", content) '본문' from board;
select right(name,2) '이름' from member;