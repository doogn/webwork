select * from member;
select * from basicsalary;
select * from member where no = 1004;
select * from basicsalary where position = '과장' or position = '차장';
select * from member where position = '사원';
select * from member where year >= 10;
select salary, position from basicsalary where salary < 5000;
select * from member where year < 10 and position = '대리';

-- select 컬럼명 from 테이블명 where 조건

-- 컬럼명, 테이블명, 조건절 속 컬럼명은 `  `로 묶지 않고 그냥 입력해도 괜찮은 듯?