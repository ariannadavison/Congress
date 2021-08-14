package com.example.JPA.react.controller;
import java.util.List;
import java.util.Optional;

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

import com.example.JPA.react.exception.ResourceNotFoundException;
import com.example.JPA.react.model.Event;
import com.example.JPA.react.repository.EventRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class EventController {
	@Autowired
	private EventRepository eventRepository;
	
	@GetMapping("/events")
public List<Event> getAllEvents()
{
	return eventRepository.findAll();
	
}
	@GetMapping("/event/{date}")

	public List<Event> getEventsByDate(@PathVariable  String date) {
		
		return eventRepository.findByDate(date);
	}
	@GetMapping("events/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable  int id) {
		Event s  = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Event not found"));
		return ResponseEntity.ok(s);
	}
	
@PostMapping("/addevent")
public Event newEvent(@RequestBody Event s) {
	return eventRepository.save(s);
	
}
//@PutMapping("events/{id}")
//public void update(@PathVariable Event s) {
//Event eventupdate = eventRepository.getById(id);
//}
@PutMapping("/event/{id}")
public void putEvent(@PathVariable int id, @RequestBody Event event1 ) {
    Event event = new Event();

    event.setId(id);
    event.setName(event1.getName());
    event.setEmail(event1.getEmail());
    event.setDate(event1.getDate());
    event.setLocation(event1.getLocation());
    event.setStatus(event1.getStatus());
    event.setStarttime(event1.getStarttime());
    event.setEndtime(event1.getEndtime());
    event.setEvent(event1.getEvent());

    eventRepository.save(event);
}

@DeleteMapping("event/{id}")
public String deleteEvent(@PathVariable int id) {
	eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Event not found"));
	eventRepository.deleteById(id);
	return "Event deleted:" + id ;
}
}