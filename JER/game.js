//MARAUDER

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
        
     //ESCENA0
        
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
        this.load.image('Creditos', 'Assets/Creditos.png');
        this.load.image('CreditosA', 'Assets/Creditos2.png');
        this.load.audio('M_Botones', 'Assets/musica/Cursor_Rollover_1.wav');

        //ESCENA2
        this.load.spritesheet('Deva','Assets/Deva-Sprites.png',{frameWidth:100,frameHeight:128});
        this.load.spritesheet('Reni','Assets/Reni-Sprites.png',{frameWidth:100,frameHeight:128});
        this.load.image('Salir','Assets/Flecha.png');
        this.load.image('SalirA','Assets/Flecha2.png');
        this.load.image('TextoDeva','Assets/DevaTexto.png');
        this.load.image('TextoReni','Assets/ReniTexto.png');
        this.load.image('Elige','Assets/Personajes.png');
        this.load.image('Flechas','Assets/Flechas.png');
        this.load.image('WASD','Assets/WASD.png');
        this.load.audio('M_Personajes','Assets/musica/Lost Voices Soundscape (no whispers).mp3');

        //ESCENA3

        this.load.image('GameOver', 'Assets/GameOver.png');
        this.load.image('TextoGameOver','Assets/ReintentarSalir.png');
        this.load.audio('M_Game_Over','Assets/musica/Spa Relaxing Piano.mp3');
        
        //ESCENA4
        this.load.image('tilesEntorno', 'Assets/mapa/entorno.png');
        this.load.image('tilesItems', 'Assets/mapa/items.png' );
        this.load.tilemapTiledJSON('mapa', 'Assets/mapa/map_tutorial_1.json');
        this.load.image('cajaOff', 'Assets/Caja_OFF_150x64.png');
        this.load.image('cajaOn', 'Assets/Caja_ON_150x64.png');
        this.load.image('Vida', 'Assets/Vida_1.png');
        this.load.image('Fondo_Tuto_1','Assets/mapa/map_tutorial_1.png');
        this.load.image('Portal', 'Assets/Transparencia_Portal.png');
        this.load.image('PalancaOff', 'Assets/Palanca_OFF.png');
        this.load.image('PalancaOn', 'Assets/Palanca_ON.png');
        this.load.image('Plataforma1', 'Assets/Plataforma1.png');
        this.load.image('Vida_Completa', 'Assets/Vida_Completa.png');
        this.load.image('Vida_3', 'Assets/Vida_3.png');
        this.load.image('Vida_2', 'Assets/Vida_2.png');
        this.load.image('Vida_1', 'Assets/Vida_1.png');
        this.load.image('Vida_0', 'Assets/Vida_0.png');
        this.load.audio('Pasos', 'Assets/musica/Pasos.ogg');
        this.load.audio('Caja', 'Assets/musica/Caja_arrastrando.wav');
        this.load.audio('Salto', 'Assets/musica/Salto.ogg');
        this.load.audio('Portal_sound', 'Assets/musica/teleport_02.ogg');
        this.load.audio('M_Niveles','Assets/musica/Space Eternal.mp3');
        this.load.image('Boton_off','Assets/boton_off.png');
        this.load.image('Boton_on','Assets/boton_on.png');
        this.load.image('Escalera','Assets/Escalera.png');
        this.load.image('Laser','Assets/laser.png');
        this.load.image('LaserH','Assets/laserHorizontal.png');
        this.load.image('img_tuto_portal','Assets/tuto_portal.png');
        this.load.image('img_tuto_empujar','Assets/tuto_empujar_caja.png');
        this.load.image('transparencia','Assets/Transparencia.png');
        
        //ESCENA5
        this.load.image('tilesEntorno1', 'Assets/mapa/Tiles_Entorno.png');
        this.load.tilemapTiledJSON('mapa1', 'Assets/mapa/map_Grande.json');
        this.load.image('Fondo_1','Assets/mapa/map_Grande.png');
        this.load.image('Plataforma1','Assets/plataforma_1_5_6_8.png');
        this.load.image('Plataforma2','Assets/plataforma_2.jpg');
        this.load.image('Plataforma3','Assets/plataforma_3.jpg');
        this.load.image('Plataforma4','Assets/plataforma_4.jpg');
        this.load.image('Plataforma7','Assets/plataforma_7.jpg');
        this.load.image('generador_ON','Assets/Generador_electricidad_ON_192x128.png');
        this.load.image('generador_OFF','Assets/Generador_electricidad_OFF_192x128.png');
        
        //ESCENA6
        this.load.image('Dis', 'Assets/Dis.png');
        this.load.image('DisN', 'Assets/Dis_N.png');
        this.load.image('Prog', 'Assets/Prog.png');
       
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

    }
    
     create ()
    {    
       this.fondo=this.physics.add.staticSprite(config.width/2,config.height/2,'Fondo');
       this.titulo=this.physics.add.staticSprite(config.width/2,config.height/8,'Titulo');
       this.jugar = this.physics.add.staticSprite(config.width / 2, config.height / 2.2, 'Jugar');
       this.tutorial = this.physics.add.staticSprite(config.width / 2, config.height / 1.7, 'Tutorial');
       this.creditos=this.physics.add.staticSprite(config.width / 2, config.height / 1.35, 'Creditos');
       this.salirJuego = this.physics.add.staticSprite(config.width / 2, config.height / 1.15, 'SalirJuego');
       this.musica=this.sound.add('M_Inicio',{volume:0.3});
       this.musicaBotones = this.sound.add('M_Botones');
       this.musica.play();

  
        this.jugar.setInteractive();
        this.tutorial.setInteractive();
        this.creditos.setInteractive();
        this.salirJuego.setInteractive();

         this.jugar.on('pointerover', function () {

            this.jugar = this.physics.add.staticSprite(config.width / 2, config.height / 2.2, 'JugarA');
            this.musicaBotones.play();
        }, this);


        this.jugar.on('pointerout', function () {

            this.jugar = this.physics.add.staticSprite(config.width / 2, config.height / 2.2, 'Jugar');

        }, this);
        this.jugar.on('pointerdown', function () {

            this.scene.start('Personajes');
            this.musica.stop();
        }, this);



        this.tutorial.on('pointerover', function () {

            this.tutorial = this.physics.add.staticSprite(config.width / 2, config.height / 1.7, 'TutorialA');
            this.musicaBotones.play();
        }, this);

        this.tutorial.on('pointerout', function () {

            this.tutorial = this.physics.add.staticSprite(config.width / 2, config.height / 1.7, 'Tutorial');

        }, this);
        this.tutorial.on('pointerdown', function () {

            this.scene.start('Mapa');
            this.musica.stop();
        }, this);



        this.creditos.on('pointerover', function () {

            this.creditos = this.physics.add.staticSprite(config.width / 2, config.height / 1.35, 'CreditosA');
            this.musicaBotones.play();
        }, this);

        this.creditos.on('pointerout', function () {

            this.creditos=this.physics.add.staticSprite(config.width / 2, config.height / 1.35, 'Creditos');

        }, this);
        this.creditos.on('pointerdown', function () {

            this.scene.start('Creditos');
            this.musica.stop();
        }, this);


        this.salirJuego.on('pointerover', function () {

            this.salirJuego = this.physics.add.staticSprite(config.width / 2, config.height / 1.15, 'SalirJuegoA');
            this.musicaBotones.play();
        }, this);

        this.salirJuego.on('pointerout', function () {

            this.salirJuego = this.physics.add.staticSprite(config.width / 2, config.height / 1.15, 'SalirJuego');

        }, this);
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

        }
        
         create ()
        {   
            this.fondo=this.physics.add.staticSprite(config.width/2,config.height/2,'Fondo');
            this.elige=this.physics.add.staticSprite(config.width/2,config.height/10,'Elige');
            this.salir=this.physics.add.staticSprite(config.width/12,config.height/10,'Salir');
            this.salir.setInteractive();
            this.deva=this.physics.add.staticSprite(config.width/4,config.height/3,'Deva');
            this.deva.setInteractive();
            this.musicaBotones = this.sound.add('M_Botones');
            this.musica=this.sound.add('M_Personajes',{volume:0.3});
            this.musica.play();
         
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
                this.musicaBotones.play();
    
            },this);

            this.deva.on('pointerout',function(){

                this.textoDeva.destroy();
                this.controlesDeva.destroy();

            },this);
            
            this.deva.on('pointerdown',function(){
                
                this.musica.stop();
                this.scene.start('Mapa_Final');

            },this);


            this.reni.on('pointerover',function(){

                this.textoReni=this.physics.add.staticSprite(config.width*3/4,config.height/1.7,'TextoReni');
                this.controlesReni=this.physics.add.staticSprite(config.width*3/4,config.height/1.15,'WASD');
                this.musicaBotones.play();
    
            },this);

            this.reni.on('pointerout',function(){

                this.textoReni.destroy();
                this.controlesReni.destroy();
            },this);
            
            this.reni.on('pointerdown',function(){
                
                this.musica.stop();
                this.scene.start('Mapa_Final');

            },this);


            this.salir.on('pointerover',function(){

                this.salir=this.physics.add.staticSprite(config.width/12,config.height/10,'SalirA');
                this.musicaBotones.play();
    
            },this);
    
            this.salir.on('pointerout',function(){
    
                this.salir=this.physics.add.staticSprite(config.width/12,config.height/10,'Salir');
    
            },this);

            this.salir.on('pointerdown', function () {

                this.musica.stop();
                this.scene.start('Inicio');
                
            }, this);
        }
        
         update ()
        {
            
        }
         
        }




        class Scene3 extends Phaser.Scene {

    constructor() {

        super({ key: "Game Over" });

    }

    preload() {


    }
    create() {
        this.fondo=this.physics.add.staticSprite(config.width / 2, config.height / 2, 'Fondo');

        this.gameover = this.physics.add.staticSprite(config.width / 2, config.height / 3, 'GameOver');
        this.texto = this.physics.add.staticSprite(config.width / 2, config.height / 1.5, 'TextoGameOver');
        this.musica=this.sound.add('M_Game_Over');
        this.musica.play();
    }

    update() {
        if (this.input.keyboard.addKey('A').isDown || this.input.keyboard.addKey('a').isDown) {

            this.musica.stop();
            this.scene.start('Inicio');
           

        } else if (this.input.keyboard.addKey('D').isDown || this.input.keyboard.addKey('d').isDown) {

           if(nivel==='Mapa'){
                this.musica.stop();
                this.scene.start('Mapa');
            }else if(nivel==='Mapa_Final'){
                this.musica.stop();
                this.scene.start('Mapa_Final');
            }
            
        }


    }

}

class Scene4 extends Phaser.Scene{

        constructor(){
        
            super({key:"Mapa"});
            
        
        }
        
        preload ()
        {
           
        }
        
         create ()
        {   
            nivel='Mapa';
            this.mapa=this.make.tilemap({key:'mapa'});
            this.fondoTutorial1 = this.physics.add.staticSprite(config.width+600,config.height/2,'Fondo_Tuto_1');
            this.caja = this.physics.add.sprite(config.width, config.height/2, 'cajaOff');
            this.caja.visible=false;
            this.caja.body.enable=false;
            this.caja.setDrag(10000,0);
            this.deva = this.physics.add.sprite(100,420,'Deva');
            this.reni = this.physics.add.sprite(150,420,'Reni');
            this.vida=3;
            this.tilesItems = this.mapa.addTilesetImage('items', 'tilesItems');
            this.palancaOff = this.physics.add.staticSprite(1400, config.height-150, 'PalancaOff');
            this.portal = this.physics.add.staticSprite(config.width+2092, config.height-140, 'Portal');
            this.plataforma = this.physics.add.staticSprite(config.width-520,config.height-102,'Plataforma1');
            this.plataforma.visible=false;
            this.plataforma.body.enable=false;
            this.boton_off= this.physics.add.staticImage(800,472,'Boton_off');
            this.img_tuto_portal = this.physics.add.staticSprite(config.width+2092, config.height-400, 'img_tuto_portal');
            this.img_tuto_empujar = this.physics.add.staticSprite(config.width, config.height-230, 'img_tuto_empujar');
            this.muroderechalimite = this.physics.add.staticSprite(3215, 470, 'transparencia');
            this.muroizqlimite = this.physics.add.staticSprite(0, 470, 'transparencia');

            //Musica
            this.musica=this.sound.add('M_Niveles',{volume:0.2});
            this.musica.play();
            // Sonido de pasos
            this.sonidoDeva = this.sound.add('Pasos',{loop: true});
            this.sonidoReni = this.sound.add('Pasos',{loop: true});
            //Sonido caja
            this.sonidoCaja = this.sound.add('Caja',{loop: true});
            //Sonido Salto
            this.sonidoSalto = this.sound.add('Salto',{loop: false});
            //Sonido Portal
            this.sonidoPortal = this.sound.add('Portal_sound',{loop: false});
            
            //Imagenes tutoriales
            this.img_tuto_portal.visible = false;

            this.img_tuto_empujar.visible = false;

            this.muroderechalimite.body.setSize(0,1000);
            this.muroizqlimite.body.setSize(0,1000);
                        
            //Establecer los assets de el sprite al mapa colisiones del mapa
            this.capaItems = this.mapa.createDynamicLayer('top',this.tilesItems,0,0);
            this.capaItems.setCollisionByExclusion([-1]);
            
            // Nombre de Reni
            this.textReni = this.add.text(this.reni.body.position.x,this.reni.body.position.y, 'Reni', { font: '20px fontGame', fill: '#fff' });
            this.textDeva = this.add.text(this.deva.body.position.x,this.deva.body.position.y, 'Deva', { font: '20px fontGame', fill: '#fff' });
        
            //Vida
            this.vidasString = 'Vidas: '
            this.textVida = this.add.text(45,20,this.vidasString  + this.vida, { font: '32px fontGame', fill: '#fff' });
            
            // Deva camina
                this.anims.create({ 
                    key: 'caminarDeva',
                    frames: this.anims.generateFrameNumbers('Deva'),
                    frameRate: 14,
                repeat: -1});

                this.anims.create({
                    key: 'esperaDeva',
                    frames: [ { key: 'Deva', frame: 3 } ],
                    frameRate: 28
                });

                // Reni Camina
                this.anims.create({ 
                    key: 'caminarReni',
                    frames: this.anims.generateFrameNumbers('Reni'),
                    frameRate: 14,
                repeat: -1});

                this.anims.create({
                    key: 'esperaReni',
                    frames: [ { key: 'Reni', frame: 3 } ],
                    frameRate: 28
                });
               
             
            
            //colliders
            this.physics.add.collider(this.deva, this.capaItems);
            this.physics.add.collider(this.reni, this.capaItems);
            this.physics.add.collider(this.caja, this.capaItems);
            this.physics.add.collider(this.caja, this.deva);
            this.physics.add.collider(this.reni, this.plataforma);
            this.physics.add.collider(this.plataforma, this.deva);
            this.physics.add.collider(this.muroderechalimite, this.deva);
            this.physics.add.collider(this.muroderechalimite, this.reni);
            this.physics.add.collider(this.muroizqlimite, this.deva);
            this.physics.add.collider(this.muroizqlimite, this.reni);
            
            //overlaps
            this.physics.add.overlap(this.reni,this.boton_off);
            this.physics.add.overlap(this.reni,this.palancaOff);
            this.physics.add.overlap(this.deva,this.palancaOff);
            this.physics.add.overlap(this.deva,this.portal);
            this.physics.add.overlap(this.reni,this.portal);


            //Asignación de teclas
            //Reni
            this.cursors = this.input.keyboard.createCursorKeys();
            //Deva
            this.lefttButton = this.input.keyboard.addKey('A');
            this.rightButton = this.input.keyboard.addKey('D');
            this.upButton = this.input.keyboard.addKey('W');
            this.downButton = this.input.keyboard.addKey('S');
            
            //Para que la camara no se pasa del mapa
            this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);
            //La camara sigue a Reni
            this.cameras.main.startFollow(this.reni);
            
            //Texto Vida siga la cámara
            this.textVida.setScrollFactor(0);
        }
        
         update ()
        {
         //Nombres
         this.textReni.x = this.reni.body.position.x + 40;
         this.textReni.y = this.reni.body.position.y - 20;

         this.textDeva.x = this.deva.body.position.x + 40;
         this.textDeva.y = this.deva.body.position.y - 20;
            
         //activar boton 
         if(this.boton_off.body.touching.up){
            this.boton_on=this.physics.add.staticImage(800,472,'Boton_on');
            this.boton_off.body.enable=false;
            this.boton_off.visible=false;
            this.caja.visible=true;
            this.caja.body.enable=true;
            this.img_tuto_empujar.visible = true;
         }
            
            //Tuto imagen
         if(this.portal.body.touching.up)
         {
             this.img_tuto_portal.visible = true;
         }
         
         //Sonido al empujar la caja
        if((this.caja.body.touching.left&&this.cursors.right.isDown) || (this.caja.body.touching.right&&this.cursors.left.isDown))
        {
            if(!this.sonidoCaja.isPlaying)
            this.sonidoCaja.play()
        }
        else
        {
            this.sonidoCaja.stop();
        }
            
         //Controles Deva
                if (this.cursors.left.isDown)
                {
                    this.deva.setVelocityX(-300);
                    this.deva.anims.play('caminarDeva', true);
                    this.deva.flipX = true;

                    if(!this.sonidoDeva.isPlaying)
                    this.sonidoDeva.play();
                }
                else if (this.cursors.right.isDown)
                {
                    this.deva.setVelocityX(300);
                    this.deva.anims.play('caminarDeva', true);
                    this.deva.flipX = false;

                    if(!this.sonidoDeva.isPlaying)
                    this.sonidoDeva.play();
                }
                else if (this.cursors.right.isUp)
                {
                    this.deva.setVelocityX(0);
                    this.deva.anims.play('esperaDeva',true);
                    this.sonidoDeva.stop();
                }

                if (!this.deva.body.onFloor()) {

                    this.sonidoDeva.stop();
        
                }
            
            //Salto Deva
                if (this.cursors.up.isDown && this.deva.body.onFloor() || this.cursors.up.isDown && this.deva.body.touching.down)
                {
                    this.deva.body.setVelocityY(-250);
                    this.sonidoDeva.stop();
                    this.sonidoSalto.play();   
                }
            
            //Si se caen se restauran a su origen
                if(this.deva.y>620){
                    this.vida-=1;
                    this.deva.x=150;
                    this.deva.y=400;
                
                    this.reni.x=150;
                    this.reni.y=400;
                    
                     this.textVida.text = this.vidasString + this.vida;
                }
                if(this.reni.y>620){
                    this.vida-=1;
                    this.reni.x=150;
                    this.reni.y=400;
                    
                    this.deva.x=150;
                    this.deva.y=400;
                    
                     this.textVida.text = this.vidasString + this.vida;
                }
            
                if (this.vida <= 0){
                    game.sound.stopAll();
                    this.scene.start('Game Over');
                }
            
            //Controles de Reni
                if (this.lefttButton.isDown)
                {
                    this.reni.setVelocityX(-300);
                    this.reni.anims.play('caminarReni', true);
                    this.reni.flipX = true;

                    if(!this.sonidoReni.isPlaying)
                    this.sonidoReni.play();

                }else if (this.rightButton.isDown)
                {
                    this.reni.setVelocityX(300);
                    this.reni.anims.play('caminarReni', true);
                    this.reni.flipX = false;


                    if(!this.sonidoReni.isPlaying)
                    this.sonidoReni.play();
                }
                else{
                    this.reni.setVelocityX(0);
                    this.reni.anims.play('esperaReni',true);
                    this.sonidoReni.stop();
                }

                if (!this.reni.body.onFloor()) {

                    this.sonidoReni.stop();
        
                }

                // Salto
                if(this.upButton.isDown && this.reni.body.onFloor()||this.upButton.isDown && this.reni.body.touching.down)
                {
                    this.reni.body.setVelocityY(-360);
                    this.sonidoReni.stop();
                    this.sonidoSalto.play();
                }
                if(this.upButton.isDown && this.reni.body.onWall()){
                    this.reni.body.setVelocityY(-200);
                   }
                if(this.palancaOff.body.touching.up)
                {
                    this.palancaOn = this.physics.add.staticSprite(1400, config.height-150, 'PalancaOn');
                    this.palancaOff.body.enable = false;
                    this.palancaOff.visible = false;
                    this.plataforma.body.enable = true;
                    this.plataforma.visible = true;
                }
                if(this.portal.body.touching.up && this.downButton.isDown && this.cursors.down.isDown)
                {
                    game.sound.stopAll();
                    this.sonidoPortal.play();
                    this.scene.start('Inicio');
                }
        }   
         
        }
   class Scene5 extends Phaser.Scene{
    

            constructor(){
               
            
                super({key:"Mapa_Final"});
            }
            
            preload ()
            {
            }

            
             create ()
            {   
                
               
                nivel='Mapa_Final';
                
                this.vida=7;
                this.mapa=this.make.tilemap({key:'mapa1'});     

                this.fondo1 = this.physics.add.staticSprite(config.width+1895,config.height+1048,'Fondo_1');

                this.deva = this.physics.add.sprite(330,500,'Deva');
                this.deva.body.setSize(this.deva.width-30, this.deva.height);
                this.reni = this.physics.add.sprite(330,500,'Reni');
                this.reni.body.setSize(this.reni.width-30, this.reni.height);

                this.tilesItems = this.mapa.addTilesetImage('items' , 'tilesItems');

                this.portal = this.physics.add.staticImage(4020, 3220, 'Portal');
                this.sonidoPortal=this.sound.add('Portal_sound',{loop:false});

                this.caja1=this.physics.add.sprite(1260, 544, 'cajaOff');
                this.caja1.setDrag(10000,0);
                this.caja2=this.physics.add.sprite(480, 928, 'cajaOff');
                this.caja2.setDrag(10000,0);
                this.caja3=this.physics.add.sprite(284, 1500, 'generador_ON');
                this.caja3.setDrag(10000,0);
                this.caja3.setScale(0.6);
                this.caja4=this.physics.add.sprite(1696,1600, 'cajaOff');
                this.caja4.setDrag(10000,0);
                this.caja5=this.physics.add.sprite(5184,2592, 'cajaOff');
                this.caja5.setDrag(10000,0);

                this.boton1off=this.physics.add.staticImage(3994,1172,'Boton_off');
                this.boton1on=this.physics.add.staticImage(3994,1172,'Boton_on');
                this.boton1on.visible=false;
                this.boton1on.body.enable=false;
                this.boton2off=this.physics.add.staticImage(544,1620,'Boton_off');
                this.boton2on=this.physics.add.staticImage(544,1620,'Boton_on');
                this.boton2on.visible=false;
                this.boton2on.body.enable=false;
                this.boton3off=this.physics.add.staticImage(3104,3220,'Boton_off');
                this.boton3on=this.physics.add.staticImage(3104,3220,'Boton_on');
                this.boton3on.visible=false;
                this.boton3on.body.enable=false;
                this.boton4off=this.physics.add.staticImage(4672,3220,'Boton_off');
                this.boton4on=this.physics.add.staticImage(4672,3220,'Boton_on');
                this.boton4on.visible=false;
                this.boton4on.body.enable=false;
                this.boton5off=this.physics.add.staticImage(2550,565,'Boton_off');
                this.boton5on=this.physics.add.staticImage(2550,565,'Boton_on');
                this.boton5on.visible=false;
                this.boton5on.body.enable=false;

                this.plataforma1=this.physics.add.staticImage(1142,980,'Plataforma3');
                this.plataforma1.visible=false;
                this.plataforma1.body.enable=false;
                this.plataforma2=this.physics.add.staticImage(1728,593,'Plataforma2');
                this.plataforma2.visible=false;
                this.plataforma2.body.enable=false;
                this.plataforma3=this.physics.add.staticImage(3500,980,'Plataforma3');
                this.plataforma3.visible=false;
                this.plataforma3.body.enable=false;
                this.plataforma4=this.physics.add.staticImage(4255,980,'Plataforma4');
                this.plataforma4.visible=false;
                this.plataforma4.body.enable=false;
                this.plataforma5=this.physics.add.staticImage(1142,1652,'Plataforma3');
                this.plataforma5.visible=false;
                this.plataforma5.body.enable=false;
                this.plataforma6=this.physics.add.staticImage(1142,2195,'Plataforma3');
                this.plataforma6.visible=false;
                this.plataforma6.body.enable=false;
                this.plataforma8=this.physics.add.staticImage(1155,3250,'Plataforma3');
                this.plataforma8.visible=false;
                this.plataforma8.body.enable=false;
                this.plataforma7=this.physics.add.staticImage(810,3085,'Plataforma7');
                this.plataforma9=this.physics.add.staticImage(4700,1600,'Plataforma3');
                this.plataforma10=this.physics.add.staticImage(800,2050,'Plataforma7');
                this.plataforma11=this.physics.add.staticImage(1506,2070,'Plataforma7');
                this.plataforma12=this.physics.add.staticImage(1506,3150,'Plataforma7');
                this.plataforma13=this.physics.add.staticImage(242,2195,'Plataforma3');

              

                this.palanca1Off = this.physics.add.staticSprite(1536, 928, 'PalancaOff');
                this.palanca1On = this.physics.add.staticSprite(1536, 928, 'PalancaOn');
                this.palanca1On.visible=false;
                this.palanca1On.body.enable=false;
                this.palanca2Off = this.physics.add.staticSprite(3870, 545, 'PalancaOff');
                this.palanca2On = this.physics.add.staticSprite(3870, 545, 'PalancaOn');
                this.palanca2On.visible=false;
                this.palanca2On.body.enable=false;
                this.palanca3Off = this.physics.add.staticSprite(1566, 2144, 'PalancaOff');
                this.palanca3On = this.physics.add.staticSprite(1566, 2144, 'PalancaOn');
                this.palanca3On.visible=false;
                this.palanca3On.body.enable=false;
                this.palanca4Off = this.physics.add.staticSprite(704, 3200, 'PalancaOff');
                this.palanca4On = this.physics.add.staticSprite(704, 3200, 'PalancaOn');
                this.palanca4On.visible=false;
                this.palanca4On.body.enable=false;

                this.escalera1=this.physics.add.staticImage(286,788,'Escalera');
                this.escalera2=this.physics.add.staticImage(2080,788,'Escalera');
                this.escalera3=this.physics.add.staticImage(5248,788,'Escalera');
                this.escalera4=this.physics.add.staticImage(132,3060,'Escalera');
                this.escalera5=this.physics.add.staticImage(1568,3060,'Escalera');
                this.escalera6=this.physics.add.staticImage(672,2708,'Escalera');
                this.escalera7=this.physics.add.staticImage(672,2356,'Escalera');
                this.escalera8=this.physics.add.staticImage(2336,2708,'Escalera');
                this.escalera9=this.physics.add.staticImage(2336,2356,'Escalera');
                this.escalera10=this.physics.add.staticImage(5536,3060,'Escalera');
                this.escalera11=this.physics.add.staticImage(5536,2708,'Escalera');
                this.escalera15=this.physics.add.staticImage(4950,1100,'Escalera');
                this.escalera12=this.physics.add.staticImage(4950,1450,'Escalera');
                this.escalera13=this.physics.add.staticImage(132,1800,'Escalera');
                this.escalera14=this.physics.add.staticImage(132,2100,'Escalera');
                this.escalera16=this.physics.add.staticImage(2528,3060,'Escalera');
                
                this.laser=this.physics.add.image(1550,657,'LaserH');
                this.laser.setBounceX(1);
                this.laser.body.setAllowGravity(false);
                this.laser.setVelocityX(500);

                this.laser1=this.physics.add.image(2668,657,'LaserH');
                this.laser1.body.setAllowGravity(false);
                this.laser1.setBounceX(1);
                this.laser1.setVelocityX(500);

                this.laser2=this.physics.add.image(3360,657,'LaserH');
                this.laser2.body.setAllowGravity(false);
                this.laser2.setBounceX(1);
                this.laser2.setVelocityX(500);

                this.laser3=this.physics.add.image(3136,1044,'LaserH');
                this.laser3.body.setAllowGravity(false);
                this.laser3.setBounceX(1);
                this.laser3.setScale(2);
                this.laser3.setVelocityX(1000);

                this.laser4=this.physics.add.image(700,2324,'LaserH');
                this.laser4.body.setAllowGravity(false);
                this.laser4.setBounceX(1);
                this.laser4.setVelocityX(300);

                /*this.laser5=this.physics.add.image(32,2484,'LaserH');
                this.laser5.body.setAllowGravity(false);
                this.laser5.setBounceX(1);
                this.laser5.setVelocityX(300);*/

                this.laser6=this.physics.add.image(700,2644,'LaserH');
                this.laser6.body.setAllowGravity(false);
                this.laser6.setBounceX(1);
                this.laser6.setVelocityX(300);

                this.laser7=this.physics.add.image(4600,2224,'LaserH');
                this.laser7.body.setAllowGravity(false);
                this.laser7.setBounceX(1);
                this.laser7.setVelocityX(500);

                this.laser8=this.physics.add.image(4700,1134,'LaserH');
                this.laser8.body.setAllowGravity(false);
                this.laser8.setBounceX(1);
                this.laser8.setVelocityX(300);

                this.laser9=this.physics.add.image(5400,2036,'LaserH');
                this.laser9.body.setAllowGravity(false);
                this.laser9.setBounceX(1);
                this.laser9.setVelocityX(500);

                this.laserv1=this.physics.add.image(788,1022,'Laser');
                this.laserv1.setBounceY(1);
                this.laserv1.setScale(2);
                this.laserv1.setVelocityY(1000);

                this.laserv2=this.physics.add.image(1864,1662,'Laser');
                this.laserv2.setBounceY(1);
                this.laserv2.setVelocityY(50);

                this.laserv4=this.physics.add.image(3220,1920,'Laser');
                this.laserv4.setBounceY(1);
                this.laserv4.setVelocityY(1000);

                this.laserv5=this.physics.add.image(3732,2000,'Laser');
                this.laserv5.setBounceY(1);
                this.laserv5.setVelocityY(1000);

                this.laserv6=this.physics.add.image(4308,1256,'Laser');
                this.laserv6.setBounceY(1);
                this.laserv6.setVelocityY(1000);

                this.laserv7=this.physics.add.image(5236,1406,'Laser');
                this.laserv7.setBounceY(1);
                this.laserv7.setVelocityY(1000);

                this.laserv8=this.physics.add.image(1708,2506,'Laser');
                this.laserv8.setBounceY(1);
                this.laserv8.setVelocityY(-500);

                this.laserv10=this.physics.add.image(2688,2506,'Laser');
                this.laserv10.setBounceY(1);
                this.laserv10.setScale(2);
                this.laserv10.setVelocityY(500);

                this.laserv11=this.physics.add.image(3688,2506,'Laser');
                this.laserv11.setBounceY(1);
                this.laserv11.setScale(2);
                this.laserv11.setVelocityY(500);

                this.laserv12=this.physics.add.image(4384,2506,'Laser');
                this.laserv12.setBounceY(1);
                this.laserv12.setScale(2);
                this.laserv12.setVelocityY(500);

               
               
                //Musica
                this.musica=this.sound.add('M_Niveles',{volume:0.2});
                this.musica.play();
                // Sonido de pasos
                this.sonidoDeva = this.sound.add('Pasos',{loop: true});
                this.sonidoReni = this.sound.add('Pasos',{loop: true});
                //Sonido caja
                this.sonidoCaja = this.sound.add('Caja',{loop: true});
                //Sonido Salto
                this.sonidoSalto = this.sound.add('Salto',{loop: false});
                //Sonido Portal
                this.sonidoPortal = this.sound.add('Portal_sound',{loop: false});

                this.capaItems = this.mapa.createDynamicLayer('top',this.tilesItems,0,0);
                this.capaItems.setCollisionByExclusion([-1]);   

                // Nombre de Reni
                this.textReni = this.add.text(this.reni.body.position.x,this.reni.body.position.y, 'Reni', { font: '20px fontGame', fill: '#fff' });
                this.textDeva = this.add.text(this.deva.body.position.x,this.deva.body.position.y, 'Deva', { font: '20px fontGame', fill: '#fff' });
                
                //Vida
                this.vidasString = 'Vidas: '
                this.textVida = this.add.text(45,20,this.vidasString  + this.vida, { font: '32px fontGame', fill: '#fff' });
                
                // Deva camina
                this.anims.create({ 
                    key: 'caminarDeva',
                    frames: this.anims.generateFrameNumbers('Deva'),
                    frameRate: 18,
                repeat: -1});

                this.anims.create({
                    key: 'esperaDeva',
                    frames: [ { key: 'Deva', frame: 3 } ],
                    frameRate: 28
                });

                // Reni Camina
                this.anims.create({ 
                    key: 'caminarReni',
                    frames: this.anims.generateFrameNumbers('Reni'),
                    frameRate: 18,
                repeat: -1});

                this.anims.create({
                    key: 'esperaReni',
                    frames: [ { key: 'Reni', frame: 3 } ],
                    frameRate: 28
                });

                //colliders
                this.physics.add.collider(this.deva, this.capaItems);
                this.physics.add.collider(this.reni, this.capaItems);

                this.physics.add.collider(this.laser, this.capaItems);
                this.physics.add.collider(this.laser1, this.capaItems);
                this.physics.add.collider(this.laser2, this.capaItems);
                this.physics.add.collider(this.laser3, this.capaItems);
                this.physics.add.collider(this.laser4, this.capaItems);
               // this.physics.add.collider(this.laser5, this.capaItems);
                this.physics.add.collider(this.laser6, this.capaItems);
                this.physics.add.collider(this.laser7, this.capaItems);
                this.physics.add.collider(this.laser8, this.capaItems);
                this.physics.add.collider(this.laser9, this.capaItems);

                this.physics.add.collider(this.deva, this.plataforma1);
                this.physics.add.collider(this.reni, this.plataforma1);
                this.physics.add.collider(this.deva, this.plataforma3);
                this.physics.add.collider(this.reni, this.plataforma3);
                this.physics.add.collider(this.deva, this.plataforma4);
                this.physics.add.collider(this.reni, this.plataforma4);
                this.physics.add.collider(this.deva, this.plataforma5);
                this.physics.add.collider(this.reni, this.plataforma5);
                this.physics.add.collider(this.reni, this.plataforma6);
                this.physics.add.collider(this.deva, this.plataforma6);
                this.physics.add.collider(this.deva, this.plataforma8);
                this.physics.add.collider(this.reni, this.plataforma8);
                this.physics.add.collider(this.deva, this.plataforma7);
                this.physics.add.collider(this.reni, this.plataforma7);
                this.physics.add.collider(this.deva, this.plataforma2);
                this.physics.add.collider(this.reni, this.plataforma2);
                this.physics.add.collider(this.deva, this.plataforma9);
                this.physics.add.collider(this.reni, this.plataforma9);
                this.physics.add.collider(this.deva, this.plataforma10);
                this.physics.add.collider(this.reni, this.plataforma10);
                this.physics.add.collider(this.deva, this.plataforma11);
                this.physics.add.collider(this.reni, this.plataforma11);
                this.physics.add.collider(this.deva, this.plataforma12);
                this.physics.add.collider(this.reni, this.plataforma12);
                this.physics.add.collider(this.deva, this.plataforma13);
                this.physics.add.collider(this.reni, this.plataforma13);


                this.physics.add.collider(this.caja1, this.plataforma1);
                this.physics.add.collider(this.caja2, this.plataforma1);
                this.physics.add.collider(this.caja3, this.plataforma1);
                this.physics.add.collider(this.caja4, this.plataforma1);
                this.physics.add.collider(this.caja5, this.plataforma1);

                this.physics.add.collider(this.caja1, this.plataforma2);
                this.physics.add.collider(this.caja2, this.plataforma2);
                this.physics.add.collider(this.caja3, this.plataforma2);
                this.physics.add.collider(this.caja4, this.plataforma2);
                this.physics.add.collider(this.caja5, this.plataforma2);

                this.physics.add.collider(this.caja1, this.plataforma3);
                this.physics.add.collider(this.caja2, this.plataforma3);
                this.physics.add.collider(this.caja3, this.plataforma3);
                this.physics.add.collider(this.caja4, this.plataforma3);
                this.physics.add.collider(this.caja5, this.plataforma3);

                this.physics.add.collider(this.caja1, this.plataforma4);
                this.physics.add.collider(this.caja2, this.plataforma4);
                this.physics.add.collider(this.caja3, this.plataforma4);
                this.physics.add.collider(this.caja4, this.plataforma4);
                this.physics.add.collider(this.caja5, this.plataforma4);

                this.physics.add.collider(this.caja1, this.plataforma5);
                this.physics.add.collider(this.caja2, this.plataforma5);
                this.physics.add.collider(this.caja3, this.plataforma5);
                this.physics.add.collider(this.caja4, this.plataforma5);
                this.physics.add.collider(this.caja5, this.plataforma5);

                this.physics.add.collider(this.caja1, this.plataforma6);
                this.physics.add.collider(this.caja2, this.plataforma6);
                this.physics.add.collider(this.caja3, this.plataforma6);
                this.physics.add.collider(this.caja4, this.plataforma6);
                this.physics.add.collider(this.caja5, this.plataforma6);

                this.physics.add.collider(this.caja1, this.plataforma7);
                this.physics.add.collider(this.caja2, this.plataforma7);
                this.physics.add.collider(this.caja3, this.plataforma7);
                this.physics.add.collider(this.caja4, this.plataforma7);
                this.physics.add.collider(this.caja5, this.plataforma7);

                this.physics.add.collider(this.caja1, this.plataforma8);
                this.physics.add.collider(this.caja2, this.plataforma8);
                this.physics.add.collider(this.caja3, this.plataforma8);
                this.physics.add.collider(this.caja4, this.plataforma8);
                this.physics.add.collider(this.caja5, this.plataforma8);
                
                this.physics.add.collider(this.laserv1, this.capaItems);
                this.physics.add.collider(this.laserv2, this.capaItems);
                this.physics.add.collider(this.laserv4, this.capaItems);
                this.physics.add.collider(this.laserv5, this.capaItems);
                this.physics.add.collider(this.laserv6, this.capaItems);
                this.physics.add.collider(this.laserv7, this.capaItems);
                this.physics.add.collider(this.laserv8, this.capaItems);
                this.physics.add.collider(this.laserv10, this.capaItems);
                this.physics.add.collider(this.laserv11, this.capaItems);
                this.physics.add.collider(this.laserv12, this.capaItems);

                this.physics.add.collider(this.deva, this.caja1);
                this.physics.add.collider(this.deva, this.caja2);
                this.physics.add.collider(this.deva, this.caja3);
                this.physics.add.collider(this.deva, this.caja4);
                this.physics.add.collider(this.deva, this.caja5);

                this.physics.add.collider(this.caja1, this.capaItems);
                this.physics.add.collider(this.caja2, this.capaItems);
                this.physics.add.collider(this.caja3, this.capaItems);
                this.physics.add.collider(this.caja4, this.capaItems);
                this.physics.add.collider(this.caja5, this.capaItems);

                this.cursors = this.input.keyboard.createCursorKeys();

                
                this.physics.add.overlap(this.boton1off,this.caja2);
                this.physics.add.overlap(this.boton2off,this.caja3);
                this.physics.add.overlap(this.boton3off,this.caja4);
                this.physics.add.overlap(this.boton3off,this.caja5);
                this.physics.add.overlap(this.boton4off,this.caja4);
                this.physics.add.overlap(this.boton4off,this.caja5);
                this.physics.add.overlap(this.boton5off,this.caja1);
                this.physics.add.overlap(this.boton3on,this.caja4);
                this.physics.add.overlap(this.boton3on,this.caja5);
                this.physics.add.overlap(this.boton4on,this.caja4);
                this.physics.add.overlap(this.boton4on,this.caja5);

                this.physics.add.overlap(this.palanca1Off,this.reni);
                this.physics.add.overlap(this.palanca1Off,this.deva);
                this.physics.add.overlap(this.palanca2Off,this.reni);
                this.physics.add.overlap(this.palanca2Off,this.deva);
                this.physics.add.overlap(this.palanca3Off,this.reni);
                this.physics.add.overlap(this.palanca3Off,this.deva);
                this.physics.add.overlap(this.palanca4Off,this.reni);
                this.physics.add.overlap(this.palanca4Off,this.deva);
               
                this.lefttButton = this.input.keyboard.addKey('A');
                this.rightButton = this.input.keyboard.addKey('D');
                this.upButton = this.input.keyboard.addKey('W');
                this.downButton = this.input.keyboard.addKey('S');
                this.physics.add.overlap(this.reni, this.portal);
                this.physics.add.overlap(this.reni, this.portal);

                this.physics.add.overlap(this.reni, this.escalera1);
                this.physics.add.overlap(this.deva, this.escalera1);
                this.physics.add.overlap(this.reni, this.escalera2);
                this.physics.add.overlap(this.deva, this.escalera2);
                this.physics.add.overlap(this.reni, this.escalera3);
                this.physics.add.overlap(this.deva, this.escalera3);
                this.physics.add.overlap(this.reni, this.escalera4);
                this.physics.add.overlap(this.deva, this.escalera4);
                this.physics.add.overlap(this.reni, this.escalera5);
                this.physics.add.overlap(this.deva, this.escalera5);
                this.physics.add.overlap(this.reni, this.escalera6);
                this.physics.add.overlap(this.deva, this.escalera6);
                this.physics.add.overlap(this.reni, this.escalera7);
                this.physics.add.overlap(this.deva, this.escalera7);
                this.physics.add.overlap(this.reni, this.escalera8);
                this.physics.add.overlap(this.deva, this.escalera8);
                this.physics.add.overlap(this.reni, this.escalera9);
                this.physics.add.overlap(this.deva, this.escalera9);
                this.physics.add.overlap(this.reni, this.escalera10);
                this.physics.add.overlap(this.deva, this.escalera10);
                this.physics.add.overlap(this.reni, this.escalera11);
                this.physics.add.overlap(this.deva, this.escalera11);
                this.physics.add.overlap(this.reni, this.escalera12);
                this.physics.add.overlap(this.deva, this.escalera12);
                this.physics.add.overlap(this.reni, this.escalera13);
                this.physics.add.overlap(this.deva, this.escalera13);
                this.physics.add.overlap(this.reni, this.escalera14);
                this.physics.add.overlap(this.deva, this.escalera14);
                this.physics.add.overlap(this.reni, this.escalera15);
                this.physics.add.overlap(this.deva, this.escalera15);
                this.physics.add.overlap(this.reni, this.escalera16);
                this.physics.add.overlap(this.deva, this.escalera16);

                this.physics.add.overlap(this.reni,this.laser);
                this.physics.add.overlap(this.deva,this.laser);
                this.physics.add.overlap(this.reni,this.laser2);
                this.physics.add.overlap(this.deva,this.laser2);
                this.physics.add.overlap(this.reni,this.laser3);
                this.physics.add.overlap(this.deva,this.laser3);
                this.physics.add.overlap(this.reni,this.laser4);
                this.physics.add.overlap(this.deva,this.laser4);
                // this.physics.add.overlap(this.reni,this.laser5);
                //this.physics.add.overlap(this.deva,this.laser5);
                this.physics.add.overlap(this.reni,this.laser6);
                this.physics.add.overlap(this.deva,this.laser6);
                this.physics.add.overlap(this.reni,this.laser7);
                this.physics.add.overlap(this.deva,this.laser7);
                this.physics.add.overlap(this.reni,this.laser8);
                this.physics.add.overlap(this.deva,this.laser8);
                this.physics.add.overlap(this.reni,this.laser9);
                this.physics.add.overlap(this.deva,this.laser9);
                this.physics.add.overlap(this.reni,this.laser1);
                this.physics.add.overlap(this.deva,this.laser1);

                this.physics.add.overlap(this.reni,this.laserv1);
                this.physics.add.overlap(this.deva,this.laserv1);
                this.physics.add.overlap(this.reni,this.laserv2);
                this.physics.add.overlap(this.deva,this.laserv2);
                this.physics.add.overlap(this.reni,this.laserv4);
                this.physics.add.overlap(this.deva,this.laserv4);
                this.physics.add.overlap(this.reni,this.laserv5);
                this.physics.add.overlap(this.deva,this.laserv5);
                this.physics.add.overlap(this.reni,this.laserv6);
                this.physics.add.overlap(this.deva,this.laserv6);
                this.physics.add.overlap(this.reni,this.laserv7);
                this.physics.add.overlap(this.deva,this.laserv7);
                this.physics.add.overlap(this.reni,this.laserv8);
                this.physics.add.overlap(this.deva,this.laserv8);
                this.physics.add.overlap(this.reni,this.laserv10);
                this.physics.add.overlap(this.deva,this.laserv10);
                this.physics.add.overlap(this.reni,this.laserv11);
                this.physics.add.overlap(this.deva,this.laserv11);
                this.physics.add.overlap(this.reni,this.laserv12);
                this.physics.add.overlap(this.deva,this.laserv12);




                //Para que la camara no se pasa del mapa
                this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);
                //La camara sigue a Reni
                this.cameras.main.startFollow(this.reni);
                
                //Texto Vida siga la cámara
                this.textVida.setScrollFactor(0);

               

            }
            
            
            

            update ()
            {   
                if (this.laser.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laser1.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laser2.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laser3.body.touching.up){
                    this.deva.setVelocity(0,0);
                    this.reni.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laser4.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
               /* if (this.laser5.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                }*/
                if (this.laser6.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laser7.body.touching.up){
                    this.deva.setVelocity(0,0);
                    this.reni.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laser8.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                 if (this.laser9.body.touching.up){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                     
                     this.textVida.text = this.vidasString + this.vida;
                }
               
                 if (this.laserv1.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                     
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv2.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv4.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv5.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv6.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv7.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv8.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv10.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv11.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.laserv12.body.touching.right){
                    this.reni.setVelocity(0,0);
                    this.deva.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=510;
                    this.deva.x=330;
                    this.deva.y=510;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                if (this.vida<=0){
                    game.sound.stopAll();
                    this.scene.start('Game Over');
                }
                
                // Caja se reinicia
                if(this.caja2.y > 3300)
                {
                    this.caja2.x = 480;
                    this.caja2.y = 800;
                }
                if(this.caja1.x < 0)
                {
                    this.caja1.x = 1260;
                    this.caja1.y =  524;
                }
                if(this.caja2.x < 0)
                {
                    this.caja2.x = 480;
                    this.caja2.y = 800;
                }
                if(this.caja5.x < 4334)
                {
                    this.caja5.x = 5184;
                    this.caja5.y = 2572;
                }
                if(this.caja3.y > 1728)
                {
                    this.caja3.x = 284;
                    this.caja3.y = 1580;
                }
                if(this.caja3.x > 736)
                {
                    this.caja3.x = 284;
                    this.caja3.y = 1580;
                }
                
                if(this.boton1off.body.touching.up){
                    this.boton1on.visible=true;
                    this.boton1on.body.enable=true;
                    this.boton1off.body.enable=false;
                    this.boton1off.visible=false;
                    this.plataforma4.visible=true;
                    this.plataforma4.body.enable=true;
                 }
                 
                 if(this.boton2off.body.touching.up){
                    this.boton2on.visible=true;
                    this.boton2on.body.enable=true;
                    this.boton2off.body.enable=false;
                    this.boton2off.visible=false;

                    this.plataforma5.visible=true;
                    this.plataforma5.body.enable=true;

                    this.laser.visible=false;
                    this.laser.body.enable=false;
                    this.laser1.visible=false;
                    this.laser1.body.enable=false;
                    this.laser2.visible=false;
                    this.laser2.body.enable=false;
                    this.laser3.visible=false;
                    this.laser3.body.enable=false;
                    this.laser4.visible=false;
                    this.laser4.body.enable=false;
                    //this.laser5.visible=false;
                    //this.laser5.body.enable=false;
                    this.laser6.visible=false;
                    this.laser6.body.enable=false;
                    this.laser7.visible=false;
                    this.laser7.body.enable=false;
                    this.laser8.visible=false;
                    this.laser8.body.enable=false;
                    this.laser9.visible=false;
                    this.laser9.body.enable=false;

                    this.laserv1.visible=false;
                    this.laserv1.body.enable=false;
                    this.laserv2.visible=false;
                    this.laserv2.body.enable=false;
                    this.laserv4.visible=false;
                    this.laserv4.body.enable=false;
                    this.laserv5.visible=false;
                    this.laserv5.body.enable=false;
                    this.laserv6.visible=false;
                    this.laserv6.body.enable=false;
                    this.laserv7.visible=false;
                    this.laserv7.body.enable=false;
                    this.laserv8.visible=false;
                    this.laserv8.body.enable=false;
                    this.laserv10.visible=false;
                    this.laserv10.body.enable=false;
                    this.laserv11.visible=false;
                    this.laserv11.body.enable=false;
                    this.laserv12.visible=false;
                    this.laserv12.body.enable=false;


                   
                 }
                 if(this.boton3off.body.touching.up){
                    this.boton3on.visible=true;
                    this.boton3on.body.enable=true;
                    this.boton3off.body.enable=false;
                    this.boton3off.visible=false;
                   
                 }
                 if(this.boton4off.body.touching.up){
                    this.boton4on.visible=true;
                    this.boton4on.body.enable=true;
                    this.boton4off.body.enable=false;
                    this.boton4off.visible=false;
                   
                 }
                 if(this.boton5off.body.touching.up){
                    this.boton5on.visible=true;
                    this.boton5on.body.enable=true;
                    this.boton5off.body.enable=false;
                    this.boton5off.visible=false;
                    this.plataforma3.visible=true;
                    this.plataforma3.body.enable=true;
                   
                 }
                 if(this.palanca1Off.body.touching.up){
                    this.palanca1On.visible=true;
                    this.palanca1On.body.enable=true;
                    this.palanca1Off.body.enable=false;
                    this.palanca1Off.visible=false;
                    this.plataforma1.visible=true;
                    this.plataforma1.body.enable=true;
                   
                   
                 }
                 if(this.palanca2Off.body.touching.up){
                    this.palanca2On.visible=true;
                    this.palanca2On.body.enable=true;
                    this.palanca2Off.body.enable=false;
                    this.palanca2Off.visible=false;
                    this.plataforma2.visible=true;
                    this.plataforma2.body.enable=true;
                   
                   
                 }
                 if(this.palanca3Off.body.touching.up){
                    this.palanca3On.visible=true;
                    this.palanca3On.body.enable=true;
                    this.palanca3Off.body.enable=false;
                    this.palanca3Off.visible=false;
                    this.plataforma6.visible=true;
                    this.plataforma6.body.enable=true;
                    this.plataforma10.visible=false;
                    this.plataforma10.body.enable=false;
                    this.plataforma11.visible=false;
                    this.plataforma11.body.enable=false;

                   
                 }
                 if(this.palanca4Off.body.touching.up){
                    this.palanca4On.visible=true;
                    this.palanca4On.body.enable=true;
                    this.palanca4Off.body.enable=false;
                    this.palanca4Off.visible=false;
                    this.plataforma8.visible=true;
                    this.plataforma8.body.enable=true; 
                    this.plataforma7.visible=false;
                    this.plataforma7.body.enable=false;
                    this.plataforma12.visible=false;
                    this.plataforma12.body.enable=false;

                   
                 }
             
                if(this.deva.y>3300){
                    this.deva.setVelocity(0,0);
                    this.deva.x=330;
                    this.deva.y=480;
                    this.reni.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=480;
                    this.vida-=1;
                    
                    this.textVida.text = this.vidasString + this.vida;
                }
                 if(this.reni.y>3300){
                    this.reni.setVelocity(0,0);
                    this.reni.x=330;
                    this.reni.y=480;
                    this.deva.setVelocity(0,0);
                    this.deva.x=330;
                    this.deva.y=480;
                     this.vida-=1;
                     
                     this.textVida.text = this.vidasString + this.vida;
                }

                //Nombres
                this.textReni.x = this.reni.body.position.x + 40;
                this.textReni.y = this.reni.body.position.y - 20;

                this.textDeva.x = this.deva.body.position.x + 40;
                this.textDeva.y = this.deva.body.position.y - 20;

                //Controles Deva
                if (this.cursors.left.isDown)
                {
                    this.deva.setVelocityX(-300);
                    this.deva.anims.play('caminarDeva', true);
                    this.deva.flipX = true;

                    if(!this.sonidoDeva.isPlaying)
                    this.sonidoDeva.play();
                    //this.sonidoDeva.play();
                }
                else if (this.cursors.right.isDown)
                {
                    this.deva.setVelocityX(300);
                    this.deva.anims.play('caminarDeva', true);
                    this.deva.flipX = false;

                    if(!this.sonidoDeva.isPlaying)
                    this.sonidoDeva.play();
                }
                else if (this.cursors.right.isUp)
                {
                    this.deva.setVelocityX(0);
                    this.deva.anims.play('esperaDeva',true);
                    this.sonidoDeva.stop();
                }

                if (!this.deva.body.onFloor()) {

                    this.sonidoDeva.stop();
        
                }

                //Salto
                if (this.cursors.up.isDown && this.deva.body.onFloor() ||this.cursors.up.isDown && this.deva.body.touching.down)
                {
                    this.deva.body.setVelocityY(-290);
                    //this.sonidoDeva.stop();
                    //this.sonidoSalto.play();   
                }
                if(this.upButton.isDown && this.reni.body.onWall()){
                    this.reni.body.setVelocityY(-200);
                   }

             // Sonido caja
                if((this.caja1.body.touching.left&&this.cursors.right.isDown) || (this.caja1.body.touching.right&&this.cursors.left.isDown))
                {

                    if(!this.sonidoCaja.isPlaying)
                    this.sonidoCaja.play();

                }else
                {
                    this.sonidoCaja.stop();
                }
                if((this.caja2.body.touching.left&&this.cursors.right.isDown) || (this.caja2.body.touching.right&&this.cursors.left.isDown))
                {

                    if(!this.sonidoCaja.isPlaying)
                    this.sonidoCaja.play();

                }else
                {
                    this.sonidoCaja.stop();
                }
                if((this.caja3.body.touching.left&&this.cursors.right.isDown) || (this.caja3.body.touching.right&&this.cursors.left.isDown))
                {

                    if(!this.sonidoCaja.isPlaying)
                    this.sonidoCaja.play();

                }else
                {
                    this.sonidoCaja.stop();
                }
                if((this.caja4.body.touching.left&&this.cursors.right.isDown) || (this.caja4.body.touching.right&&this.cursors.left.isDown))
                {

                    if(!this.sonidoCaja.isPlaying)
                    this.sonidoCaja.play();

                }else
                {
                    this.sonidoCaja.stop();
                }
                if((this.caja5.body.touching.left&&this.cursors.right.isDown) || (this.caja5.body.touching.right&&this.cursors.left.isDown))
                {

                    if(!this.sonidoCaja.isPlaying)
                    this.sonidoCaja.play();

                }else
                {
                    this.sonidoCaja.stop();
                }

                //Controles de Reni
                if (this.lefttButton.isDown)
                {
                    this.reni.setVelocityX(-300);
                    this.reni.anims.play('caminarReni', true);
                    this.reni.flipX = true;

                    if(!this.sonidoReni.isPlaying)
                    this.sonidoReni.play();

                }else if (this.rightButton.isDown)
                {
                    this.reni.setVelocityX(300);
                    this.reni.anims.play('caminarReni', true);
                    this.reni.flipX = false;


                    if(!this.sonidoReni.isPlaying)
                    this.sonidoReni.play();
                }
                else{
                    this.reni.setVelocityX(0);
                    this.reni.anims.play('esperaReni',true);
                    this.sonidoReni.stop();
                }

                if (!this.reni.body.onFloor()) {

                    this.sonidoReni.stop();
        
                }

                // Salto
                if(this.upButton.isDown && this.reni.body.onFloor()||this.upButton.isDown && this.reni.body.touching.down)
                {
                    this.reni.body.setVelocityY(-360);
                    //this.sonidoReni.stop();
                    //this.sonidoSalto.play();
                }

                if(this.portal.body.touching.up && this.downButton.isDown && this.cursors.down.isDown && this.boton3on.body.touching.up && this.boton4on.body.touching.up)
                {
                    game.sound.stopAll();
                    this.sonidoPortal.play();
                    this.scene.start('Creditos');
                    
                }
                
            }

        }

class Scene6 extends Phaser.Scene {

    constructor() {

        super({ key: "Creditos" });

    }

    preload() {


    }


    create() {
        this.fondo = this.physics.add.staticSprite(config.width / 2, config.height / 2, 'Fondo');
        this.titulo = this.physics.add.staticSprite(config.width / 2, config.height / 8, 'Titulo');
        this.dis = this.physics.add.staticSprite(config.width / 4, config.height / 2, 'Dis');
        this.prog = this.physics.add.staticSprite(config.width / 2, config.height / 1.5, 'Prog');
        this.disNiveles = this.physics.add.staticSprite(config.width * 3 / 4, config.height / 2.1, 'DisN');
        this.musica=this.sound.add('M_Game_Over');
        this.musicaBotones = this.sound.add('M_Botones');
        this.salir = this.physics.add.staticSprite(config.width / 12, config.height / 10, 'Salir');
        this.salir.setInteractive();
        this.musica.play();

        this.salir.on('pointerover', function () {

            this.salir = this.physics.add.staticSprite(config.width / 12, config.height / 10, 'SalirA');
            this.musicaBotones.play();
        }, this);

        this.salir.on('pointerout', function () {

            this.salir = this.physics.add.staticSprite(config.width / 12, config.height / 10, 'Salir');

        }, this);

        this.salir.on('pointerdown', function () {

            this.musica.stop();
            this.scene.start('Inicio');

        }, this);

    }

    update() {



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
            y:500
        },
        debug: false
    
    }
    
    },
    
    scene: [Scene0,Scene1,Scene2,Scene3,Scene4,Scene5,Scene6]
    
    };
var nivel=null;
var game=new Phaser.Game(config);

