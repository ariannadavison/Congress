package main.java.com.example.JPA.react.controller;
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
import com.example.JPA.react.model.Users;
import com.example.JPA.react.model.Votes;
import com.example.JPA.react.repository.UsersRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class UsersController {
	@Autowired
	private UsersRepository UsersRepository;
	
	@GetMapping("/Users")
public List<Users> getAllUsers()
{
	return UsersRepository.findAll();
	
}
	
	@GetMapping("users/{username}")
	public ResponseEntity<List<Users>> getByUser_name(@PathVariable  String username) {
		List<Users> s  = UsersRepository.findByUsername(username);
		return ResponseEntity.ok(s);
	}
@PostMapping("/users")
public Users newUsers(@RequestBody Users s) {
	return UsersRepository.save(s);
	
}

@PutMapping("/users/{id}")
public void putUsers(@PathVariable int id, @RequestBody Users Users1 ) {
    Users1 = new Users();
    Users1.setId(id);
    Users1.setUser_password(Users1.getUser_password());
    Users1.setUsername(Users1.getUsername());
    Users1.setUser_votes(Users1.getUser_votes());
    Users1.setUser_history(Users1.getUser_history());
   
    

    UsersRepository.save(Users1);
}

@DeleteMapping("Users/{id}")
public String deleteUsers(@PathVariable int id) {
	UsersRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Users not found"));
	UsersRepository.deleteById(id);
	return "Users deleted:" + id ;
}
}