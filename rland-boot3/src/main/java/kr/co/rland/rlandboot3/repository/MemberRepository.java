package kr.co.rland.rlandboot3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kr.co.rland.rlandboot3.entity.Member;

public interface MemberRepository extends JpaRepository<Member,Integer> {

    //userName 대문자는 언더바로 바뀜
    //-> select * from member where user_name = 'newlec'
    //복잡한 쿼리면 mybatis 사용 / 프론트에서 다 처리할거면 jpa(ajax많이 쓰기)
    //객체 기반으로 쿼리 만들기(JPA)
    @Query("from Member where userName = :username")
    Member findByUserName(String username);
    
}
