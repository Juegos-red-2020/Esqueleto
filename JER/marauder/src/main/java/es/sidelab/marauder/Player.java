package es.sidelab.marauder;

import java.util.*;
import java.sql.Timestamp;

import org.springframework.stereotype.Component;

@Component
public class Player {

	private String name;
	private String password;
	private Timestamp lastTimeConnected;
	private int id;
	public Player() {
		
		
	}
	
	public Player(String name, String password, Timestamp lastTimeConnected,int id) {
		
		this.name=name;
		this.lastTimeConnected=lastTimeConnected;
		this.password=password;
		this.id=id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Timestamp getLastTimeConnected() {
		return lastTimeConnected;
	}

	public void setLastTimeConnected(Timestamp lastTimeConnected) {
		this.lastTimeConnected = lastTimeConnected;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	

	
	
	
}
