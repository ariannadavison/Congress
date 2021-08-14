package com.example.JPA.react.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.JPA.react.model.Event;
import java.util.List;
@Repository
public interface EventRepository extends JpaRepository<Event,Integer>{
	List<Event> findByDate(String date);
}
