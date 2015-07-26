var game = new Phaser.Game(640, 960, Phaser.AUTO, 'game');
var main_state = {
//加载游戏图片资源
    preload: function() {
        game.load.image('field', 'assets/bg.png');
        game.load.image('cat','assets/cat.png');
        game.load.image('money','assets/money.png');
        game.load.audio('getmoney', 'assets/getmoney.wav');
    },
//创建对象
    create: function() { 
        // 设置比例选项
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setScreenSize(true);
        field=game.add.sprite(0,0,'field');
        cat=game.add.sprite(100,800,'cat');
        //拖动小猫
        cat.inputEnabled=true;
        cat.input.enableDrag(false,true);
        cat.input.allowVerticalDrag=false;
        money= game.add.group();
        money.enableBody=true;
        //实现每600毫秒掉落元宝一枚
        this.game.time.events.loop(600,this.addMoney,this);
        //利用定时器调用倒计时函数，实现每秒减计数
        this.game.time.events.loop(1000, this.subTime, this);
        //添加键盘监视对象
        cursors = game.input.keyboard.createCursorKeys();
        //添加分数显示
        this.score=0;
        var style={font:'30px Arial',fill:'#ffffff'};
        this.scoreText=this.add.text(10,10,'分数：0',style); 
        getmoney = game.add.audio('getmoney');
        //添加倒计时功能
        this.time = 30;
        var style = {
            font: '30px Arial',
            fill: '#ffffff'
        };
        this.timeText = game.add.text(350, 10, '时间：30', style);
    },
//游戏每一帧会调用update函数，每秒60帧，实现监听、碰撞检测等
    update: function() {
       game.physics.enable(cat, Phaser.Physics.ARCADE);
       cat.body.velocity.x=0;
        if (cursors.left.isDown)
        {
            cat.body.velocity.x = -300;
        }
        else if (cursors.right.isDown)
        {
            cat.body.velocity.x = 300;
        }
        //碰撞检测
        if (cat.body.sprite.x<0) {cat.body.velocity.x+=300;}
        else if(cat.body.sprite.x>560) {cat.body.velocity.x-=300;}
        //限制活动范围
        game.physics.arcade.overlap(cat,money,this.collectMoney,null,this);
    } ,
    
   collectMoney: function(cat,money) {
        money.kill();
        this.score+=1;
        this.scoreText.setText('分数：'+this.score);
        getmoney.play();
    },
    //倒计时函数
    subTime: function() {
        if (this.time > 0) {
            this.time -= 1;
            this.timeText.setText('时间：' + this.time);
        } else {
            // 计时停止时，让游戏也结束
            this.game.state.end('main');
            
        }
    },
    addMoney:function(){
        //元宝的位置在y=80的位置随机生成
        var i=Math.floor(Math.random()*5+1);
        onemoney=money.create(i*80,80,'money');
        onemoney.body.gravity.y=500;         
    }
}

game.state.add('main', main_state);  
game.state.start('main');  
