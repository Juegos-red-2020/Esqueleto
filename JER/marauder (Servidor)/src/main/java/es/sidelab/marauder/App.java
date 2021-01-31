package es.sidelab.marauder;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


@SpringBootApplication
@EnableWebSocket
public class App implements WebSocketConfigurer{
	
    public static void main( String[] args )
    {
        SpringApplication.run(App.class,args);
    }
    
    @Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(createChatHandler(), "/chat")
			.setAllowedOrigins("*");
		registry.addHandler(createPositionHandler(), "/position")
		.setAllowedOrigins("*");
		registry.addHandler(createPlayerSelectHandler(), "/playerSelection")
		.setAllowedOrigins("*");
		registry.addHandler(createExactDevaPosXHandler(), "/exactDevaPositionX")
		.setAllowedOrigins("*");
		registry.addHandler(createExactDevaPosYHandler(), "/exactDevaPositionY")
		.setAllowedOrigins("*");
		registry.addHandler(createExactReniPosXHandler(), "/exactReniPositionX")
		.setAllowedOrigins("*");
		registry.addHandler(createExactReniPosYHandler(), "/exactReniPositionY")
		.setAllowedOrigins("*");
		registry.addHandler(createPlayerOnlineHandler(), "/online")
		.setAllowedOrigins("*");
	}
	
	@Bean
	public chatHandler createChatHandler() {
		return new chatHandler();
	}
	
	@Bean
	public PositionHandler createPositionHandler() {
		return new PositionHandler();
	}
	@Bean
	public PlayerSelectHandler createPlayerSelectHandler() {
		return new PlayerSelectHandler();
	}
	@Bean
	public ExactDevaPosXHandler createExactDevaPosXHandler() {
		return new ExactDevaPosXHandler();
	}
	@Bean
	public ExactDevaPosYHandler createExactReniPosYHandler() {
		return new ExactDevaPosYHandler();
	}
	
	@Bean
	public ExactReniPosXHandler createExactReniPosXHandler() {
		return new ExactReniPosXHandler();
	}
	@Bean
	public ExactReniPosYHandler createExactDevaPosYHandler() {
		return new ExactReniPosYHandler();
	}
	@Bean
	public PlayerOnlineHandler createPlayerOnlineHandler() {
		return new PlayerOnlineHandler();
	}
}
