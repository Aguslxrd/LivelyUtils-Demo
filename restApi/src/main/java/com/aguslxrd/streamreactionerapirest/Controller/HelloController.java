package com.aguslxrd.streamreactionerapirest.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//test controller
@RestController
@RequestMapping("/api/v1/greeting")
public class HelloController {
    @GetMapping("/sayhellopublic")
    public String sayHello(){
        return "hello test from api";

    }

    @GetMapping("/sayhelloprotected")
    public String sayHelloProtected(){
        return "hello test from api protected";

    }
}
