package kr.co.rland.rlandboot3.auth;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class RlandUserDetails implements UserDetails{
//사용자 정보를 담는 그릇
//원하는 속성 다 만들면 돼

    private int id;
    private String username;
    private String password;
    private String email;
    private List<GrantedAuthority> authorities;

    public int getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setAuthorities(List<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    @Override
    public String getPassword() {
        return password;
    }
    @Override
    public String getUsername() {
        return username;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public String toString() {
        return "RlandUserDetails [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
                + ", authorities=" + authorities + "]";
    }
    
}
