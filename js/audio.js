
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext; //兼容处理
  window.onload = function() {
  var ctx = new AudioContext();
  var audio = document.getElementById("myAudio");//获取音频
  var audioSrc = ctx.createMediaElementSource(audio);//创建音源
  var analyser = ctx.createAnalyser();              //创建分析器

  audioSrc.connect(analyser);  //将音源链接到分析器
  analyser.connect(ctx.destination); //将音源链接到播放

  var frequencyData = new Uint8Array(analyser.frequencyBinCount);//创建数组存放分析器返回数据

  function renderFrame() {
     requestAnimationFrame(renderFrame);

     analyser.getByteFrequencyData(frequencyData);//将分析数据存入数组
     //console.log(frequencyData);

     for (var i = 0; i < 60; i++) {
       var n=frequencyData[i]/2;
       if (n<4) {                 //不让小圆小于4px
         n=4;
       }
       list_out[i].css("height",n+"px");//小圆变形

       var j=i+60;                     //在内圈装下标大于60的array数据
       var m=frequencyData[j]/2;
       if (m<4) {
         m=4;
       }
       list_in[i].css("height",m+"px");//小圆变形
     }
  }
  renderFrame();
};
