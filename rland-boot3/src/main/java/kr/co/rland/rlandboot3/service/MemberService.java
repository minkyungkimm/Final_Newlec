package kr.co.rland.rlandboot3.service;

import kr.co.rland.rlandboot3.entity.Member;

public interface MemberService {
    boolean isValid(String username,String password);

    Member getByUserName(String username);
}
