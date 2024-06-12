// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let kiroku=0;
let text;

let b=document.querySelector('#print');
b.addEventListener('click',hantei);

// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
 // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
 let i=document.querySelector('input[name="sitei"]');
 let mae=i.value;
let yoso = Number(mae);

// 課題3-1: 正解判定する
// kotae と yoso が一致するかどうか調べて結果を出力
// 課題3-1における出力先はコンソール
kaisu=kaisu+1;
kiroku=kiroku+1;
let p1=document.querySelector('span#kaisu');
p1.textContent=kaisu;
let p2=document.querySelector('span#answer');
p2.textContent=yoso; 
let p3=document.querySelector('p#result');
if(kiroku<3){
  if(kotae===yoso){
    text=("正解です。おめでとう！");
    kiroku=3;
  }else if(kotae<yoso){
    text=("まちがい。答えはもっと小さいですよ");
  }else{
    text=("まちがい。答えはもっと大きいですよ");
  }
}else if(kiroku===3){
  if(kotae===yoso){
    text=("正解です。おめでとう！");
  }else{
    text=("まちがい。残念でした答えは"+kotae+"です。");
  }
}else if(kiroku>3){
    text=("答えは"+kotae+"でした。すでにゲームは終わっています");
}
p3.textContent=text;
}

