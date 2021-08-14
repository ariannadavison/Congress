package com.example.JPA.react.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.JPA.react.model.Users;
import java.util.List;
import java.util.Optional;
@Repository
public interface UsersRepository extends JpaRepository<Users,String>{
	

	List<Users> findByUsername(String username);

	Optional<Users> findById(int id);

	void deleteById(int id);
}
