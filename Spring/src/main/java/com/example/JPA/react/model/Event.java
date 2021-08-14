package com.example.JPA.react.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="events")
public class Event {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String name;
private String email;
private String status;
private String event;
private String starttime;
private String endtime;
private boolean recurring;
private String location;
private String date;
public Event( ) {
	
}

public Event(int id, String event, String date, String starttime, String endtime, String location , String status, boolean recurring, String email, String name) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.date = date;
	this.event = event;
	this.location = location;
	this.recurring = recurring;
	this.status = status;
	this.starttime = starttime;
	this.endtime = endtime;

}


public int getId() {
	return id;
}


public void setId(int id) {
	this.id = id;
}


public String getName() {
	return name;
}


public void setName(String name) {
	this.name = name;
}


public String getEmail() {
	return email;
}


public void setEmail(String email) {
	this.email = email;
}


public String getStatus() {
	return status;
}


public void setStatus(String status) {
	this.status = status;
}


public String getEvent() {
	return event;
}


public void setEvent(String event) {
	this.event = event;
}


public String getStarttime() {
	return starttime;
}


public void setStarttime(String starttime) {
	this.starttime = starttime;
}


public String getEndtime() {
	return endtime;
}


public void setEndtime(String endtime) {
	this.endtime = endtime;
}


public boolean isRecurring() {
	return recurring;
}


public void setRecurring(boolean recurring) {
	this.recurring = recurring;
}


public String getLocation() {
	return location;
}


public void setLocation(String location) {
	this.location = location;
}


public String getDate() {
	return date;
}


public void setDate(String date) {
	this.date = date;
}
}

