select count(*) '사원수' from member where position = '사원';
select count(*) '과장수' from member where position = '과장';
select count(*) '연차5년이상수' from member where year >= 5;
select count(*) '번호1005미만수' from member where no < 1005;
select count(distinct(position)) '직급전체수' from basicsalary;

-- select count(*) ('헤더명') from 테이블명 where 조건
-- distinct(컬럼명): 중복되는 자료는 하나로 인식


select now();
-- 현재 시각 표시

select * from member order by no;
select * from member order by year;
-- 자료 정렬 (order by 컬럼명)