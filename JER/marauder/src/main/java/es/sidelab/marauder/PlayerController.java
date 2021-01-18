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
	private Timestamp updateTime= new Timestamp(System.currentTimeMillis());
	private int id=0;
	
	private void readList() {
		
	
		for (int i = 0; i < playerList.size(); i++) {

			if (updateTime.getTime() - playerList.get(i).getLastTimeConnected().getTime() > 4) {

				playerList.remove(i);

			}

		}

	}
	
	
	private void readNames() {

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

	@PostMapping("/players")
	public ResponseEntity<Boolean> addPlayer(@RequestBody Player player) {

		player.setId(id);
		id++;
		playerList.add(player);

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	
	@PutMapping("/players/{nombre}")
	public ResponseEntity<Boolean> addTime(@PathVariable String nombre, @RequestBody Timestamp t) {

		int i=playerNames.indexOf(nombre);
		playerList.get(i).setLastTimeConnected(t);
		
		
		return new ResponseEntity<>(true, HttpStatus.OK);
	}
	
	
	
}
