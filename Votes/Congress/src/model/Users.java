package com.example.JPA.react.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;


@Entity
@Table(name="users")
public class Users {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)

private int id;
private String username;
private String user_votes;
private String user_history;
private String user_password;

public Users( ) {
	
}

public Users(int id, String username, String user_password,String user_votes, String user_history) {
	super();
	this.id = id;
	this.username = username;
	this.user_password = user_password;
	this.user_votes = user_votes;
	this.user_history = user_history;
}

public String getUsername() {
	// TODO Auto-generated method stub
	return username;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getUser_votes() {
	return user_votes;
}

public void setUser_votes(String user_votes) {
	this.user_votes = user_votes;
}

public String getUser_history() {
	return user_history;
}

public void setUser_history(String user_history) {
	this.user_history = user_history;
}

public String getUser_password() {
	return user_password;
}

public void setUser_password(String user_password) {
	this.user_password = user_password;
}

public void setUsername(String username) {
	this.username = username;
}


}