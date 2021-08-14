package com.example.JPA.react.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="uservotes")
public class Votes {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String bill_id;
private String vote;
int userid;

public Votes( ) {
	
}

public Votes(int id, String bill_id, String vote, int userid) {
	super();
	this.id = id;
	this.bill_id = bill_id;
	this.vote = vote;
	this.userid = userid;
}


public int getUserid() {
	return userid;
}

public void setUserid(int userid) {
	this.userid = userid;
}

public int getId() {
	return id;
}


public void setId(int id) {
	this.id = id;
}

public String getBill_id() {
	return bill_id;
}

public void setBill_id(String bill_id) {
	this.bill_id = bill_id;
}

public String getVote() {
	return vote;
}

public void setVote(String vote) {
	this.vote = vote;
}



}

