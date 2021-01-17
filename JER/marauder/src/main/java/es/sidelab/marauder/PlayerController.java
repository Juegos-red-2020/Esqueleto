package es.sidelab.marauder;

import java.util.*;
import java.io.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class PlayerController {
	
	
	private List<String> playerList=new ArrayList<>();

	
	
	@GetMapping("/players")
	public List<String> players() {
		
		
		
		return playerList;
	}
	
	@PostMapping("/players")
	public ResponseEntity<Boolean> addPlayer(@RequestBody String player){
		
		
		playerList.add(player);

		return new ResponseEntity<>(true,HttpStatus.CREATED);
	}
	/*
	@PostMapping("/players/{name}")
	public boolean connected(@PathVariable String name){
		
		
		return true;
		
		
	};
	*/
}
