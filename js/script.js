
var n=0;
var list_out=[];
var list_in=[];

function creat() {
  var cell = $("<div></div>");
  cell.addClass("cell");//创建单元容器，并添加ｃｌａｓｓ
  var circle_out = $("<span></span>");//外圈小圆
  var circle_in = $("<span></span>");//内圈小圆

  cell.append(circle_out,circle_in);//向单元容器添加小圆
  cell.css("transform","rotate("+n+"deg)");//让单元容器旋转角度递增

  $(".container").append(cell);//向可视化区域追加单元容器

  circle_out.addClass("circle-out");//为小圆添加class样式
  circle_in.addClass("circle-in");

  list_out[i]=circle_out;//将新建的内外小圆分别装入两个数组，以便后续修改小圆样式
  list_in[i]=circle_in;



}

var i;
for(i=0;i<60;i++) //for循环用让单元容器围成圆
{
  creat();
  n =n + 6; //让单元容器下一次旋转角度加6deg
}
//图形绘制
