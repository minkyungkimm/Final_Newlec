package kr.co.rland.rlandboot3.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import kr.co.rland.rlandboot3.entity.Member;
import kr.co.rland.rlandboot3.repository.MemberRepository;

@Service
public class DefaultMemberService implements MemberService {
    
    @Autowired
    private MemberRepository repository;

    @Override
    public boolean isValid(String username,String password){
        //Optional<Member> member = repository.findById(1);

        //new BcryptPasswordEncoder();.encode()

        Member member = repository.findByUserName(username);
        System.out.println(member.toString());

        if(member == null)
            return false;
        else if(!BCrypt.checkpw(password, member.getPwd()))
            return false;
        else
            return true;
    }

    @Override
    public Member getByUserName(String username) {
        return repository.findByUserName(username);
    }
}
