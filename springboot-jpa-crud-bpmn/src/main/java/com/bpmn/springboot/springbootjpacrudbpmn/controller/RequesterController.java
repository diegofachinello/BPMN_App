package com.bpmn.springboot.springbootjpacrudbpmn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bpmn.springboot.springbootjpacrudbpmn.exception.ResourceNotFoundException;
import com.bpmn.springboot.springbootjpacrudbpmn.model.Requester;
import com.bpmn.springboot.springbootjpacrudbpmn.repository.RequesterRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController 
@RequestMapping("/api/v1")
public class RequesterController {
    @Autowired
    private RequesterRepository requesterRepository;

    @GetMapping("/request")
    public List<Requester> getAllRequest() {
        return requesterRepository.findAll();
    }

    @GetMapping("/request/{id}")
    public ResponseEntity<Requester> getRequesterById(@PathVariable(value = "id") Long requesterId)
        throws ResourceNotFoundException {
        Requester requester = requesterRepository.findById(requesterId)
          .orElseThrow(() -> new ResourceNotFoundException("Requester not found for this id :: " + requesterId));
        return ResponseEntity.ok().body(requester);
    }
    
    @PostMapping("/request")
    public Requester createRequester(@Valid @RequestBody Requester requester) {
        return requesterRepository.save(requester);
    }

    @PutMapping("/request/{id}")
    public ResponseEntity<Requester> updateRequester(@PathVariable(value = "id") Long requesterId,
         @Valid @RequestBody Requester requesterDetails) throws ResourceNotFoundException {
        Requester requester = requesterRepository.findById(requesterId)
        .orElseThrow(() -> new ResourceNotFoundException("Requester not found for this id :: " + requesterId));

        requester.setRequesterName(requesterDetails.getRequesterName());
        requester.setProductDescription(requesterDetails.getProductDescription());
        requester.setProductValue(requesterDetails.getProductValue());
        requester.setDisapproveDescription(requesterDetails.getDisapproveDescription());
        requester.setRequestStatus(requesterDetails.getRequestStatus());
        final Requester updatedRequester = requesterRepository.save(requester);
        return ResponseEntity.ok(updatedRequester);
    }

    @DeleteMapping("/request/{id}")
    public Map<String, Boolean> deleteRequester(@PathVariable(value = "id") Long requesterId)
         throws ResourceNotFoundException {
        Requester requester = requesterRepository.findById(requesterId)
       .orElseThrow(() -> new ResourceNotFoundException("Requester not found for this id :: " + requesterId));

        requesterRepository.delete(requester);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}