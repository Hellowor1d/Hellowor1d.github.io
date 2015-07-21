// We start by initializing Phaser
// Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'game_div');

// And now we define our first and only state, I'll call it 'main'. A state is a specific scene of a game like a menu, a game over screen, etc.
var main_state = {

    preload: function() {
        // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
        game.load.image('field', 'assets/bg.png');
        game.load.image('cat','assets/cat.png');
        game.load.image('money','assets/money.png');
    },

    create: function() { 
        // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.
        field=game.add.sprite(0,0,'field');
        cat=game.add.sprite(100,450,'cat');
        money= game.add.group();
        money.enableBody=true;
        this.game.time.events.loop(1000,this.addMoney,this);
        cursors = game.input.keyboard.createCursorKeys();
        this.score=0;
        var style={font:'30px Arial',fill:'#ffffff'};
        this.scoreText=game.add.text(10,10,'分数：0',style);
    },

    update: function() {
        // This is where we will spend the most of our time. This function is called 60 times per second to update the game.
       cat.body.velocity.setTo(0, 0);

        if (cursors.left.isDown)
        {
            cat.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            cat.body.velocity.x = 200;
        }
        
        game.physics.overlap(cat,money,this.collectMoney,null,this);
    } ,
    
   collectMoney: function(cat,money) {
        money.kill();
        this.score+=1;
        this.scoreText.content='分数：'+this.score;
    },
    
    addMoney:function(){
        var i=Math.floor(Math.random()*5+1);
        onemoney=money.create(i*80,80,'money');
        onemoney.body.gravity.y=300;         
    }
}

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', main_state);  
game.state.start('main');  