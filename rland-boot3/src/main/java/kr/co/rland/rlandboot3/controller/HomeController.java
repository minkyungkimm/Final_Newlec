package kr.co.rland.rlandboot3.controller;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
    
    @GetMapping("index")
    public String index(Principal principal){
        System.out.println(principal.getName());
        return "index";
    }
}
