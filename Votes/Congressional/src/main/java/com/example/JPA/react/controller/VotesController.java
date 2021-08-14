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
import com.example.JPA.react.model.Votes;
import com.example.JPA.react.repository.VotesRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class VotesController {
	@Autowired
	private VotesRepository VotesRepository;
	
	@GetMapping("/Votes")
public List<Votes> getAllVotes()
{
	return VotesRepository.findAll();
	
}
	
	@GetMapping("votes/{userid}")
	public ResponseEntity<List<Votes>> getVotesById(@PathVariable  int userid) {
	List<Votes> s  = VotesRepository.findByUserid(userid);
	return ResponseEntity.ok(s);

	}
	
@PostMapping("/votes")
public Votes newVotes(@RequestBody Votes s) {
	return VotesRepository.save(s);
	
}
//@PutMapping("Votes/{id}")
//public void update(@PathVariable Votes s) {
//Votes Votesupdate = VotesRepository.getById(id);
//}
@PutMapping("/uservotes/{id}")
public void putVotes(@PathVariable int id, @RequestBody Votes Votes1 ) {
    Votes Votes = new Votes();
    Votes.setId(id);
    Votes.setBill_id(Votes1.getBill_id());
    Votes.setVote(Votes1.getVote());
   
    

    VotesRepository.save(Votes);
}

//@DeleteMapping("votes/{id}")
//public String deleteVotes(@PathVariable int id) {
//	VotesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Votes not found"));
//	VotesRepository.deleteById(id);
//	return "Votes deleted:" + id ;
//}
}