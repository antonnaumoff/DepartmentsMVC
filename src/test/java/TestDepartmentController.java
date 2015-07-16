import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import service.DataService;


@ContextConfiguration({
        "classpath:applicationContext.xml",
        "classpath:mvc-core-config.xml",
        "classpath:spring-security.xml"
})

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration

public class TestDepartmentController {

    @Autowired
    private WebApplicationContext applicationContext;

    private MockMvc mockMvc;

    @Autowired
    private DataService dataService;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(applicationContext).build();
    }

    @Test
    public void add() throws Exception {

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders.get("/departments/list.html");
        ResultActions result = mockMvc.perform(request);
        result.andExpect(MockMvcResultMatchers.view().name("departmentList"));
        result.andExpect(MockMvcResultMatchers.model().attributeExists("department"));
        result.andReturn();


    }


}
