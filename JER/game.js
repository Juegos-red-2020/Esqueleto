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

        //ESCENA3

        this.load.image('GameOver', 'Assets/GameOver.png');
        this.load.image('TextoGameOver','Assets/ReintentarSalir.png');
        
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
        this.load.image('Boton_off','Assets/boton_off.png');
        this.load.image('Boton_on','Assets/boton_on.png');
        this.load.image('Escalera','Assets/Escalera.png');
        this.load.image('Laser','Assets/Laser.png');
        
        //ESCENA5
        this.load.image('tilesEntorno1', 'Assets/mapa/Tiles_Entorno.png');
        this.load.tilemapTiledJSON('mapa1', 'Assets/mapa/map_Grande.json');
        this.load.image('Fondo_1','Assets/mapa/map_Grande.png');
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

class Scene4 extends Phaser.Scene{

        constructor(){
        
            super({key:"Mapa"});
            
        
        }
        
        preload ()
        {
           
        }
        
         create ()
        {   
            this.mapa=this.make.tilemap({key:'mapa'});
            this.fondoTutorial1 = this.physics.add.staticSprite(config.width+600,config.height/2,'Fondo_Tuto_1');
            this.caja = this.physics.add.sprite(config.width, config.height/2, 'cajaOff');
            this.caja.visible=false;
            this.caja.body.enable=false;
            this.caja.setDrag(10000,0);
            this.deva = this.physics.add.sprite(100,420,'Deva');
            this.reni = this.physics.add.sprite(150,420,'Reni');
            this.vidas = this.physics.add.staticSprite(100, 80, 'Vida_Completa');
            this.tilesItems = this.mapa.addTilesetImage('items', 'tilesItems');
            this.palancaOff = this.physics.add.staticSprite(1400, config.height-150, 'PalancaOff');
            this.portal = this.physics.add.staticSprite(config.width+2092, config.height-140, 'Portal');
            this.plataforma = this.physics.add.staticSprite(config.width-520,config.height-102,'Plataforma1');
            this.plataforma.visible=false;
            this.plataforma.body.enable=false;
            this.boton_off= this.physics.add.staticImage(800,472,'Boton_off');
            //this.escalera=this.physics.add.staticImage(850,450,'Escalera');
            //this.escalera.body.enable=false;
            //this.escalera.visible=false;
            // Sonido de pasos
            this.sonidoDeva = this.sound.add('Pasos',{loop: true});
            this.sonidoReni = this.sound.add('Pasos',{loop: true});
            //Sonido caja
            this.sonidoCaja = this.sound.add('Caja',{loop: true});
            //Sonido Salto
            this.sonidoSalto = this.sound.add('Salto',{loop: false});
            
            //Vidas
            this.text = this.add.text(45,20, 'Vidas :', { font: '32px fontGame', fill: '#fff' });
            
            //Establecer los assets de el sprite al mapa colisiones del mapa
            this.capaItems = this.mapa.createDynamicLayer('top',this.tilesItems,0,0);
            this.capaItems.setCollisionByExclusion([-1]);
            
            // Nombre de Reni
            this.textReni = this.add.text(this.reni.body.position.x,this.reni.body.position.y, 'Reni', { font: '20px fontGame', fill: '#fff' });
            this.textDeva = this.add.text(this.deva.body.position.x,this.deva.body.position.y, 'Deva', { font: '20px fontGame', fill: '#fff' });
        
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

            
            //overlaps
            this.physics.add.overlap(this.reni,this.boton_off);
            this.physics.add.overlap(this.reni,this.palancaOff);
            this.physics.add.overlap(this.deva,this.palancaOff);


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
         }
            
         //Controles Deva

               
                if (this.cursors.left.isDown)
                {
                    this.deva.setVelocityX(-200);
                    this.deva.anims.play('caminarDeva', true);
                    this.deva.flipX = true;

                    if(!this.sonidoDeva.isPlaying)
                    this.sonidoDeva.play();
                    //this.sonidoDeva.play();
                }
                else if (this.cursors.right.isDown)
                {
                    this.deva.setVelocityX(200);
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
            
            //Controles de Reni
            if(this.deva.y>620){
                this.deva.x=150;
                this.deva.y=400;

            }
                if(this.reni.y>620){
                    this.reni.x=150;
                    this.reni.y=420;

                }
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
                    this.sonidoPortal.play();
                    this.scene.start('Mapa_Final');
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
                
                this.mapa=this.make.tilemap({key:'mapa1'});
                this.fondo1 = this.physics.add.staticSprite(config.width+1895,config.height+1048,'Fondo_1');
                this.caja = this.physics.add.sprite(config.width+300, config.height/2, 'cajaOff');
                this.deva = this.physics.add.sprite(100,420,'Deva');
                this.reni = this.physics.add.sprite(150,420,'Reni');
                this.vidas = this.physics.add.staticSprite(45, 80, 'Vida');
                this.tilesItems = this.mapa.addTilesetImage('items' , 'tilesItems');
                this.portal = this.physics.add.staticSprite(config.width+5000, config.height+5000, 'Portal');

                // Sonido de pasos
                this.sonidoDeva = this.sound.add('Pasos',{loop: true});
                this.sonidoReni = this.sound.add('Pasos',{loop: true});
                //Sonido caja
                this.sonidoCaja = this.sound.add('Caja',{loop: true});
                //Sonido Salto
                this.sonidoSalto = this.sound.add('Salto',{loop: false});

                //Vidas
                this.vidas = this.add.group();
                for (var i = 0; i < 4; i++) 
                {
                    this.corazones = this.vidas.create(45 + (40 * i), 80, 'Vida');
                }

                this.capaItems = this.mapa.createDynamicLayer('top',this.tilesItems,0,0);
                this.capaItems.setCollisionByExclusion([-1]);   

                // Nombre de Reni
                this.textReni = this.add.text(this.reni.body.position.x,this.reni.body.position.y, 'Reni', { font: '20px fontGame', fill: '#fff' });
                this.textDeva = this.add.text(this.deva.body.position.x,this.deva.body.position.y, 'Deva', { font: '20px fontGame', fill: '#fff' });

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

                this.cursors = this.input.keyboard.createCursorKeys();

                this.lefttButton = this.input.keyboard.addKey('A');
                this.rightButton = this.input.keyboard.addKey('D');
                this.upButton = this.input.keyboard.addKey('W');
                this.downButton = this.input.keyboard.addKey('S');

                //Para que la camara no se pasa del mapa
                this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);
                //La camara sigue a Reni
                this.cameras.main.startFollow(this.reni);
                
                //Vidas
                this.text = this.add.text(45,20, 'Vidas :', { font: '32px fontGame', fill: '#fff' });

            }

            update ()
            {
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
                if (this.cursors.up.isDown && this.deva.body.onFloor() || this.cursors.up.isDown && this.deva.body.touching.down)
                {
                    this.deva.body.setVelocityY(-290);
                    this.sonidoDeva.stop();
                    this.sonidoSalto.play();   
                }

                if((this.caja.body.touching.left&&this.rightButton.isDown) || (this.caja.body.touching.right&&this.lefttButton.isDown))
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
                    this.sonidoReni.stop();
                    this.sonidoSalto.play();
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
            y:500
        },
        debug: false
    
    }
    
    },
    
    scene: [Scene0,Scene1,Scene2,Scene3,Scene4,Scene5]
    
    };
var game=new Phaser.Game(config);

