var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'game_div');
var main_state = {
//加载游戏图片资源
    preload: function() {
        game.load.image('field', 'assets/bg.png');
        game.load.image('cat','assets/cat.png');
        game.load.image('money','assets/money.png');
    },
//创建对象
    create: function() { 
        field=game.add.sprite(0,0,'field');
        cat=game.add.sprite(100,450,'cat');
        money= game.add.group();
        money.enableBody=true;
        //实现每秒掉落元宝一枚
        this.game.time.events.loop(1000,this.addMoney,this);
        //添加键盘监视对象
        cursors = game.input.keyboard.createCursorKeys();
        //添加分数显示
        this.score=0;
        var style={font:'30px Arial',fill:'#ffffff'};
        this.scoreText=game.add.text(10,10,'分数：0',style);
    },
//游戏每一帧会调用update函数，每秒60帧，实现监听、碰撞检测等
    update: function() {
       cat.body.velocity.setTo(0, 0);
        if (cursors.left.isDown)
        {
            cat.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            cat.body.velocity.x = 200;
        }
        //碰撞检测
        game.physics.overlap(cat,money,this.collectMoney,null,this);
    } ,
    
   collectMoney: function(cat,money) {
        money.kill();
        this.score+=1;
        this.scoreText.content='分数：'+this.score;
    },
    
    addMoney:function(){
        //元宝的位置在y=80的位置随机生成
        var i=Math.floor(Math.random()*5+1);
        onemoney=money.create(i*80,80,'money');
        onemoney.body.gravity.y=300;         
    }
}

game.state.add('main', main_state);  
game.state.start('main');  