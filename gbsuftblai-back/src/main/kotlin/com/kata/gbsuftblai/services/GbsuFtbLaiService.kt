package com.kata.gbsuftblai.services

import org.springframework.stereotype.Component

@Component
class GbsuFtbLaiService {

    fun convertNumber(inputNumber: String): String {
    	val inputAsInt = inputNumber.toInt()
    	var result = ""
    	if(inputAsInt%3 == 0) {
     	   result += "Gbsu"
    	}
    	if(inputAsInt%5 == 0) {
        	result += "Ftb"
    	}
    	for (i in 0..inputNumber.length-1) {
        	if(inputNumber[i] == '3') {
            	result += "Gbsu"
        	} else if(inputNumber[i] == '5') {
            	result += "Ftb"
        	} else if(inputNumber[i] == '7') {
            	result += "Lai"
        	}
    	}
    	if(result == "") {
        	result = inputNumber
    	}
    	return result
    }

}