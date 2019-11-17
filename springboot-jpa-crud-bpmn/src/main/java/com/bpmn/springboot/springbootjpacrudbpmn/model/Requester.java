package com.bpmn.springboot.springbootjpacrudbpmn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "request")
public class Requester {

    private long id;
    private String requesterName;
    private String productDescription;
    private String productValue;
    private String disapproveDescription;
    private String requestStatus;
 
    public Requester() {
  
    }
 
    public Requester(String requesterName, String productDescription, String productValue, String disapproveDescription, String requestStatus) {
         this.requesterName = requesterName;
         this.productDescription = productDescription;
         this.productValue = productValue;
         this.disapproveDescription = disapproveDescription;
         this.requestStatus = requestStatus;
    }
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
        public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
 
    @Column(name = "requesterName", nullable = false)
    public String getRequesterName() {
        return requesterName;
    }
    public void setRequesterName(String requesterName) {
        this.requesterName = requesterName;
    }
 
    @Column(name = "productDescription", nullable = false)
    public String getProductDescription() {
        return productDescription;
    }
    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
 
    @Column(name = "productValue", nullable = false)
    public String getProductValue() {
        return productValue;
    }
    public void setProductValue(String productValue) {
        this.productValue = productValue;
    }

    @Column(name = "disapproveDescription", nullable = true)
    public String getDisapproveDescription() {
        return disapproveDescription;
    }
    public void setDisapproveDescription(String disapproveDescription) {
        this.disapproveDescription = disapproveDescription;
    }

    @Column(name = "requestStatus", nullable = true)
    public String getRequestStatus() {
        return requestStatus;
    }
    public void setRequestStatus(String requestStatus) {
        this.requestStatus = requestStatus;
    }

    @Override
    public String toString() {
        return "Requester [id=" + id + ", requesterName=" + requesterName + ", productDescription=" 
        + productDescription + ", productValue=" + productValue + ", disapproveDescription=" + disapproveDescription
        + ", requestStatus=" + requestStatus
       + "]";
    }
 
}


