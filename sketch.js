//変数の定義
let start=true;
let choose=false;
let explain=false;
let play=false;
let result=false;
let ranking=false; 
let explain_time=0;
let exp=false;
let start_ball=[0,0,0];
let start_ball_color=["#ff000033","#00ff0033","#0000ff33","#ff00ff33","#00ffff33","#ffff0033","#ffffff33","#8000004d","#0080004d","#0000804d","#8080004d","#8000804d","#0080804d","#8080804d"];
let delay=false;
let A_times=0;
let B_times=0;
let red
let green;
let blue;
let H_bar=false;
let S_bar=false;
let B_bar=false;
let A_red;
let A_green;
let A_blue;
let A=false;
let B=false;
let C=0;
let D=false;
let E;
let n=0;
let point=0;
let t_point=[0];
let red_abs;
let blue_abs;
let green_abs;
let average_abs;
let first=  [2,2,2,2,2,2];
let second= [1,1,1,1,1,1];
let third=  [0,0,0,0,0,0];
let first_copy;
let second_copy;
let third_copy;




function setup(){
    createCanvas(1000,700);
    frameRate(60);
    background(200);
    noStroke();
    colorMode(RGB,255,255,255);
    //初期の色設定
    A_red = floor(random(510));
    A_green = floor(random(510));
    A_blue = floor(random(510));
    rect(500,500,30,30);
    //クラスの呼び出し
    red=new red_bar(510);
    green = new green_bar(510);
    blue = new blue_bar(510);
    for(let a=0;a<=100;a++){
        start_ball[a]=new Rain()
        start_ball[a].iro=random(start_ball_color)
    }

    
 }



function touchStarted(){
  for(let touch of touches){
    if(play==true||explain==true){
    //バーの個別当たり判定（一つ動かしたら他を動かせないようにする）
    if(touch.x<=100&&touch.x>=0&&touch.y<=519&&touch.y>=0){H_bar=true;S_bar=false;B_bar=false}
    if(touch.x<=250&&touch.x>=150&&touch.y<=519&&touch.y>=0){H_bar=false;S_bar=true;B_bar=false}
    if(touch.x<=400&&touch.x>=300&&touch.y<=519&&touch.y>=0){H_bar=false;S_bar=false;B_bar=true}    
 }}
    //バーを動かす
    if(H_bar==true){red.move();}
    if(S_bar==true){green.move();}
    if(B_bar==true){blue.move();}




     //ボタンの判定
       //プレイ画面
if(play==true||explain==true){
        //プレイ画面でGUESSボタンが押されたとき
  for(let touch of touches){
    if(touch.y<=650&&touch.y>=550&&touch.x<=985&&touch.x>=725&&B==false){
        A=true;
        exp=true;}}
    //プレイ画面でNEXTボタン（FINISHボタン）が押されたとき
  for(let touch of touches){
    if(touch.y<=650&&touch.y>=550&&touch.x<=985&&touch.x>=725&&B==true){
        if(A_times==B_times){
            //ランキング順位計算
            first_copy=first[E];
            second_copy=second[E];
            third_copy=third[E];
            if(t_point[n]>=first_copy){
                first[E]=t_point[n];
                second[E]=first_copy;
                third[E]=second_copy;
            }
            else if(t_point[n]>=second_copy){
                second[E]=t_point[n];
                third[E]=second_copy;
            }
            else if(t_point[n]>=third_copy){
                third[E]=t_point[n]
            }

            play=false;
            result=true;
            A_times=0
            B_times=0
        }
        B=false
        A_red = floor(random(510));
        A_green = floor(random(510));
        A_blue = floor(random(510));
    }}}
//×ボタンが押されたとき
  for(let touch of touches){
if((explain==true||play==true||ranking==true||choose==true)&&abs(950-touch.x)<=30&&abs(35-touch.y)<=30){
    explain=false;
    play=false;
    ranking=false;
    choose=false;
    start=true;
}


 //スタート画面
else if(start==true){
    //スタート画面でSTARTボタンが押されたとき
  for(let touch of touches){
    if(touch.x<=780&&touch.x>=180&&touch.y<=300&&touch.y>=150){
        delay=true;
        B_times=0
        red.y=0;
        green.y=0;
        blue.y=0;
        t_point[n]=0
        point=0
        B=false
        C=0
        A_red = floor(random(510));
        A_green = floor(random(510));
        A_blue = floor(random(510));
        }}

    //スタート画面でTUTOROALボタンが押されたとき
    if(touch.x<=780&&touch.x>=180&&touch.y<=475&&touch.y>=325&&choose==false){
            explain=true;
            start=false;
            A_times=-1
            red.y=0;
            green.y=0;
            blue.y=0;
            t_point[n]=0
            point=0
            B=false
            C=0
            D=false
            exp=false
            explain_time=0
            A_red = floor(random(510));
            A_green = floor(random(510));
            A_blue = floor(random(510));
        }
        if(touch.x<=780&&touch.x>=180&&touch.y<=650&&touch.y>=500){ranking=true;start=false}
    }
//ラウンド選択画面
else if(choose==true){
            if(touch.x<=470&&touch.x>=50&&touch.y<=275&&touch.y>=150){A_times=1;play=true;start=false;choose=false;E=0;t_point.push(0);n+=1}
            if(touch.x<=950&&touch.x>=530&&touch.y<=275&&touch.y>=150){A_times=3;play=true;start=false;choose=false;E=1;t_point.push(0);n+=1}
            if(touch.x<=470&&touch.x>=50&&touch.y<=475&&touch.y>=350){A_times=5;play=true;start=false;choose=false;E=2;t_point.push(0);n+=1}
            if(touch.x<=950&&touch.x>=530&&touch.y<=475&&touch.y>=350){A_times=7;play=true;start=false;choose=false;E=3;t_point.push(0);n+=1}
            if(touch.x<=470&&touch.x>=50&&touch.y<=675&&touch.y>=550){A_times=10;play=true;start=false;choose=false;E=4;t_point.push(0);n+=1}
            if(touch.x<=950&&touch.x>=530&&touch.y<=675&&touch.y>=550){A_times=15;play=true;start=false;choose=false;E=5;t_point.push(0);n+=1}
         }

else if(result==true){
    if(touch.x<=680&&touch.x>=280&&touch.y<=350&&touch.y>=250){
        red.y=0;
        green.y=0;
        blue.y=0;
        t_point[n]=0
        point=0
        B=false
        C=0
        choose=true;
        result=false;
    }
    if(touch.x<=680&&touch.x>=280&&touch.y<=480&&touch.y>=380){
        start=true;
        result=false
    }
    if(touch.x<=680&&touch.x>=280&&touch.y<=610&&touch.y>=510){ranking=true;result=false}
}}}
 




function touchEnded(){
    //マウス動かす判定の終了
    H_bar=false;S_bar=false;B_bar=false;
}



function mouseDragged(){
  
}









 function draw(){
background(224);
if(delay==true){
    explain_time+=1
    if(explain_time>=15){choose=true;delay=false;start=false}
}
  
//スタート画面の描画
if(start==true){
    background(0);
    //背景の動き
    for(let a=0;a<=100;a++){
        start_ball[a].display();
        start_ball[a].move();
    }
     //ボタン描画
    fill(255);
    textSize(150);
    textFont("Permanent Marker");
    text("IroGuessr",140,110);
    textSize(120);
    if(choose==false){
    for(let q=150;q<=500;q+=175){
        fill(120);
      for(let touch of touches){
        if(touch.x<=780&&touch.x>=180&&touch.y<=(q+150)&&touch.y>=q){fill(150);}}
        rect(180,q,600,150,10);
        }
    fill(255);
    textFont("JetBrains Mono");
    text("START",280,265);
    text("TUTOROAL",195,440);
    text("RANKING",220,615);}
     }




//選択画面の描画   
else if(choose==true){
    background(0);
    for(let a=0;a<=100;a++){
        start_ball[a].display();
        start_ball[a].move();}
    fill(255)
    textSize(150);
    textFont("Permanent Marker");
    text("IroGuessr",140,110);
    textSize(100);
    for(let q=150;q<=700;q+=200){
        for(let p=50;p<=530;p+=480){
            fill(120);
          for(let touch of touches){
            if(touch.x<=(p+420)&&touch.x>=p&&touch.y<=(q+125)&&touch.y>=q){fill(150)}}
            rect(p,q,420,125,10);}}
    fill(255);
    textFont("JetBrains Mono");      
    text("1ROUND",75,240);
    text("3ROUND",555,240);
    text("5ROUND",75,440);
    text("7ROUND",555,440);
    text("10ROUND",50,640);
    text("15ROUND",530,640);
    
}




//チュートリアルの描画
else if(explain==true){
    textSize(30)
    if(H_bar==true||S_bar==true||B_bar==true){D=true}
    text("←①"+'\n'+"このバー"+'\n'+"三つを動かしてこの⤵"+'\n'+"色を変えよう      ↓",400,245);
    if(D==true){
        explain_time+=1/60
        text("②この↓色に近づけよう！",475,400);
        if(explain_time>=3){
            text("③色が近いと"+'\n'+" 思ったらこの→"+'\n'+" ボタンを"+'\n'+" 押そう",525,550);
            if(exp==true){
                text("④もう一回押すと次のラウンドに行くよ",500,690);
                text("↑自分のRGB                        ↑目標のRGB",400,140);
              text("               ↕今回の相対誤差の平均と点数",400,260)
                text("↓累計点数と誤差",0,550);
            }}}

}




//結果画面の描画
else if(result==true){
    textSize(100);
    textFont("JetBrains Mono");
    for(let a=0;a<=100;a++){
        start_ball[a].display();
        start_ball[a].move();}

        for(let q=250;q<=600;q+=130){
        fill(120);
      for(let touch of touches){
        if(touch.x<=680&&touch.x>=280&&touch.y<=(q+150)&&touch.y>=q){fill(150);}}
        rect(280,q,400,100,10);}
    fill(0)
    text("TOTAL:"+t_point[n]+"/"+5000*C+"pt",0,100);
    text(round((t_point[n]/(5000*C)*100))+"%",400,200);
  textSize(75)
    fill(255);
    text("🐫🐪🐫🐪🐫🐪🐫RETRY🐪🐫🐪🐫🐪🐫",-150,325);
    text("🦀🦞🦀🦞🦀🦞🦀HOME🦞🦀🦞🦀🦞🦀🦞🦀🦞🦀",-130,455);
    text("🌝🌞🌝🌞🌝RANKING🌞🌝🌞🌝🌞🌝🌞🌝",-30,585);
      
}
    

//ランキング画面の描画
else if(ranking==true){
    //background(150);
    for(let a=0;a<=100;a++){
        start_ball[a].display();
        start_ball[a].spread();}
    textSize(50);
    fill(255)
    for(let w=5;w<=695;w+=345){
        for(let h=75;h<=375;h+=300){
        rect(w,h,300,250,10);
    }}
   fill(0)
   textFont("Dancing Script");
   text("1ROUND",70,115);
   text("3ROUND",415,115);
   text("5ROUND",750,115);
   text("7ROUND",70,415);
   text("10ROUND",400,415);
   text("15ROUND",750,415);
   fill("#e6b422");
   if(first[0]<=2){text("1:-pt",50.2,160)}else{text("1:"+first[0]+"pt",50.2,160)}
   if(first[1]<=2){text("1:-pt",395.2,160)}else{text("1:"+first[1]+"pt",395.2,160)}
   if(first[2]<=2){text("1:-pt",735.2,160)}else{text("1:"+first[2]+"pt",735.2,160)}
   if(first[3]<=2){text("1:-pt",50.2,460)}else{text("1:"+first[3]+"pt",50.2,460)}
   if(first[4]<=2){text("1:-pt",395.2,460)}else{text("1:"+first[4]+"pt",395.2,460)}
   if(first[5]<=2){text("1:-pt",735.2,460)}else{text("1:"+first[5]+"pt",735.2,460)}
   fill("#bec1c3");
   if(second[0]<=2){text("2:-pt",50.2,220)}else{text("2:"+second[0]+"pt",50.2,220)}
   if(second[1]<=2){text("2:-pt",395.2,220)}else{text("2:"+second[1]+"pt",395.2,220)}
   if(second[2]<=2){text("2:-pt",735.2,220)}else{text("2:"+second[2]+"pt",735.2,220)}
   if(second[3]<=2){text("2:-pt",50.2,520)}else{text("2:"+second[3]+"pt",50.2,520)}
   if(second[4]<=2){text("2:-pt",395.2,520)}else{text("2:"+second[4]+"pt",395.2,520)}
   if(second[5]<=2){text("2:-pt",735.2,520)}else{text("2:"+second[5]+"pt",735.2,520)}
   fill("#9a6229");
   if(third[0]<=2){text("3:-pt",50.2,280)}else{text("3:"+third[0]+"pt",50.2,280)}
   if(third[1]<=2){text("3:-pt",395.2,280)}else{text("3:"+third[1]+"pt",395.2,280)}
   if(third[2]<=2){text("3:-pt",735.2,280)}else{text("3:"+third[2]+"pt",735.2,280)}
   if(third[3]<=2){text("3:-pt",50.2,580)}else{text("3:"+third[3]+"pt",50.2,580)}
   if(third[4]<=2){text("3:-pt",395.2,580)}else{text("3:"+third[4]+"pt",395.2,580)}
   if(third[5]<=2){text("3:-pt",735.2,580)}else{text("3:"+third[5]+"pt",735.2,580)}
}

//プレイ画面の描画
if(play==true||explain==true){
    textFont("Yusei Magic")
    textSize(75);
    //RGB棒の描画
     for(let a=0;a<=519;a+=2){
         fill(floor(a/2),0,0);
         rect(0,0+a,100,2);
        }
    for(let b=0;b<=519;b+=2){
         fill(0,floor(b/2),0);
         rect(150,0+b,100,2);
        }
        for(let c=0;c<=519;c+=2){
            fill(0,0,floor(c/2));
            rect(300,0+c,100,2);
           }
         a=0;b=0;c=0

    //バーの描画
         red.display();
         green.display();
         blue.display();

    //答えの色と自分の解答色の描画
         fill(floor(red.y/2),floor(green.y/2),floor(blue.y/2));
         rect(400,400,300,100);
         fill(floor(A_red/2),floor(A_green/2),floor(A_blue/2));
         rect(700,400,300,100);
         fill(127.5);
         textSize(45)
         text("Your Guess"+"    "+"Target Color ",425,465)

    //答え合わせボタンの描画
         fill(255)
  for(let touch of touches){
         if(touch.y<=850&&touch.y>=700&&touch.x<=1800&&touch.x>=1300){fill(235)}}
         rect(725,550,260,100);
         fill(0);
         textSize(75)
         text("GUESS",750,540,500,150);
         

    //合計得点と割合の描画
         if(C>=1){
         textSize(50)
         text("TOTAL:"+t_point[n]+"/"+5000*C+"pt",0,600);
         text(round((t_point[n]/(5000*C)*100))+"%",100,675);}
    
    //得点の計算
         if(A==true){
             red_abs=((510-abs(A_red-red.y))/510);
             blue_abs=((510-abs(A_blue-blue.y))/510);
             green_abs=((510-abs(A_green-green.y))/510);
             average_abs=(red_abs+blue_abs+green_abs)/3;
             point=round(5000*(red_abs+blue_abs+green_abs)/3);
             t_point[n]+=point;
             B_times+=1
             C+=1;
             B=true;
             A=false;
            }
    
    //答え合わせ画面の描画
            if(B==true){
            textSize(50)
            text(round(average_abs*100)+"%",500,300);
            text(point+"/5000pt",500,200)
            text("("+floor(A_red/2)+","+floor(A_green/2)+","+floor(A_blue/2)+")",700,100);
            text("("+floor(red.y/2)+","+floor(green.y/2)+","+floor(+blue.y/2)+")",400,100);
            fill(255);
              for(let touch of touches){
            if(touch.y<=850&&touch.y>=700&&touch.x<=1800&&touch.x>=1300){fill(235)}}
            rect(725,550,260,100);
            fill(0);
            textSize(75);
            if(A_times==B_times){
                text("FINISH",750,540,500,150)
            
            }
            else {text("NEXT",750,540,500,150);}

            }}

if(explain==true||play==true||ranking==true||choose==true){
    fill(165);
  for(let touch of touches){
    if(abs(950-touch.x)<=30&&abs(35-touch.y)<=30){fill(195)}}
    circle(950,35,60);
    fill(65);
    textSize(50);
    if(ranking==true){textFont("Yusei Magic")}
    text("×",937,50);
    if(ranking==true){textFont("Dancing Script");}
     }
            
        }
    

    //バーのクラス
class red_bar{
    constructor(y){
        this.y=510
    }
    move(){
      for(let touch of touches){
      this.y=touch.y}
      if(this.y>510){this.y=510}
      if(this.y<0){this.y=0}
    }
    display(){
        fill(150)
        rect(0,this.y,100,10);
    }
}

class green_bar{
    constructor(y){
        this.y=510
    }
    move(){
      for(let touch of touches){
      this.y=touch.y}
      if(this.y>510){this.y=510}
      if(this.y<0){this.y=0}
    }
    display(){
        fill(150);
        rect(150,this.y,100,10);
    }
}

class blue_bar{
    constructor(y){
        this.y=510
    }
    move(){
      for(let touch of touches){
      this.y=touch.y}
      if(this.y>510){this.y=510}
      if(this.y<0){this.y=0}
    }
    display(){
        fill(150);
        rect(300,this.y,100,10);
    }
}


class Rain{
    constructor(iro,x,y,spX,spY,r,spR){
        this.x=random(101,899)
        this.y=random(101,599)
        this.spX=random(-3,3)
        this.spY=random(-3,3)
        this.r=random(100,200)
        this.spR=random(-1,1)
    }
    move(){
        if(abs(this.spX)<=1||abs(this.spY)<=1){
        this.spX=random(-3,3)
        this.spY=random(-3,3)
        }
     this.x+=this.spX
     this.y+=this.spY
     if(abs(0-this.x)<=this.r/2||abs(1000-this.x)<=this.r/2){
        this.spX*=-1
     }
     if(abs(0-this.y)<=this.r/2||abs(700-this.y)<=this.r/2){
        this.spY*=-1
    }}
    
    spread(){
    this.r+=this.spR
    if(this.r>=200){this.spR*=-1;this.r-=10}
    if(this.r<=100){this.spR*=-1;this.r+=10}
    if(abs(3-this.x)<=this.r/2||abs(997-this.x)<=this.r/2){
        this.spR*=-1;
     }
     if(abs(3-this.y)<=this.r/2||abs(697-this.y)<=this.r/2){
        this.spR*=-1
    }
    }

    display(){
        fill(this.iro);
        circle(this.x,this.y,this.r);
    }
}
