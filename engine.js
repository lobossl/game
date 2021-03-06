/*
	Game version 0.0.1
	Coded By LOBO 2022
*/
class myClass
{
	constructor()
	{
		//main settings
		this.main = document.getElementById("main");
		this.canvas = document.getElementById("canvas");
		this.canvas.width = this.main.clientWidth;
		this.canvas.height = this.main.clientHeight;
		this.ctx = document.getElementById("canvas").getContext("2d");
		//player
		this.playerX = 0;
		this.playerY = 0;
		this.playerSize = 25;
		this.playerColor = "black";
		this.playerSpeed = 5;
		this.walk = false;
		//cpu
		this.cpuX = canvas.width / 2;
		this.cpuY = canvas.height / 2;
		this.cpuSize = 25;
		this.cpuColor = "green";
		this.cpuSpeed = 1;
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
		this.ctx.fillStyle = this.playerColor;
		this.ctx.fillRect(this.playerX,this.playerY,this.playerSize,this.playerSize);
	}

	drawCPU()
	{
		let a = this.cpuX - this.playerX;
		let b = this.cpuY - this.playerY;

		if(b < 0)
		{
			this.cpuY += this.cpuSpeed;
		}
		else
		{
			this.cpuY -= this.cpuSpeed;
		}

		if(a < 0)
		{
			this.cpuX += this.cpuSpeed;
		}
		else
		{
			this.cpuX -= this.cpuSpeed;
		}

                this.ctx.fillStyle = this.cpuColor;
                this.ctx.fillRect(this.cpuX,this.cpuY,this.cpuSize,this.cpuSize);
	}

	hitBox()
	{
		let a = this.cpuX - this.playerX;
		let b = this.cpuY - this.playerY;

		let x = a.toString().replace("-","");
		let y = b.toString().replace("-","");

		if(x < this.playerSize && y < this.playerSize)
		{
			this.playerSpeed = 0;
			this.cpuColor = "red";
		}
	}
}

let OB = new myClass();

window.addEventListener("keydown",(e) =>
{
        OB.moveKeys(e);
});

setInterval(() =>
{
	OB.ctx.clearRect(0,0,canvas.width,canvas.height);

	OB.drawPlayer();
	OB.drawCPU();
	OB.hitBox();
},1000 / 60);
