package kr.co.rland.rlandboot3.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kr.co.rland.rlandboot3.entity.Member;
import kr.co.rland.rlandboot3.repository.MemberRepository;

//@Service
public class RlandUserDetailService implements UserDetailsService{
    //사용자 정보 제공

    @Autowired
    private MemberRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        Member member = repository.findByUserName(username);
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

        RlandUserDetails user = new RlandUserDetails();
        user.setId(member.getId());
        user.setUsername(member.getUserName());
        user.setPassword(member.getPwd());
        user.setEmail(member.getEmail());
        user.setAuthorities(authorities);


        return user;
    }

}
