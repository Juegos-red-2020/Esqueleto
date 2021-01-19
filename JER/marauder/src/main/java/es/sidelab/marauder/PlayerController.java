package es.sidelab.marauder;

import java.util.*;
import java.io.*;
import java.sql.Timestamp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class PlayerController {

	private List<Player> playerList = new ArrayList<>();
	private List<String> playerNames = new ArrayList<>();
	private Timestamp updateTime= new Timestamp(System.currentTimeMillis());;
	private int id;
	
	private void readList() {
		
		updateTime= new Timestamp(System.currentTimeMillis());;
		if(!playerList.isEmpty())
		for (int i = 0; i < playerList.size(); i++) {

			if (updateTime.getTime() - playerList.get(i).getLastTimeConnected().getTime() > 5000) {
	
				playerList.remove(i);
			}
			/*
for(int j=0;j<playerList.size();j++) {
	
	
	
	playerList.get(j).setId(playerList.get(j).getId()-1);
}*/
		}

	}
	
	
	private void readNames() {
		if(!playerList.isEmpty())
		for (int i = 0; i < playerList.size(); i++) {

			playerNames.add(playerList.get(i).getName());

		}

	}

	@GetMapping("/players")
	public List<String> players() {
		
		playerNames.clear();
		
		readList();
		readNames();
		
		return playerNames;
	}
	@GetMapping("/players/lastTime/{id}")
	public Timestamp getLastTime(@PathVariable int id) {
		updateTime=new Timestamp(System.currentTimeMillis());
		if(!playerList.isEmpty())
		for(int i=0;i<playerList.size();i++) {
			
			if(playerList.get(i).getId()==id){
				playerList.get(i).setLastTimeConnected(updateTime);
				return playerList.get(i).getLastTimeConnected();
			}
			
				
		}
		
		return null;
		
		
		
	}

	@PostMapping("/players")
	public int addPlayer(@RequestBody Player player) {

		//Timestamp t=new Timestamp(System.currentTimeMillis());
		//player.setLastTimeConnected(t);
		player.setId(id);
		playerList.add(player);
		
	
		id++;
		

		return player.getId();
	}
	
	/*
	@PutMapping("/players/{id}")
	public ResponseEntity<Boolean> addTime(@PathVariable int id, @RequestBody Timestamp t) {
System.out.println(t.getTime());
if(!playerList.isEmpty())
		for(int i=0;i<playerList.size();i++) {
			
			if(playerList.get(i).getId()==id) {
				playerList.get(i).setLastTimeConnected(t);
			}
			
		}

		
		
		
		return new ResponseEntity<>(true, HttpStatus.OK);
	}
	*/
	
	
}
