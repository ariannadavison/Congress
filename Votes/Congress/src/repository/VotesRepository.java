package com.example.JPA.react.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.JPA.react.model.Users;
import com.example.JPA.react.model.Votes;
import java.util.List;
import java.util.Optional;
@Repository
public interface VotesRepository extends JpaRepository<Votes,Integer>{
//	List<Votes> findByName(String name);
	List<Votes> findByUserid(int userid);

	Optional<Votes> findById(int id);
}
