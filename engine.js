/*
	Game version 0.0.1
	Coded By LOBO 2022
*/
class myClass
{
	constructor()
	{
		this.main = document.getElementById("main");
		this.canvas = document.getElementById("canvas");
		this.canvas.width = this.main.clientWidth;
		this.canvas.height = this.main.clientHeight;
		this.ctx = document.getElementById("canvas").getContext("2d");
		this.playerX = 0;
		this.playerY = 0;
		this.playerSize = 25;
		this.playerColor = "black";
		this.playerSpeed = 5;
	}

	moveKeys(e)
	{
		//S
		if(e.keyCode == 83)
		{
			if(this.playerY < this.canvas.height - this.playerSize)
			{
				this.playerY += this.playerSpeed;
			}
		}
		//W
		if(e.keyCode == 87)
		{
			if(this.playerY > 0)
			{
				this.playerY -= this.playerSpeed;
			}
		}
		//A
		if(e.keyCode == 65)
		{
			if(this.playerX > 0)
			{
				this.playerX -= this.playerSpeed;
			}
		}
		//D
		if(e.keyCode == 68)
		{
			if(this.playerX < this.canvas.width - this.playerSize)
			{
				this.playerX += this.playerSpeed;
			}
		}
	}

	drawPlayer()
	{
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.fillStyle = this.playerColor;
		this.ctx.fillRect(this.playerX,this.playerY,this.playerSize,this.playerSize);
	}
}

let OB = new myClass();

OB.drawPlayer();

window.addEventListener("keydown",(e) =>
{
        OB.moveKeys(e);
	OB.drawPlayer();
});
