package com.codescapex.codescapex_backend.service;

import org.springframework.stereotype.Service;

import com.codescapex.codescapex_backend.entity.Enquiry;
import com.codescapex.codescapex_backend.repository.EnquiryRepository;

@Service
public class EnquiryService {
	
	
	 private final EnquiryRepository enquiryRepository;

	    public EnquiryService(EnquiryRepository enquiryRepository) {
	        this.enquiryRepository = enquiryRepository;
	    }

	    public Enquiry saveEnquiry(Enquiry enquiry) {
	        return enquiryRepository.save(enquiry);
	    }

}
