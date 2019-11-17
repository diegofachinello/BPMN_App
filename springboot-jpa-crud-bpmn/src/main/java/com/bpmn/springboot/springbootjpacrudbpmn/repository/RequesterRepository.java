package com.bpmn.springboot.springbootjpacrudbpmn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bpmn.springboot.springbootjpacrudbpmn.model.Requester;

@Repository
public interface RequesterRepository extends JpaRepository<Requester, Long>{

}