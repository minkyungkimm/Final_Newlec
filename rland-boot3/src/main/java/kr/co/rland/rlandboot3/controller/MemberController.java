package kr.co.rland.rlandboot3.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rland.rlandboot3.entity.Member;
import kr.co.rland.rlandboot3.service.MemberService;

@Controller
@RequestMapping("member")
public class MemberController {
    
    @Autowired
    private MemberService service;

    @GetMapping("index")
    public String index(){
        return "member/index";
    }
    
    
    // @PostMapping("login")
    // public ResponseEntity<Map<String,Object>> isValid(String username,String password){
    //     Map<String,Object> dto = new HashMap<>();
    //     dto.put("result",false);
        
    //     if(service.isValid(username, password)){
    //         Member member = service.getByUserName(username);
    //         dto.put("result", member);
    //         dto.put("roles",new String[]{"ADMIN","TEACHER"});
    //     }

    //     return new ResponseEntity<Map<String,Object>>(dto,HttpStatus.OK);
    // }
}
