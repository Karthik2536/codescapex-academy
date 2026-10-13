package com.codescapex.codescapex_backend.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codescapex.codescapex_backend.entity.Enquiry;
import com.codescapex.codescapex_backend.service.EnquiryService;


@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = {
    "https://codescapex-academy.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000"
})
public class EnquiryController {
	
	private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<?> submitEnquiry(
            @RequestBody Enquiry enquiry) {

        if (enquiry.getName() == null
                || enquiry.getName().isBlank()
                || enquiry.getRole() == null
                || enquiry.getRole().isBlank()
                || enquiry.getInstitutionName() == null
                || enquiry.getInstitutionName().isBlank()
                || enquiry.getEmail() == null
                || enquiry.getEmail().isBlank()
                || enquiry.getProgram() == null
                || enquiry.getProgram().isBlank()) {

            return ResponseEntity.badRequest().body(
                Map.of("message",
                    "Please fill in all required fields.")
            );
        }

        Enquiry saved = enquiryService.saveEnquiry(enquiry);

        return ResponseEntity.status(HttpStatus.CREATED).body(
            Map.of(
                "message", "Enquiry saved successfully.",
                "id", saved.getId()
            )
        );
        
    }

}
