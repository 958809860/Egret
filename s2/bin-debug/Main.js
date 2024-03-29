var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        _this.addChild(shape);
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touchHander, _this);
        return _this;
    }
    Main.prototype.touchHander = function (event) {
        console.log("时间类型：" + event.type);
        console.log("时间对象：" + event);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
// class Main extends egret.DisplayObjectContainer
// {
//     public constructor()
//     {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//     }
//     private shape:egret.Shape;
//     private onAddToStage() 
//     {
//         this.shape = new egret.Shape();
//         this.addChild(this.shape);
//         console.log("显示对象添加到舞台");    
//     }
// }
// class GridSprite extends egret.Sprite
// {
//     public constructor()
//     {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.drawGrid,this)
//         // this.drawGrid();
//     }
//     private drawGrid(evt:egret.Event) 
//     {
//         this.graphics.beginFill(0x0000ff);
//         this.graphics.drawRect(0,0,50,50);
//         this.graphics.endFill();
//         this.graphics.beginFill(0x0000ff);
//         this.graphics.drawRect(50,50,50,50);
//         this.graphics.endFill();   
//         this.graphics.beginFill(0xff0000);
//         this.graphics.drawRect(50,0,50,50);
//         this.graphics.endFill();
//         this.graphics.beginFill(0xff0000);
//         this.graphics.drawRect(0,50,50,50);
//         this.graphics.endFill();          
//     }
// }
// class Main extends egret.DisplayObjectContainer{
//     public constructor()
//     {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
//     }
//     private onAddToStage(event:egret.Event)
//     {
//         var _myGrid:GridSprite = new GridSprite();
//         this.addChild(_myGrid);
//     }
// }
// class Main extends egret.Sprite{
//     public constructor()
//     {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onStage,this)
//     }
//     private onStage(evt:egret.Event) 
//     {
//         var shp:egret.Shape = new egret.Shape();
//         shp.graphics.lineStyle(10,0x00ff00)
//         shp.graphics.beginFill(0xff0000,1);
//         shp.graphics.drawRect(0,0,100,200);
//         shp.graphics.endFill();
//         this.addChild(shp);
// var spr:egret.Sprite = new egret.Sprite();
// spr.x = 100;
// spr.y = 100;
// this.addChild(spr);
// spr.addChild(shp);
//     }
// }
// class Main extends egret.DisplayObjectContainer{
//     public constructor()
//     {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
//     }
//     private shp:egret.Shape;
//     private onAddToStage (evt:egret.Event)
//     {
//         this.drawCircle();
//         this.shp = new egret.Shape();
//         this.shp.graphics.beginFill( 0x0000ff );
//         this.shp.graphics.drawRect(0,0,100,100);
//         this.shp.graphics.endFill();
//         this.addChild(this.shp);
//         this.stage.frameRate = 60;
//         this.addEventListener(egret.Event.ENTER_FRAME,this.move, this);
//     }
//     private ang:number =0;
//     private r:number =30;
//     private move()
//     {
//         this.shp.x =50 +Math.cos(this.ang *Math.PI/180)*this.r;
//         this.shp.y =50 +Math.sin(this.ang *Math.PI/180)*this.r;
//         this.ang ++;
//     }
//     private drawCircle() 
//     {
//         var cir:egret.Shape = new egret.Shape();
//         cir.graphics.beginFill(0xffffff);
//         cir.graphics.drawCircle(0,0,30);
//         cir.graphics.endFill();
//         cir.x = 50;
//         cir.y = 50;
//         this.addChild(cir);
//     }
// }
// class Main extends egret.DisplayObjectContainer {
//     /**
//      * 加载进度界面
//      * Process interface loading
//      */
//     private loadingView: LoadingUI;
//     public constructor() {
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
//     }
//     private onAddToStage(event: egret.Event) {
//         //设置加载进度界面
//         //Config to load process interface
//         this.loadingView = new LoadingUI();
//         this.stage.addChild(this.loadingView);
//         //初始化Resource资源加载库
//         //initiate Resource loading library
//         RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
//         RES.loadConfig("resource/default.res.json", "resource/");
//     }
//     /**
//      * 配置文件加载完成,开始预加载preload资源组。
//      * configuration file loading is completed, start to pre-load the preload resource group
//      */
//     private onConfigComplete(event: RES.ResourceEvent): void {
//         RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
//         RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
//         RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
//         RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
//         RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
//         RES.loadGroup("preload");
//     }
//     /**
//      * preload资源组加载完成
//      * Preload resource group is loaded
//      */
//     private onResourceLoadComplete(event: RES.ResourceEvent) {
//         if (event.groupName == "preload") {
//             this.stage.removeChild(this.loadingView);
//             RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
//             RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
//             RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
//             RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
//             this.createGameScene();
//         }
//     }
//     /**
//      * 资源组加载出错
//      *  The resource group loading failed
//      */
//     private onItemLoadError(event: RES.ResourceEvent) {
//         console.warn("Url:" + event.resItem.url + " has failed to load");
//     }
//     /**
//      * 资源组加载出错
//      *  The resource group loading failed
//      */
//     private onResourceLoadError(event: RES.ResourceEvent) {
//         //TODO
//         console.warn("Group:" + event.groupName + " has failed to load");
//         //忽略加载失败的项目
//         //Ignore the loading failed projects
//         this.onResourceLoadComplete(event);
//     }
//     /**
//      * preload资源组加载进度
//      * Loading process of preload resource group
//      */
//     private onResourceProgress(event: RES.ResourceEvent) {
//         if (event.groupName == "preload") {
//             this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
//         }
//     }
//     private textfield: egret.TextField;
//     /**
//      * 创建游戏场景
//      * Create a game scene
//      */
//     private createGameScene() {
//         let sky = this.createBitmapByName("bg_jpg");
//         this.addChild(sky);
//         let stageW = this.stage.stageWidth;
//         let stageH = this.stage.stageHeight;
//         sky.width = stageW;
//         sky.height = stageH;
//         let topMask = new egret.Shape();
//         topMask.graphics.beginFill(0x000000, 0.5);
//         topMask.graphics.drawRect(0, 0, stageW, 172);
//         topMask.graphics.endFill();
//         topMask.y = 33;
//         this.addChild(topMask);
//         let icon = this.createBitmapByName("egret_icon_png");
//         this.addChild(icon);
//         icon.x = 26;
//         icon.y = 33;
//         let line = new egret.Shape();
//         line.graphics.lineStyle(2, 0xffffff);
//         line.graphics.moveTo(0, 0);
//         line.graphics.lineTo(0, 117);
//         line.graphics.endFill();
//         line.x = 172;
//         line.y = 61;
//         this.addChild(line);
//         let colorLabel = new egret.TextField();
//         colorLabel.textColor = 0xffffff;
//         colorLabel.width = stageW - 172;
//         colorLabel.textAlign = "center";
//         colorLabel.text = "Hello Egret";
//         colorLabel.size = 24;
//         colorLabel.x = 172;
//         colorLabel.y = 80;
//         this.addChild(colorLabel);
//         let textfield = new egret.TextField();
//         this.addChild(textfield);
//         textfield.alpha = 0;
//         textfield.width = stageW - 172;
//         textfield.textAlign = egret.HorizontalAlign.CENTER;
//         textfield.size = 24;
//         textfield.textColor = 0xffffff;
//         textfield.x = 172;
//         textfield.y = 135;
//         this.textfield = textfield;
//         //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
//         // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
//         RES.getResAsync("description_json", this.startAnimation, this)
//     }
//     /**
//      * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
//      * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
//      */
//     private createBitmapByName(name: string) {
//         let result = new egret.Bitmap();
//         let texture: egret.Texture = RES.getRes(name);
//         result.texture = texture;
//         return result;
//     }
//     /**
//      * 描述文件加载成功，开始播放动画
//      * Description file loading is successful, start to play the animation
//      */
//     private startAnimation(result: string[]) {
//         let parser = new egret.HtmlTextParser();
//         let textflowArr = result.map(text => parser.parse(text));
//         let textfield = this.textfield;
//         let count = -1;
//         let change = () => {
//             count++;
//             if (count >= textflowArr.length) {
//                 count = 0;
//             }
//             let textFlow = textflowArr[count];
//             // 切换描述内容
//             // Switch to described content
//             textfield.textFlow = textFlow;
//             let tw = egret.Tween.get(textfield);
//             tw.to({ "alpha": 1 }, 200);
//             tw.wait(2000);
//             tw.to({ "alpha": 0 }, 200);
//             tw.call(change, this);
//         };
//         change();
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
////////////////////////////////////////////////////////////////////////////////////// 
