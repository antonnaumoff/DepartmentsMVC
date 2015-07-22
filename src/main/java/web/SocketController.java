package web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SocketController {

    @RequestMapping("/socket.html")
    public String redirect(){
        return "socket";
    }

}
