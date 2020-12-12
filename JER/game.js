//ESQUELETO INACABADO

class Scene0 extends Phaser.Scene{


    constructor(){
    
        super({key:"Carga"});
    
    }
    
    preload ()
    {
        
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 520, 50);


    this.load.on('progress', function (value) {
      progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 480 * value, 30);
    });


    this.load.on('complete', function () {
        progressBar.destroy();
        progressBox.destroy();
        

    });
this.load.image('Empezar','Assets/Empezar.png');
this.load.audio('M_Inicio','Assets/musica/Inicio.mp3');

   

//ESCENA1
this.load.image('Titulo', 'Assets/Titulo.png');
        this.load.image('Tutorial', 'Assets/Tutorial.png');
        this.load.image('TutorialA', 'Assets/Tutorial2.png');
        this.load.image('Jugar', 'Assets/Jugar.png');
        this.load.image('JugarA', 'Assets/Jugar2.png');
        this.load.image('Fondo','Assets/Fondo.png');
        this.load.image('SalirJuego','Assets/Salir.png');
        this.load.image('SalirJuegoA','Assets/Salir2.png');

        //ESCENA2


        //ESCENA3

    }
    
     create ()
    {    
        this.fondo=this.physics.add.staticSprite(config.width/2,config.height/2,'Fondo');
        this.empezar=this.physics.add.staticSprite(config.width/2,config.height/2,'Empezar');
        this.empezar.setInteractive();

        this.empezar.on('pointerover',function(){

            this.empezar.setScale(1.5,1.5);

        },this);

        this.empezar.on('pointerout',function(){

            this.empezar.setScale(1,1);

        },this);

        this.empezar.on('pointerdown',function(){

                   this.scene.start('Inicio');

        },this);



    }
    
     update ()
    {
        
    }

}

class Scene1 extends Phaser.Scene{

    constructor(){
    
        super({key:"Inicio"});
    
    }
    
    preload ()
    {
        this.load.image('Titulo', 'Assets/Titulo.png');
        this.load.image('Tutorial', 'Assets/Tutorial.png');
        this.load.image('TutorialA', 'Assets/Tutorial2.png');
        this.load.image('Jugar', 'Assets/Jugar.png');
        this.load.image('JugarA', 'Assets/Jugar2.png');
        this.load.image('Fondo','Assets/Fondo.png');
        this.load.image('SalirJuego','Assets/Salir.png');
        this.load.image('SalirJuegoA','Assets/Salir2.png');
        //this.load.audio('Musica', 'Assets/Musica.mp3');
    }
    
     create ()
    {    
        this.fondo=this.physics.add.staticSprite(config.width/2,config.height/2,'Fondo');
       this.titulo=this.physics.add.staticSprite(config.width/2,config.height/8,'Titulo');
       this.jugar=this.physics.add.staticSprite(config.width/2,config.height/2,'Jugar');
       this.tutorial=this.physics.add.staticSprite(config.width/2,config.height/1.5,'Tutorial');
       this.salirJuego=this.physics.add.staticSprite(config.width/2,config.height/1.2,'SalirJuego');
       this.musica=this.sound.add('M_Inicio');

       if (!this.sound.locked)
       {
           // already unlocked so play
           this.musica.play();
       }
       else
       {
           // wait for 'unlocked' to fire and then play
           this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
               this.musica.play();
           });
       }
  
        this.jugar.setInteractive();
        this.tutorial.setInteractive();
        this.salirJuego.setInteractive();

        this.jugar.on('pointerover',function(){

            this.jugar=this.physics.add.staticSprite(config.width/2,config.height/2,'JugarA');

        },this);


        this.jugar.on('pointerout',function(){

            this.jugar=this.physics.add.staticSprite(config.width/2,config.height/2,'Jugar');

        },this);
        this.jugar.on('pointerdown', function () {

            this.scene.start('Personajes');
            this.musica.stop();
        }, this);



        this.tutorial.on('pointerover',function(){

            this.tutorial=this.physics.add.staticSprite(config.width/2,config.height/1.5,'TutorialA');

        },this);

        this.tutorial.on('pointerout',function(){

            this.tutorial=this.physics.add.staticSprite(config.width/2,config.height/1.5,'Tutorial');

        },this);
        this.tutorial.on('pointerdown', function () {

            this.scene.start('Game Over');
            this.musica.stop();
        }, this);



        this.salirJuego.on('pointerover',function(){

            this.salirJuego=this.physics.add.staticSprite(config.width/2,config.height/1.2,'SalirJuegoA');

        },this);

        this.salirJuego.on('pointerout',function(){

            this.salirJuego=this.physics.add.staticSprite(config.width/2,config.height/1.2,'SalirJuego');

        },this);
        this.salirJuego.on('pointerdown', function () {

           game.destroy(true);
            
        }, this);



    }
    
     update ()
    {
        
    }
     
    }



    class Scene2 extends Phaser.Scene{

        constructor(){
        
            super({key:"Personajes"});
            
        
        }
        
        preload ()
        {
            this.load.spritesheet('Deva','Assets/Deva-Sprites.png',{frameWidth:100,frameHeight:128});
            this.load.spritesheet('Reni','Assets/Reni-Sprites.png',{frameWidth:100,frameHeight:128});
            this.load.image('Salir','Assets/Flecha.png');
            this.load.image('SalirA','Assets/Flecha2.png');
            this.load.image('TextoDeva','Assets/DevaTexto.png');
            this.load.image('TextoReni','Assets/ReniTexto.png');
            this.load.image('Fondo','Assets/Fondo.png');
            this.load.image('Elige','Assets/Personajes.png');
            this.load.image('Flechas','Assets/Flechas.png');
            this.load.image('WASD','Assets/WASD.png');
        }
        
         create ()
        {   
            this.fondo=this.physics.add.staticSprite(config.width/2,config.height/2,'Fondo');
            this.elige=this.physics.add.staticSprite(config.width/2,config.height/10,'Elige');
            this.salir=this.physics.add.staticSprite(config.width/12,config.height/10,'Salir');
            this.salir.setInteractive();
            this.deva=this.physics.add.staticSprite(config.width/4,config.height/3,'Deva');
            this.deva.setInteractive();
         
            this.anims.create({ 
                key: 'caminarDeva',
            frames: this.anims.generateFrameNumbers('Deva'),
            frameRate: 14,
            repeat: -1});

            this.deva.anims.play('caminarDeva',true);


            this.reni=this.physics.add.staticSprite(config.width*3/4,config.height/3,'Reni');
            this.reni.setInteractive();
            this.anims.create({ 
                key: 'caminarReni',
            frames: this.anims.generateFrameNumbers('Reni'),
            frameRate: 14,
            repeat: -1});

            this.reni.anims.play('caminarReni',true);


            this.deva.on('pointerover',function(){

                this.textoDeva=this.physics.add.staticSprite(config.width/4,config.height/1.7,'TextoDeva');
                this.controlesDeva=this.physics.add.staticSprite(config.width/4,config.height/1.15,'Flechas');
    
            },this);

            this.deva.on('pointerout',function(){

                this.textoDeva.destroy();
                this.controlesDeva.destroy();

            },this);



            this.reni.on('pointerover',function(){

                this.textoReni=this.physics.add.staticSprite(config.width*3/4,config.height/1.7,'TextoReni');
                this.controlesReni=this.physics.add.staticSprite(config.width*3/4,config.height/1.15,'WASD');
    
            },this);

            this.reni.on('pointerout',function(){

                this.textoReni.destroy();
                this.controlesReni.destroy();
            },this);



            this.salir.on('pointerover',function(){

                this.salir=this.physics.add.staticSprite(config.width/12,config.height/10,'SalirA');
    
            },this);
    
            this.salir.on('pointerout',function(){
    
                this.salir=this.physics.add.staticSprite(config.width/12,config.height/10,'Salir');
    
            },this);

            this.salir.on('pointerdown', function () {

                this.scene.start('Inicio');
                
            }, this);
        }
        
         update ()
        {
            
        }
         
        }




        class Scene3 extends Phaser.Scene{

            constructor(){
            
                super({key:"Game Over"});
            
            }
            
            preload ()
            {
               this.load.image('GameOver', 'Assets/GameOver.png');
             this.load.image('TextoGameOver','Assets/ReintentarSalir.png');

            }

            
            
             create ()
            {   
                this.gameover=this.physics.add.staticSprite(config.width/2,config.height/3,'GameOver');
                this.texto=this.physics.add.staticSprite(config.width/2,config.height/1.5,'TextoGameOver');
        

            }
            
             update ()
            {
                

                if(this.input.keyboard.addKey('A').isDown||this.input.keyboard.addKey('a').isDown){

                    
                    this.scene.start('Inicio');

                }else if(this.input.keyboard.addKey('D').isDown||this.input.keyboard.addKey('d').isDown){

                    this.scene.start('Personajes');
                }


            }
             
            }







    var config={
        type: Phaser.auto,
    width: 1000,
    height:600,
    physics:{
    
    default: 'arcade',
    arcade:{
    
        gravity:{
            y:300
        },
        debug: false
    
    }
    
    },
    
    scene: [Scene0,Scene1,Scene2,Scene3]
    
    };
var game=new Phaser.Game(config);

