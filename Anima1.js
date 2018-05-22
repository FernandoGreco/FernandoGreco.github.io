(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Anima1_atlas_", frames: [[0,0,1332,639],[0,641,1082,642],[1084,641,750,620],[1334,0,451,627]]}
];


// symbols:



(lib.siteFolha = function() {
	this.spriteSheet = ss["Anima1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.siteFolha2 = function() {
	this.spriteSheet = ss["Anima1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.siteFolha3 = function() {
	this.spriteSheet = ss["Anima1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.siteFolha4 = function() {
	this.spriteSheet = ss["Anima1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tablet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBCTQgOgEgJgKQgJgKgEgPQgEgPAAgVIAAhxIgbAAQgFABgCgGQgDgGAAgNIABgNIACgIIADgEIAEgBIAbAAIAAgyQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQACgCADgCQAEgBAGgBIAPAAIAOAAIAKACQADACACACQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIAAAyIAxAAIAEABIADAEIACAIIABANQAAANgDAGQgCAGgFgBIgxAAIAABoQAAASAGAJQAGAKAOgBIAJgBIAIgBIAFgCIAEgCIADACIACADIABAHIABALQAAALgCAHQgBAFgCADIgHAEIgKADIgNACIgOABQgSAAgNgFg");
	this.shape.setTransform(55.5,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpB2QgXgHgPgQQgPgPgGgXQgIgXAAgfQAAgdAIgYQAHgXAPgRQAPgRAVgIQAVgJAZAAQAcAAAUAIQAUAIAMAPQANAPAGATQAGAUAAAYIAAAKQAAAKgFAGQgFAFgJAAIiGAAQgBAOAEAMQADAMAIAIQAHAIAMAEQALAEAQAAQAQAAANgCIAVgFIAPgGQAGgCAEAAIADABIADADIACAGIAAALIAAAJIgBAHIgCAEIgDAEQgBACgIADIgSAGIgaAEQgOACgQAAQgdAAgWgHgAgRhLQgJAEgGAIQgGAHgDALQgDAKAAAMIBcAAQABgbgLgPQgLgPgZAAQgKAAgJAFg");
	this.shape_1.setTransform(34.5,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOCtIgKgBQgDgBgCgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAlGQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQACgCADgBIAKgDIAOAAIAPAAIAKADQADABACACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAFGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCADgDABIgKABIgPABIgOgBg");
	this.shape_2.setTransform(15.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgECuQgKgCgIgEQgJgGgJgHIgRgRIAAAYQAAADgCACIgEADIgJABIgMABIgNgBIgIgBIgFgDIgBgFIAAlGQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQABgCAEgBIAJgDIAQAAIAPAAIAJADQAEABABACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIAAB6QAIgIAJgGQAIgGAJgEQAIgEAIgBQAJgCAKAAQAZAAARAKQARAKALAQQALARAFAVQAFAWAAAZQAAAdgHAYQgGAYgMARQgNAQgRAKQgSAIgXAAQgLAAgJgCgAgJgSQgGABgGAFQgGAEgHAHQgHAGgHAKIAABKQANAQAMAJQAMAJAMAAQANAAAIgGQAJgHAFgKQAGgKACgMQADgNAAgMQAAgOgCgOQgCgNgGgLQgFgJgIgGQgJgFgMAAQgGAAgGABg");
	this.shape_3.setTransform(-3.8,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0B5QgOgFgMgJQgKgJgHgNQgFgOAAgSQgBgTAJgOQAHgPAPgIQAPgJAWgFQAXgEAcAAIAWAAIAAgOQAAgKgCgIQgCgIgFgFQgFgFgIgDQgIgCgLAAQgQAAgMADQgNADgJAFIgPAHQgHAEgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgDgCgBgDIgDgIIAAgKIABgMQACgFADgDQAEgEAIgEIAUgJQAMgDAOgDQAOgCANAAQAaAAATAFQATAFAMALQAMAKAFARQAGARgBAXIAACUQAAAEgCACQgDACgFAAIgQABIgPgBQgGAAgCgCQgCgCAAgEIAAgSQgOAPgSAIQgRAIgUAAQgSAAgPgEgAgJATQgLACgGAFQgHAEgDAHQgDAGAAAIQAAAOAJAIQAJAIAPAAQAMAAALgHQAMgGALgNIAAgmIgYAAQgPAAgKACg");
	this.shape_4.setTransform(-31.4,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPChIgKgCQgEgBgBgCQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAkCIhRAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgCgBgBgDIgCgJIAAgMIAAgNQABgFABgDQABgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIDjAAIAEACQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQABADABAFIAAANIAAAMIgCAJQgBADgCABIgEACIhRAAIAAECQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgBACgEABIgKACIgQABIgPgBg");
	this.shape_5.setTransform(-52.1,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-33.1,133.7,66.3);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.siteFolha4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.572,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,258,333), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.siteFolha3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.683,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,512,332), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.siteFolha2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.478,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,517,302), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.siteFolha();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.384,0.421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,512,269), null);


(lib.smartFone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAC3QgjgNgXgXQgXgXgLgkQgMgkAAgxQAAgsAMglQAMglAXgZQAWgaAhgNQAggOAoAAQAsAAAeAMQAfANAUAXQATAXAJAeQAKAfAAAlIAAAPQAAAQgIAJQgIAJgNgBIjRAAQAAAWAFATQAFARAMANQALAMASAHQASAGAYABQAZgBATgDQAUgDAOgFIAXgIQAKgEAFAAQAEAAACACQACABACADIACAKIABAQIgBAPIgBAKIgCAHIgEAFQgCADgMAFQgLAFgRAEQgSAFgWADQgXADgZAAQgtAAgigLgAgbh2QgOAIgIAMQgKALgFAQQgEAQgBASICQAAQABgpgRgXQgSgXglAAQgRAAgOAGg");
	this.shape.setTransform(84.5,57.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABcC+QgJgBgFgCQgGgCgCgDQgCgDAAgEIAAjDQAAgZgEgPQgEgOgHgKQgHgKgLgGQgLgFgPAAQgRAAgTANQgSAOgVAZIAADkQAAAEgDADQgCADgFACQgGACgJABIgYABIgXgBQgJgBgGgCQgGgCgCgDQgDgDABgEIAAlXQAAgEABgDQACgDAGgCIAMgCIAUgBIAVABIAMACQAEACADADQABADAAAEIAAAoQAdgfAegQQAcgPAgAAQAjAAAZAMQAYALAOAUQAPAUAHAbQAGAaAAAmIAADTQAAAEgCADQgDADgFACQgFACgJABIgYABIgYgBg");
	this.shape_1.setTransform(43.7,57.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhTC1QgigNgXgYQgWgYgLgjQgKgkAAguQAAgrALgkQAMglAYgaQAXgaAkgOQAjgOAuAAQAuAAAiAMQAiANAXAYQAWAZAKAjQALAjAAAuQAAArgLAkQgMAlgXAaQgYAbgjAOQgkAOguAAQguAAgigNgAgkhtQgQAIgLAQQgKAPgFAVQgGAWAAAbQAAAZAFAVQAEAWAKAPQAJAQAQAJQAQAJAYAAQAVgBAQgHQARgJAKgPQAKgPAFgVQAFgWAAgbQAAgYgDgWQgFgVgJgQQgKgQgQgIQgQgJgYAAQgVAAgQAHg");
	this.shape_2.setTransform(1.2,57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABcENQgJgBgGgCQgFgCgCgDQgDgDAAgEIAAjEQABgZgEgPQgEgOgHgJQgHgKgKgGQgMgFgOAAQgSAAgTANQgTANgUAZIAADlQAAAEgDADQgCADgFACQgGACgJABIgYABIgYgBQgIgBgGgCQgGgCgCgDQgCgDAAgEIAAn6QAAgEACgDQACgDAGgCIAOgEIAYgBIAYABIAPAEQAFACACADQADADAAAEIAAC+QAZgZAagMQAZgMAcAAQAjAAAZAMQAXALAPAUQAPAUAGAbQAIAagBAmIAADTQABAEgDADQgCADgGACQgFACgKABIgXABIgYgBg");
	this.shape_3.setTransform(-41.1,49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiQD5QgKgBgFgCQgGgCgDgDQgCgDAAgEIAAnAQAAgSAKgJQAJgJAPAAIB2AAQASAAAPACQAQABAWAEQAXAFAXAMQAXAMAQASQAQASAIAZQAJAYAAAfQAAAqgNAgQgNAggZAWQgZAWglALQgkAMgxAAIgpAAIAACfQAAAEgDADQgCADgGACQgGACgKABQgJACgPAAQgPAAgKgCgAhEgCIAtAAQAXAAARgHQAQgGALgMQAKgMAFgQQAGgRAAgTQAAgagJgRQgKgRgNgIQgOgIgOgCQgOgDgQAAIgrAAg");
	this.shape_4.setTransform(-81.9,51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCDlQgWgIgOgPQgNgPgHgYQgHgXAAggIAAivIgpAAQgHAAgEgJQgEgJAAgVIABgTIADgMQACgEADgCQADgCAEAAIAoAAIAAhNQAAgEADgDQACgDAFgCQAGgDAKAAQAJgCAOAAQAOAAAJACQAJAAAFADQAGACACADQACADAAAEIAABNIBLAAQAEAAADACQADACACAEQACAEABAIIABATQAAAVgEAJQgEAJgIAAIhLAAIAAChQAAAcAJAOQAJAPAXAAQAHAAAHgCIALgDIAIgDIAGgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQACABABAEIADALIABASQAAARgCAJQgDAJgDAEQgEADgGAEIgQAEIgUAEIgVABQgdgBgUgGg");
	this.shape_5.setTransform(83.7,-45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhVC+QgIgBgGgCQgGgCgCgDQgCgDAAgEIAAlXQAAgEACgDQABgDAGgCIAMgCIAUgBIAVABIAMACQAFACACADQACADAAAEIAAArQANgTAMgNQALgMALgIQALgHALgDQAKgDALAAIALABIAMACIALADIAHADIADAFIABAGIABAMIAAAWIAAAXIgCAOQgCAFgDACQgCACgEAAIgHgCIgJgDIgKgCQgGgCgHAAQgIAAgIAEQgIADgIAHQgKAHgIALQgJAMgLARIAADVQAAAEgDADQgCADgFACQgGACgJABIgYABIgYgBg");
	this.shape_6.setTransform(58.5,-41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhRC7QgXgHgRgOQgRgPgJgUQgJgVAAgcQAAgeAMgWQALgXAYgMQAXgQAjgHQAigGAtgBIAiAAIAAgUQAAgRgDgLQgEgMgHgIQgIgJgMgEQgNgDgRAAQgZAAgTAFQgTAFgPAHIgYAMQgKAFgGAAQgEAAgDgDQgEgCgCgFQgCgFgBgIIgBgQQAAgLABgIQACgGAGgGQAFgGAOgGQANgIASgFQASgGAWgEQAVgDAWAAQApAAAcAIQAdAIATAQQASAQAJAaQAIAaAAAkIAADmQAAAFgEADQgEAEgIABQgIACgQgBQgSABgIgCQgIgBgDgEQgDgDAAgFIAAgcQgVAXgbANQgcANggAAQgbAAgXgHgAgOAdQgRADgKAIQgLAGgEALQgFAJAAANQAAAVANANQAOAMAYAAQAUAAARgKQARgLASgTIAAg8IglAAQgYABgPADg");
	this.shape_7.setTransform(22,-40.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ADKC+QgKgBgFgCQgGgCgCgDQgCgDAAgEIAAjLQAAgRgDgPQgEgOgGgKQgHgKgKgGQgLgFgOAAQgRAAgSANQgSAOgVAZIAADkQAAAEgCADQgCADgGACQgFACgKABIgXABIgWgBQgKgBgFgCQgGgCgCgDQgCgDAAgEIAAjLQAAgRgDgPQgEgOgGgKQgHgKgKgGQgLgFgOAAQgSAAgRANQgSAOgUAZIAADkQAAAEgDADQgCADgFACQgGACgKABIgXABIgYgBQgJgBgFgCQgGgCgCgDQgDgDAAgEIAAlXQAAgEACgDQACgDAFgCIANgCIAUgBIAUABIANACQAEACACADQACADAAAEIAAAoQAdgfAcgQQAdgPAeAAQAWAAARAFQARAEANAIQAMAJAKALQAJAMAHAOQAPgRAPgMQAPgMAPgHQAOgIAPgDQAOgEAPAAQAiAAAYAMQAXALAPAUQAOAUAHAbQAGAaAAAeIAADbQAAAEgDADQgCADgFACQgGACgJABIgXABIgYgBg");
	this.shape_8.setTransform(-28.5,-41);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhFD+QgWgEgRgGQgRgGgMgHQgLgGgFgFQgFgFgCgKQgCgJAAgSIAAgUQACgIACgFQABgFADgCQADgCAEAAQAFAAAKAGQAKAHAPAHQAPAIAWAHQAVAFAcAAQATAAAOgDQAOgGAKgIQAKgHAGgNQAFgMABgOQAAgRgKgMQgJgMgPgJQgPgKgSgIIgngSQgTgKgTgLQgTgLgPgQQgPgRgKgWQgIgWgBgfQAAglAOgaQANgcAXgRQAWgTAfgIQAegKAiABQARgBASADQASADAPAEQAQAFAMAGQAMAFADAEIAGAHIACAIIABAKIABARIgBATIgCANQgBAFgCACQgDACgEAAQgFABgJgGQgJgFgNgGQgOgHgSgFQgSgGgVABQgPgBgMAFQgNADgIAIQgJAHgEAKQgDAKAAALQAAARAJAMQAIAMAQAJQAPAKASAIIAoASQATAJAUAMQATAMAPAPQAPARAJAWQAKAWAAAeQAAAngPAeQgPAdgZAVQgYATgiAKQgiAKglAAQgaABgWgFg");
	this.shape_9.setTransform(-79.3,-47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-99.4,213.1,198.8);


(lib.resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmDcQgogPgcgeQgbgdgNgsQgNgrAAg3QAAg0AOgsQAOgtAdgfQAcggAsgRQAqgSA5AAQA4AAAqAPQApAQAbAdQAaAeAOArQANArAAA4QAAA0gOAsQgOAtgdAfQgdAggrARQgqASg5AAQg4AAgqgQgAgsiEQgUAKgMASQgNATgGAaQgHAaAAAhQAAAeAGAaQAEAaAMATQAMAUATALQAUAJAdABQAaAAATgKQAUgKAMgSQAOgSAFgaQAHgaAAgiQgBgdgEgaQgGgbgLgSQgMgUgTgLQgUgKgdgBQgaAAgTAKg");
	this.shape.setTransform(200.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoDjQgQgBgJgDQgIgDgEgFQgEgFgDgIIh9l5IgFgQIgBgMIgBgFQAAgFADgDQACgEAHgDQAGgCAMgBIAdgBQATAAAMACQALAAAHADQAHACADAEQADAEABAGIBfEyIACALIADgLIBekyQABgGAEgEQACgEAHgCQAHgDALAAQALgCARAAIAdABQALABAGACQAGADACAEQADADAAAFIAAAFIgBAHIgCAJIgDAMIh+F5QgCAJgEAFQgEAEgJADQgKADgPABIgpABIgogBg");
	this.shape_1.setTransform(152.6,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcE/QgKgCgHgCQgHgCgDgEQgDgDAAgFIAAmgQAAgFADgDQADgEAHgCQAHgDAKgCQAMgBAQAAQASAAAKABQAMACAHADQAGACADAEQADADAAAFIAAGgQAAAFgDADQgDAEgGACQgHACgMACIgcABIgcgBgAg1jQQgOgNAAgjQAAgjAOgOQAPgOAmAAQAoAAAOAOQAOANAAAiQAAAkgPANQgOAOgnAAQgnAAgOgNg");
	this.shape_2.setTransform(118.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhBDpQgVgEgRgFQgRgGgLgFQgMgHgFgEQgFgFgDgKQgDgLAAgVIABgVQABgJACgFQACgFADgBQADgCAEAAQAFAAAKAGIAZANQAPAHAUAGQAUAGAZAAQAQAAAMgEQAMgCAKgHQAIgFAFgKQAFgKAAgMQAAgOgJgKQgIgKgPgIQgNgHgSgGIglgPQgTgIgSgLQgSgJgOgPQgPgPgIgVQgJgVAAgdQAAgeAMgZQALgaAWgRQAWgSAggKQAggKAmAAQAUAAASADQATADAPAEQAPAFAKAFQAKAEAFAEQAEADACAEIADAJIACAMIAAASIAAAUIgDANQgBAFgDABQgDABgEAAQgEABgJgFIgWgLQgOgGgRgEQgSgFgWgBQgQABgLADQgMADgHAGQgIAHgDAIQgEAIAAAJQAAAPAJAKQAJAJAOAIQAOAIATAGIAlAPQATAHATALQASAJAOAPQAPAPAJAVQAJAUAAAdQAAAkgNAbQgOAbgYASQgZASghAKQghAJgmAAQgYAAgVgDg");
	this.shape_3.setTransform(87.3,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABxDnQgMgCgHgCQgGgCgDgEQgDgDAAgFIAAjtQAAgfgEgSQgFgRgIgMQgJgMgNgHQgNgHgSAAQgWAAgXAQQgXAQgZAgIAAEVQAAAFgCADQgDAEgHACQgHACgLACIgdABIgcgBQgLgCgHgCQgHgCgDgEQgDgDAAgFIAAmhQAAgEADgEQACgEAGgCQAGgDAKAAQAJgCAPAAQAPAAAKACQAKAAAFADQAFACADAEQACAEAAAEIAAAwQAjglAkgTQAjgTAmAAQArAAAeAOQAdAOASAZQASAXAIAhQAIAhAAAtIAAEBQAAAFgDADQgDAEgGACQgHACgLACIgdABIgcgBg");
	this.shape_4.setTransform(42.3,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhmDcQgpgPgbgeQgbgdgNgsQgNgrAAg3QAAg0AOgsQAOgtAdgfQAdggAqgRQArgSA5AAQA4AAApAPQApAQAcAdQAbAeANArQANArAAA4QAAA0gOAsQgOAtgdAfQgdAggrARQgrASg5AAQg3AAgqgQgAgsiEQgUAKgNASQgMATgGAaQgHAaAAAhQAAAeAGAaQAEAaAMATQALAUAUALQAUAJAdABQAZAAAVgKQATgKAMgSQAOgSAFgaQAHgagBgiQAAgdgEgaQgFgbgMgSQgMgUgTgLQgUgKgdgBQgZAAgUAKg");
	this.shape_5.setTransform(-9.3,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AizE6QgLgBgHgCQgHgDgDgEQgCgEAAgFIAApHQgBgEADgEQADgDAFgCQAGgDAKgBQAJgBAOgBQAPABAJABQAKABAGADQAGACACADQACAEABAEIAAAyQASgTASgOQARgPASgJQATgKATgEQASgGAXAAQAtAAAgATQAhASAUAfQAVAgAJAqQAKApAAAwQAAA3gMAsQgMAtgYAfQgWAggjARQgiARgsAAQgSAAgOgEQgQgDgOgIQgOgIgOgKQgOgLgPgPIAADFQgBAFgCAEQgDAEgGADQgIACgLABIgdABIgcgBgAgRjRQgLADgLAHQgNAJgMAMQgNANgOATIAACJQAZAfAWARQAWARAYAAQAXAAARgMQAPgLALgTQAKgSAFgYQAEgYABgYQgBgbgDgYQgEgZgKgUQgKgSgPgMQgQgMgXAAQgLABgMAEg");
	this.shape_6.setTransform(-59.7,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhBDpQgVgEgRgFQgRgGgLgFQgMgHgFgEQgFgFgDgKQgDgLAAgVIABgVQABgJACgFQACgFADgBQADgCAEAAQAFAAAKAGIAZANQAPAHAUAGQAUAGAZAAQAQAAAMgEQAMgCAKgHQAIgFAFgKQAFgKAAgMQAAgOgJgKQgIgKgPgIQgNgHgSgGIglgPQgTgIgSgLQgSgJgOgPQgPgPgIgVQgJgVAAgdQAAgeAMgZQALgaAWgRQAWgSAggKQAggKAmAAQAUAAASADQATADAPAEQAPAFAKAFQAKAEAFAEQAEADACAEIADAJIACAMIAAASIAAAUIgDANQgBAFgDABQgDABgEAAQgEABgJgFIgWgLQgOgGgRgEQgSgFgWgBQgQABgLADQgMADgHAGQgIAHgDAIQgEAIAAAJQAAAPAJAKQAJAJAOAIQAOAIATAGIAlAPQATAHATALQASAJAOAPQAPAPAJAVQAJAUAAAdQAAAkgNAbQgOAbgYASQgZASghAKQghAJgmAAQgYAAgVgDg");
	this.shape_7.setTransform(-105.6,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhODeQgrgOgcgdQgbgcgOgsQgOgrAAg8QAAg2AOgtQAPgtAbgeQAcggAogQQAngRAxAAQA0AAAmAPQAlAQAYAcQAYAbALAlQAMAmgBAsIAAATQABAVgKAJQgKALgRAAIj+AAQAAAbAIAWQAFAWAOAPQAOAPAWAIQAVAHAeAAQAfAAAYgDQAXgFARgFIAdgKQAKgFAIAAQAEAAACACQAEACACAEIACAMIAAATIAAASIgBAMIgDAJIgFAGQgDAEgOAFQgNAGgWAGQgUAFgcAEQgbAEgeAAQg3AAgqgOgAggiPQgRAJgLAOQgMAOgFAUQgHATgBAWICwAAQABgxgUgdQgXgdgsAAQgWABgPAIg");
	this.shape_8.setTransform(-149.3,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AB9EwQgMgBgGgDQgHgCgDgEIgEgKIg3iIIgTgoQgKgSgKgMQgMgMgPgGQgPgGgTAAIgnAAIAADnQAAAFgCADQgEAEgGACQgIADgMABQgLACgTAAQgRAAgMgCQgMgBgHgDQgHgCgDgEQgDgDAAgFIAAomQAAgVALgIQAKgKAPAAICeAAIAmABIAcACQAlAGAeAMQAcANAVAVQAUAUALAcQALAcAAAkQAAAegIAZQgIAZgPAUQgPAUgWAOQgWAOgcAJQANAGANAKQALAJALANQALAOAJARQAJARAJAVIAzB4IAKAaIACANQAAAFgCAEQgCADgHACQgGADgOABIglABIgggBgAhlgmIA/AAQAaAAATgGQAUgGANgLQANgMAHgQQAGgQAAgUQAAgegOgUQgNgVgfgIIgUgEQgMgCgWAAIg3AAg");
	this.shape_9.setTransform(-196.8,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-60.6,456.1,121.2);


(lib.lay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDEVQgagJgRgSQgRgTgIgcQgIgcAAgmIAAjWIgyAAQgJAAgEgKQgFgMAAgZIABgXQABgKADgFQACgGAEgCQADgCAFAAIAxAAIAAheQAAgEADgEQADgEAHgCQAGgDAMgBQALgBARAAQARAAALABQALABAHADQAHACACAEQADAEAAAEIAABeIBbAAQAFAAAEACQADACACAGQACAFACAKIABAXQAAAZgFAMQgFAKgIAAIhcAAIAADEQAAAiALARQALARAbAAQAKAAAHgBIAOgEIAKgEQADgCAEAAQADAAACACQADACABAFIADANIABAWQAAAUgDALQgCALgFAFQgEAEgIAEQgIADgLADIgYAEQgNABgNAAQgjAAgZgJg");
	this.shape.setTransform(116.1,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1DaQgegOgRgZQgTgYgHggQgJghABgvIAAj/QAAgEACgEQADgEAHgCQAGgDAMAAQAMgCAQAAQASAAALACQALAAAHADQAHACADAEQACAEABAEIAADrQgBAhAEASQAFARAJANQAIALAOAHQANAHASAAQAVAAAXgQQAWgRAagfIAAkVQAAgEAEgEQABgEAIgCQAGgDAMAAQAKgCASAAQASAAALACQALAAAHADQAGACADAEQADAEgBAEIAAGhQAAAFgCADQgCAEgGACQgGACgJACIgYABIgZgBQgKgCgGgCQgGgCgCgEQgCgDAAgFIAAgwQgjAlgkATQgiATgnAAQgrAAgdgOg");
	this.shape_1.setTransform(74.3,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhlDcQgqgPgbgeQgbgdgNgsQgNgrAAg3QAAg0APgsQAOgtAcgfQAcggArgRQAsgSA4AAQA4AAApAPQApAQAcAdQAaAeAOArQANArAAA4QAAA0gOAsQgOAtgdAfQgcAggrARQgsASg5AAQg3AAgpgQgAgsiEQgUAKgNASQgMATgHAaQgGAaAAAhQAAAeAFAaQAGAaALATQALAUAUALQAUAJAdABQAaAAATgKQAUgKANgSQAMgSAHgaQAFgaAAgiQABgdgFgaQgFgbgMgSQgMgUgTgLQgTgKgegBQgZAAgUAKg");
	this.shape_2.setTransform(22.9,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUE2QgLgBgGgEQgFgEAAgFQgBgGADgJIA4iMQgGgDgFgFQgFgGgCgHIiQl/QgGgQAAgJQAAgJAFgFQAGgFANgCQAOgCAWAAIAgABQAMABAGADQAHADADAGIAHAQIBhEYIABAAIBakdQADgNAFgEQAEgEAKgCQAKgCAaAAQAVAAANACQANACAHAFQAGAGAAAJQAAAIgEAMIiLGYIgzCVQgEALgSAGQgTAEgjAAIgfgBg");
	this.shape_3.setTransform(-24.5,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhjDjQgcgIgUgSQgUgRgMgZQgLgaAAghQAAgkAPgcQAOgbAcgQQAcgSAqgIQAqgJA3AAIApAAIAAgZQAAgUgEgOQgEgPgJgKQgJgKgPgFQgPgEgWAAQgdAAgXAGQgYAHgSAIIgeAPQgLAGgIAAQgFAAgEgEQgFgDgCgGQgDgGgBgJIgBgUQAAgOACgIQACgJAHgGQAHgIAQgIQAQgIAXgHQAVgHAbgEQAZgFAbAAQAyAAAiAKQAjAKAXATQAWAUAKAgQALAfAAArIAAEYQAAAHgFAEQgEADgLACQgKACgTAAQgWAAgJgCQgKgCgEgDQgDgEAAgHIAAghQgbAcghAPQggAQgoAAQghAAgcgJgAgSAkQgUAEgNAIQgMAJgGAMQgGAMAAAPQAAAaARAPQAQAPAeABQAYgBAVgNQAUgMAWgZIAAhHIgtAAQgcABgUAEg");
	this.shape_4.setTransform(-70.5,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiBExQgQAAgKgJQgLgKAAgUIAAomQAAgFAEgDQACgEAHgCQAIgDAMgBQALgCASAAQATAAALACQAMABAHADQAHACADAEQADADAAAFIAAHnIC+AAQAFAAADADQAEACACAGQACAGACAKIABAXIgBAYIgEAQQgCAGgEADQgDADgFAAg");
	this.shape_5.setTransform(-110.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-60.6,271.2,121.2);


(lib.desktop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhlB5QgCgDgBgEIgBgNIABgQIABgJQABgEACgBQABgCADgBICPhEIiLhAIgHgDQgCgCgBgEQgCgDAAgGIgBgRIABgOQABgGACgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAAEACIC9BfQAEACACAGQABAHABAMIgBALIgBAIIgDAFIgDACIi9BfIgHACQgCgBgBgCg");
	this.shape.setTransform(123.4,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNDhIgJgCQgDgCgCgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAmtQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQACgDADgBIAJgCIANAAIAPAAIAJACQADABABADIABAEIAAGtIgBAEQgBACgDACIgJACIgPAAIgNAAg");
	this.shape_1.setTransform(86.6,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNDhIgJgCQgEgCgBgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAmtQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgDAEgBIAJgCIANAAIAOAAIAJACQAEABACADIABAEIAAGtIgBAEQgCACgEACIgJACIgOAAIgNAAg");
	this.shape_2.setTransform(62.3,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhfCnIgJgCQgEgCgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAk1IABgFQACgCADgBQADgBAFgBIANAAIAMAAIAJACQADABABACQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAAaQAKgKAJgIQAKgHAJgFQAKgGAKgCQAKgDALAAQAZAAARAKQARAKALAQQALARAFAWQAFAWAAAZQAAAegGAXQgHAYgMAQQgMARgTAJQgSAJgXAAQgKAAgHgCQgIgCgHgDQgIgEgIgGQgHgGgIgIIAABpQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgBACgEACIgJACIgPABIgQgBgAgIhvQgHACgGAEQgGAEgHAHQgHAHgHAKIAABJQANAQAMAJQAMAJAMAAQAMAAAJgHQAIgGAGgKQAFgJADgNQADgMAAgNQAAgOgCgNQgDgNgFgLQgFgKgIgGQgJgGgMAAIgLACg");
	this.shape_3.setTransform(25.6,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1B1QgWgIgOgQQgPgPgHgXQgHgXAAgeQAAgbAHgXQAIgYAPgRQAQgRAWgJQAXgJAdAAQAeAAAXAIQAWAIAOAQQAOAQAHAWQAHAXAAAeQAAAbgIAYQgHAXgPARQgPARgXAJQgXAJgeAAQgeAAgVgIgAgXhFQgLAFgGAKQgHAJgDAOQgEAOABARQgBAQADAOQADAOAGAKQAGAKALAGQAKAFAPAAQANAAALgFQALgFAGgJQAHgKAEgOQADgOAAgSQgBgPgCgOQgCgOgHgKQgGgKgKgGQgLgFgPAAQgOAAgKAFg");
	this.shape_4.setTransform(-2.4,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBCTQgOgEgJgKQgJgKgEgPQgEgPAAgVIAAhxIgbAAQgFABgCgGQgDgGAAgNIABgNIACgIIADgEIAEgBIAbAAIAAgyQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQACgCADgCQAEgBAGgBIAPAAIAOAAIAKACQADACACACQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIAAAyIAxAAIAEABIADAEIACAIIABANQAAANgDAGQgCAGgFgBIgxAAIAABoQAAASAGAJQAGAKAOgBIAJgBIAIgBIAFgCIAEgCIADACIACADIABAHIABALQAAALgCAHQgBAFgCADIgHAEIgKADIgNACIgOABQgSAAgNgFg");
	this.shape_5.setTransform(-24.9,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA2CtIgKgBQgEgBgDgCIgEgFIhJh1IAAB1QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCADgDABIgKABIgPABIgPgBIgKgBQgDgBgCgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAlGQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQACgCADgBIAKgDIAPAAIAPAAIAKADQADABACACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAADBIBBhXIAFgFQACgCAEgCIALgCIAPAAIAQAAIAKACQAEACABACQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgCAEIgGAJIhBBJIBLB0IAFAJIABAGQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAIgFADIgKABIgQABIgRgBg");
	this.shape_6.setTransform(-44.1,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiB8IgVgFIgOgGIgJgFQgDgDgCgGQgBgFAAgLIAAgMIACgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAFgBQACAAAGADIANAHIASAHQALADANAAQAJAAAGgCQAGgCAFgDQAFgDADgFQACgFAAgGQAAgIgEgFQgGgGgHgEIgQgHIgUgIIgTgKQgKgFgIgHQgIgIgEgLQgEgLgBgQQAAgQAHgNQAGgOAMgJQAMgKAQgFQARgFAUAAQAKAAAKABIASAEQAIACAGADIAIAFIACADIACAFIABAGIAAAKIAAALIgBAGIgDAEIgDABQgCAAgFgDIgMgFIgQgGQgKgDgMAAQgIAAgFACQgHACgDADQgFADgBAFQgCAEAAAFQgBAIAFAFQAFAFAIAEIARAIIATAHIAUAKQAKAFAIAHQAHAIAFALQAFALAAAQQAAASgHAPQgHAOgNAKQgOAKgRAFQgRAEgVAAQgMAAgLgBg");
	this.shape_7.setTransform(-67.6,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpB2QgWgHgPgQQgPgPgIgXQgHgXAAgfQAAgdAHgYQAJgXAOgRQAPgRAVgIQAVgJAZAAQAcAAAUAIQATAIANAPQANAPAGATQAGAUAAAYIAAAKQAAAKgFAGQgFAFgJAAIiGAAQAAAOADAMQAEAMAHAIQAHAIAMAEQALAEAPAAQARAAANgCIAVgFIAPgGQAGgCAEAAIADABIADADIACAGIAAALIAAAJIgCAHIgBAEIgDAEQgBACgIADIgSAGIgaAEQgOACgQAAQgdAAgWgHgAgRhLQgJAEgGAIQgFAHgEALQgDAKAAAMIBcAAQABgbgLgPQgMgPgXAAQgLAAgJAFg");
	this.shape_8.setTransform(-90.8,5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhxChQgJAAgFgEQgGgFAAgMIAAkXQAAgMAGgFQAFgEAJAAIBSAAQArAAAdAKQAfAKAUAUQAVATAKAdQALAeAAAmQAAAsgMAfQgMAggVATQgWAVgeAJQgfAJgrAAgAhDBtIAiAAQAbAAARgHQASgGAMgOQANgPAGgVQAGgUAAgcQAAgWgFgUQgGgUgMgOQgMgPgSgIQgRgIgeAAIghAAg");
	this.shape_9.setTransform(-118.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.7,-33.1,275.5,66.3);


// stage content:
(lib.Anima1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// celuarTxt
	this.instance = new lib.smartFone("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(388.1,156.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198).to({_off:false},0).wait(1).to({regX:1.2,regY:2,x:389.3,y:158.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.908},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.843},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.777},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.646},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.558},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.434},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1));

	// celular
	this.instance_1 = new lib.Símbolo4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131,166.5,1,1,0,0,0,129,166.5);
	this.instance_1.alpha = 0.219;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(198).to({_off:false},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.504},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.445},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.04},0).to({_off:true},1).wait(1));

	// Camada 7
	this.instance_2 = new lib.Símbolo3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(256,166,1,1,0,0,0,256,166);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.904},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.748},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.07},0).to({_off:true},1).wait(51));

	// txtTablet
	this.instance_3 = new lib.tablet("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.2,33.1);
	this.instance_3.alpha = 0.109;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).wait(1).to({regX:-0.6,regY:0.4,x:239.6,y:33.5,alpha:0.191},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.434},0).wait(1).to({alpha:0.515},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.843},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.777},0).wait(1).to({alpha:0.768},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.608},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.456},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(100));

	// tablet
	this.instance_4 = new lib.Símbolo2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(253.5,203,1,1,0,0,0,258.5,151);
	this.instance_4.alpha = 0.238;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.841},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.557},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.11},0).to({_off:true},1).wait(101));

	// desktop
	this.instance_5 = new lib.desktop("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(260.2,30.9);
	this.instance_5.alpha = 0.141;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).wait(1).to({regX:0.9,regY:4,x:261.1,y:34.9,alpha:0.203},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.392},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.899},0).wait(1).to({alpha:0.888},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.683},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.663},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.642},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.601},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.1},0).to({_off:true},1).wait(150));

	// img1
	this.instance_6 = new lib.Símbolo1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(255,198.5,1,1,0,0,0,256,134.5);
	this.instance_6.alpha = 0.441;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).wait(1).to({alpha:0.502},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.689},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.937},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.715},0).wait(1).to({alpha:0.608},0).wait(1).to({alpha:0.5},0).to({_off:true},1).wait(150));

	// responsivo
	this.instance_7 = new lib.resp("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(254.1,251.6,0.263,0.29);
	this.instance_7.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:1.6,regY:9.5,scaleX:0.29,scaleY:0.32,x:254.6,y:254.6,alpha:0.4},0).wait(1).to({scaleX:0.31,scaleY:0.34,y:254.9,alpha:0.52},0).wait(1).to({scaleX:0.33,scaleY:0.37,x:254.7,y:255.2,alpha:0.64},0).wait(1).to({scaleX:0.35,scaleY:0.4,y:255.4,alpha:0.76},0).wait(1).to({scaleX:0.38,scaleY:0.43,y:255.7,alpha:0.88},0).wait(1).to({scaleX:0.4,scaleY:0.45,x:254.8,y:255.9,alpha:1},0).wait(1).to({scaleX:0.42,scaleY:0.48,y:256.2,alpha:0.999},0).wait(1).to({scaleX:0.44,scaleY:0.51,y:256.4,alpha:0.997},0).wait(1).to({scaleX:0.47,scaleY:0.53,x:254.9,y:256.7,alpha:0.996},0).wait(1).to({scaleX:0.49,scaleY:0.56,y:256.9,alpha:0.994},0).wait(1).to({scaleX:0.51,scaleY:0.59,y:257.2,alpha:0.993},0).wait(1).to({scaleX:0.53,scaleY:0.61,x:255,y:257.5,alpha:0.991},0).wait(1).to({scaleX:0.55,scaleY:0.64,y:257.7,alpha:0.99},0).wait(1).to({scaleX:0.58,scaleY:0.67,y:258,alpha:0.989},0).wait(1).to({scaleX:0.6,scaleY:0.69,x:255.1,y:258.2,alpha:0.987},0).wait(1).to({scaleX:0.62,scaleY:0.72,y:258.5,alpha:0.986},0).wait(1).to({scaleX:0.64,scaleY:0.75,x:255.2,y:258.7,alpha:0.984},0).wait(1).to({scaleX:0.67,scaleY:0.78,y:259,alpha:0.983},0).wait(1).to({scaleX:0.69,scaleY:0.8,y:259.2,alpha:0.981},0).wait(1).to({scaleX:0.71,scaleY:0.83,x:255.3,y:259.5,alpha:0.98},0).wait(1).to({scaleX:0.73,scaleY:0.86,y:259.8,alpha:0.979},0).wait(1).to({scaleX:0.76,scaleY:0.88,y:260,alpha:0.977},0).wait(1).to({scaleX:0.78,scaleY:0.91,x:255.4,y:260.3,alpha:0.976},0).wait(1).to({scaleX:0.8,scaleY:0.94,y:260.5,alpha:0.974},0).wait(1).to({scaleX:0.82,scaleY:0.96,y:260.8,alpha:0.973},0).wait(1).to({scaleX:0.85,scaleY:0.99,x:255.5,y:261,alpha:0.971},0).wait(1).to({scaleX:0.87,scaleY:1.02,y:261.3,alpha:0.97},0).wait(1).to({scaleX:0.89,scaleY:1.04,y:261.5,alpha:0.969},0).wait(1).to({scaleX:0.91,scaleY:1.07,x:255.6,y:261.8,alpha:0.967},0).wait(1).to({scaleX:0.94,scaleY:1.1,y:262.1,alpha:0.966},0).wait(1).to({scaleX:0.96,scaleY:1.13,x:255.7,y:262.3,alpha:0.964},0).wait(1).to({scaleX:0.98,scaleY:1.15,y:262.6,alpha:0.963},0).wait(1).to({scaleX:1,scaleY:1.18,y:262.8,alpha:0.961},0).wait(1).to({scaleX:1.02,scaleY:1.21,x:255.8,y:263.1,alpha:0.96},0).wait(1).to({scaleX:1.05,scaleY:1.23,y:263.3,alpha:0.777},0).wait(1).to({scaleX:1.07,scaleY:1.26,y:263.6,alpha:0.595},0).wait(1).to({scaleX:1.09,scaleY:1.29,x:255.9,y:263.8,alpha:0.412},0).wait(1).to({scaleX:1.11,scaleY:1.31,y:264.1,alpha:0.23},0).to({_off:true},1).wait(211));

	// layout
	this.instance_8 = new lib.lay("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(241.1,100.6,0.347,0.323);
	this.instance_8.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:1.9,regY:10.8,scaleX:0.39,scaleY:0.36,x:241.9,y:104.5,alpha:0.258},0).wait(1).to({scaleX:0.42,scaleY:0.39,y:104.9,alpha:0.407},0).wait(1).to({scaleX:0.46,scaleY:0.43,x:242,y:105.3,alpha:0.555},0).wait(1).to({scaleX:0.5,scaleY:0.46,x:242.1,y:105.6,alpha:0.703},0).wait(1).to({scaleX:0.54,scaleY:0.5,y:106,alpha:0.852},0).wait(1).to({scaleX:0.57,scaleY:0.53,x:242.2,y:106.4,alpha:1},0).wait(1).to({scaleX:0.61,scaleY:0.57,x:242.3,y:106.8,alpha:0.999},0).wait(1).to({scaleX:0.65,scaleY:0.61,x:242.4,y:107.2,alpha:0.998},0).wait(1).to({scaleX:0.69,scaleY:0.64,y:107.5,alpha:0.997},0).wait(1).to({scaleX:0.72,scaleY:0.68,x:242.5,y:107.9,alpha:0.996},0).wait(1).to({scaleX:0.76,scaleY:0.71,x:242.6,y:108.3,alpha:0.995},0).wait(1).to({scaleX:0.8,scaleY:0.75,y:108.7,alpha:0.994},0).wait(1).to({scaleX:0.84,scaleY:0.78,x:242.7,y:109.1,alpha:0.993},0).wait(1).to({scaleX:0.87,scaleY:0.82,x:242.8,y:109.4,alpha:0.991},0).wait(1).to({scaleX:0.91,scaleY:0.85,x:242.9,y:109.8,alpha:0.99},0).wait(1).to({scaleX:0.95,scaleY:0.89,y:110.2,alpha:0.989},0).wait(1).to({scaleX:0.99,scaleY:0.92,x:243,y:110.6,alpha:0.988},0).wait(1).to({scaleX:1.02,scaleY:0.96,x:243.1,y:111,alpha:0.987},0).wait(1).to({scaleX:1.06,scaleY:0.99,y:111.3,alpha:0.986},0).wait(1).to({scaleX:1.1,scaleY:1.03,x:243.2,y:111.7,alpha:0.985},0).wait(1).to({scaleX:1.14,scaleY:1.06,x:243.3,y:112.1,alpha:0.984},0).wait(1).to({scaleX:1.18,scaleY:1.1,x:243.4,y:112.5,alpha:0.983},0).wait(1).to({scaleX:1.21,scaleY:1.13,y:112.9,alpha:0.982},0).wait(1).to({scaleX:1.25,scaleY:1.17,x:243.5,y:113.2,alpha:0.981},0).wait(1).to({scaleX:1.29,scaleY:1.2,x:243.6,y:113.6,alpha:0.98},0).wait(1).to({scaleX:1.33,scaleY:1.24,y:114,alpha:0.979},0).wait(1).to({scaleX:1.36,scaleY:1.27,x:243.7,y:114.4,alpha:0.978},0).wait(1).to({scaleX:1.4,scaleY:1.31,x:243.8,y:114.8,alpha:0.976},0).wait(1).to({scaleX:1.44,scaleY:1.34,x:243.9,y:115.1,alpha:0.975},0).wait(1).to({scaleX:1.48,scaleY:1.38,y:115.5,alpha:0.974},0).wait(1).to({scaleX:1.52,scaleY:1.41,x:244,y:115.9,alpha:0.973},0).wait(1).to({scaleX:1.55,scaleY:1.45,x:244.1,y:116.3,alpha:0.972},0).wait(1).to({scaleX:1.59,scaleY:1.48,y:116.7,alpha:0.971},0).wait(1).to({scaleX:1.63,scaleY:1.52,x:244.2,y:117,alpha:0.97},0).wait(1).to({scaleX:1.67,scaleY:1.55,x:244.3,y:117.4,alpha:0.765},0).wait(1).to({scaleX:1.7,scaleY:1.59,x:244.4,y:117.8,alpha:0.56},0).wait(1).to({scaleX:1.74,scaleY:1.63,y:118.2,alpha:0.355},0).wait(1).to({scaleX:1.78,scaleY:1.66,x:244.5,y:118.6,alpha:0.15},0).to({_off:true},1).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(448,246.5,120.1,188.2);
// library properties:
lib.properties = {
	width: 508,
	height: 331,
	fps: 36,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Anima1_atlas_.png?1526957302328", id:"Anima1_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;