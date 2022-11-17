///////////////////////////////////////////////// ////////////
hàm onCreate() {
  ShowToast();
}
//▬▬▬▬▬▬▬▬▬▬
     // NƯỚNG
//▬▬▬▬▬▬▬▬▬▬
hàm ShowToast() {
  var x = document.getElementById("Toast");
  x.className = "hiển thị";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
}
//▬▬▬▬▬▬▬▬▬▬
     // WEB FPS
//▬▬▬▬▬▬▬▬▬▬
 var fps = document.getElementById("fps");

var startTime = Date.now();

khung var = 0;

đánh dấu hàm() {

  var time = Date.now();

  khung ++;

  if (thời gian - startTime > 1000) {

      fps.innerHTML = (khung hình / ((thời gian - startTime) / 1000)).toFixed(1);

      startTime = thời gian;

      khung = 0;

	} window.requestAnimationFrame(đánh dấu);

}

đánh dấu ();

//▬▬▬▬▬▬▬▬▬▬
     // LIÊN KẾT
//▬▬▬▬▬▬▬▬▬▬

chức năng Youtube() {
  setTimeout(function() {
    window.open('https://www.youtube.com/channel/UCiSP9FWliPIwG-w59dJdilQ', 'ultimate')},
  100);
}
hàm Facebook() {
  setTimeout(function() {
    window.open('https://www.facebook.com/100035052735014', 'ultimate')},
  100);
}
chức năng Discord () {
  setTimeout(function() {
    window.open('https://dsc.bio/WusThanhDieu', 'ultimate')},
  100);
}
chức năng Telegram() {
  setTimeout(function() {
    window.open('https://t.me/ThanhDieuChannel', 'ultimate')},
  100);
}

hàm DarkMode() {
  phần tử var = document.body;
  Element.classList.toggle("chế độ tối");
}
//▬▬▬▬▬▬▬▬▬▬
   // HOA ANH ĐÀO
//▬▬▬▬▬▬▬▬▬▬

/*
dừng var, tĩnhx;
var img = Hình ảnh mới();
img.src = "https://i.imgur.com/R9XUjfF.png";

			function Sakura(x, y, s, r, fn) {
				này.x = x;
				này.y = y;
				này.s = s;
				này.r = r;
				cái này.fn = fn;
			}

			Sakura.prototype.draw = function(cxt) {
				cxt.save();
				var xc = 40 * this.s/4;
				cxt.translate(this.x, this.y);
				cxt.rotate(this.r);
				cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
				cxt.khôi phục();
			}

			Sakura.prototype.update = function() {
				this.x = this.fn.x(this.x, this.y);
				this.y = this.fn.y(this.y, this.y);
				this.r = this.fn.r(this.r);
				if(this.x > window.innerWidth ||
					cái này.x < 0 ||
					this.y > window.innerHeight ||
					này.y < 0
				) {
					this.r = getRandom('fnr');
					if(Math.random() > 0,4) {
						this.x = getRandom('x');
						này.y = 0;
						this.s = getRandom('s');
						this.r = getRandom('r');
					} khác {
						this.x = window.innerWidth;
						this.y = getRandom('y');
						this.s = getRandom('s');
						this.r = getRandom('r');
					}
				}
			}

			SakuraList = hàm() {
				this.list = [];
			}
			SakuraList.prototype.push = function(sakura) {
				this.list.push(sakura);
			}
			SakuraList.prototype.update = function() {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].update();
				}
			}
			SakuraList.prototype.draw = function(cxt) {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].draw(cxt);
				}
			}
			SakuraList.prototype.get = function(i) {
				trả lại cái này.list[i];
			}
			SakuraList.prototype.size = function() {
				trả về this.list.length;
			}

			chức năng getRandom (tùy chọn) {
				var ret, ngẫu nhiên;
				chuyển đổi (tùy chọn) {
					trường hợp 'x':
						ret = Math.random() * window.innerWidth;
						phá vỡ;
					trường hợp 'y':
						ret = Math.random() * window.innerHeight;
						phá vỡ;
					các trường hợp':
						ret = Math.random();
						phá vỡ;
					trường hợp 'r':
						ret = Math.random() * 5;
						phá vỡ;
					trường hợp 'fnx':
						ngẫu nhiên = -0,5 + Math.random() * 1;
						ret = hàm (x, y) {
							trả về x + 0,5 * ngẫu nhiên - 1;
						};
						phá vỡ;
					trường hợp 'fny':
						ngẫu nhiên = 0,5 + Math.random() * 0,5
						ret = hàm (x, y) {
							trả lại y + ngẫu nhiên;
						};
						phá vỡ;
					trường hợp 'fnr':
						ngẫu nhiên = Math.random() * 0,01;
						ret = hàm(r) {
							trả lại r + ngẫu nhiên;
						};
						phá vỡ;
				}
				trả lại;
			}

			hàm startSakura() {

				requestAnimationFrame = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame;
				var canvas = document.createElement('canvas'),
					cxt;
				tĩnhx = đúng;
				canvas.height = window.innerHeight;
				canvas.width = window.innerWidth;
				canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
				canvas.setAttribute('id', 'canvas_sakura');
				document.getElementsByTagName('body')[0].appendChild(canvas);
				cxt = canvas.getContext('2d');
				var sakuraList = new SakuraList();
				for(var i = 0; i < 50; i++) {
					var sakura, ngẫu nhiênX, ngẫu nhiênY, ngẫu nhiênS, ngẫu nhiênR, ngẫu nhiênFnx, ngẫu nhiênFny;
					ngẫu nhiênX = getRandom('x');
					ngẫu nhiênY = getRandom('y');
					ngẫu nhiênR = getRandom('r');
					randomS = getRandom('s');
					randomFnx = getRandom('fnx');
					randomFny = getRandom('fny');
					randomFnR = getRandom('fnr');
					sakura = Sakura mới(ngẫu nhiênX, ngẫu nhiênY, ngẫu nhiênS, ngẫu nhiênR, {
						x: ngẫu nhiênFnx,
						y: ngẫu nhiên,
						r: ngẫu nhiênFnR
					});
					sakura.draw(cxt);
					sakuraList.push(sakura);
				}
				dừng = requestAnimationFrame(function() {
					cxt.clearRect(0, 0, canvas.width, canvas.height);
					sakuraList.update();
					sakuraList.draw(cxt);
					dừng = requestAnimationFrame(arguments.callee);
				})
			}

			window.onresize = function() {
				var canvasSnow = document.getElementById('canvas_snow');
				canvasSnow.width = window.innerWidth;
				canvasSnow.height = window.innerHeight;
			}

			img.onload = function() {
				startSakura();
			}

			chức năng dừng() {
				nếu (staticx) {
					var con = document.getElementById("canvas_sakura");
					con.parentNode.removeChild(con);
					window.cancelAnimationFrame(dừng);
					tĩnhx = sai;
				} khác {
					startSakura();
				}
			}
		
		
*/
///////////////////////////////////////////////// ////////////