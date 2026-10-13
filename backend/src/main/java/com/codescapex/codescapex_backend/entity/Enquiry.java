package com.codescapex.codescapex_backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "enquiries")
@Setter
@Getter
public class Enquiry {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(nullable = false)
	    private String name;

	    @Column(nullable = false)
	    private String role;

	    @Column(name = "institution_name", nullable = false)
	    private String institutionName;

	    @Column(nullable = false)
	    private String email;

	    private String phone;

	    @Column(nullable = false)
	    private String program;

	    private String students;

	    @Column(columnDefinition = "TEXT")
	    private String message;

	    @Column(name = "created_at",
	            insertable = false, updatable = false)
	    private LocalDateTime createdAt;
	 

}
