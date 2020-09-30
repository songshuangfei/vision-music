void (function (global) {
  // -------effect template
  // -------effect template end 


  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  document.onclick= ()=>{
    fileInput.click();
  };

  function Player(){

  };

  Player.prototype.init = function (container, width, height) {
    this._container = container;
    this._width = width;
    this._height = height;
    this._canvas = document.createElement("canvas");
    this._canvas.setAttribute("width", width);
    this._canvas.setAttribute("height", height);
    this._container.appendChild(this.canvas);
  }

  Player.prototype.setSource = function (type, source) {
    this._sourceType = type;
    this._source = source;
    this.play();
  }

  Player.prototype.play = function () {

  }

  Player.prototype.stop = function () {

  }

  Player.prototype.setEffect = function (name) {
  }

  Player.prototype._draw() = function () {

  }


  global.Vmusic = {
    Player
  };
})(window);