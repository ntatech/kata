package com.kata.gbsuftblai

import org.junit.Test as test
import kotlin.test.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import com.kata.gbsuftblai.services.GbsuFtbLaiService


@SpringBootTest
class GbsuFtbLaiApplicationTests {

    private val service : GbsuFtbLaiService = GbsuFtbLaiService()

    @Test
    fun contextLoads() {
	    assertEquals("1", service.convertNumber("1"));
	    assertEquals("GbsuGbsu", service.convertNumber("3"));
	    assertEquals("FtbFtb", service.convertNumber("5"));
	    assertEquals("Lai", service.convertNumber("7"));
	    assertEquals("Gbsu", service.convertNumber("9"));
	    assertEquals("GbsuFtb", service.convertNumber("51"));
	    assertEquals("FtbGbsu", service.convertNumber("53"));
	    assertEquals("GbsuGbsuGbsu", service.convertNumber("33"));
	    assertEquals("GbsuLai", service.convertNumber("27"));
	    assertEquals("GbsuFtbFtb", service.convertNumber("15"));
    }

}
