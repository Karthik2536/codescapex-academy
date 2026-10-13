package com.codescapex.codescapex_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codescapex.codescapex_backend.entity.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {

}
