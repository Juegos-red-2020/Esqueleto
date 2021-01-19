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
	private Timestamp updateTime = new Timestamp(System.currentTimeMillis());;
	private int id;

	 private File text = new File("jugadores.txt");

	private void readList() {

		updateTime = new Timestamp(System.currentTimeMillis());

		if (!playerList.isEmpty())
			for (int i = 0; i < playerList.size(); i++) {

				if (updateTime.getTime() - playerList.get(i).getLastTimeConnected().getTime() > 5000) {

					playerList.remove(i);
				}

			}

	}

	private void readNames() {
		if (!playerList.isEmpty())
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
		updateTime = new Timestamp(System.currentTimeMillis());
		if (!playerList.isEmpty())
			for (int i = 0; i < playerList.size(); i++) {

				if (playerList.get(i).getId() == id) {
					playerList.get(i).setLastTimeConnected(updateTime);
					return playerList.get(i).getLastTimeConnected();
				}

			}

		return null;

	}

	@PostMapping("/players")
	public int addPlayer(@RequestBody Player player) throws FileNotFoundException {

		player.setId(id);
		playerList.add(player);
		id++;

		try {
			PrintStream flujo;
			flujo = new PrintStream(new FileOutputStream("jugadores.txt", true));

			flujo.println(player.getName());
			flujo.println(player.getPassword());
			flujo.close();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return player.getId();
	}

	@GetMapping("/player")
	public int countPlayers() throws FileNotFoundException {

		int nPlayers = 1;
		Scanner scnr = new Scanner(text);
		
		while (scnr.hasNextLine()) {

			String line = scnr.nextLine();
			nPlayers++;

		}

		return nPlayers / 2;

	}

}