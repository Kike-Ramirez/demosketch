import { Component, OnInit } from '@angular/core';
import { Font } from 'p5';
import { P5JSInvoker } from 'src/app/p5-jsinvoker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends P5JSInvoker implements OnInit {
  public title = 'demosketch';
  public x = -50;
  public y = 0;
  public radius = 10;
  public font!: Font; fontsize!: number;

  constructor() {
    super();
    this.startP5JS(document.body);
  }
  ngOnInit(): void {
  }

  preload(): void {
    this.font = this.p5.loadFont('../assets/Roboto/Roboto-Regular.ttf');
  }

  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight);
    this.y = this.p5.windowHeight * 0.5;
    this.radius = 30 + 70 * this.p5.random();
    this.p5.strokeWeight(2);
    this.p5.background(0);
    this.fontsize = 0.08 * this.p5.windowHeight;
    this.p5.textSize(this.fontsize);
    this.p5.textFont(this.font);
  }

  draw() {
    this.x += 10;
    if (this.x > this.p5.windowWidth + 50) {
      this.x = -50;
      this.y = this.p5.windowHeight * this.p5.random();
      this.radius = 30 + 70 * this.p5.random();
    }
    this.p5.stroke(255, 100);
    this.p5.noFill();
    this.p5.circle(this.x, this.y, this.radius);

    this.p5.fill(255);
    this.p5.stroke(255);
    this.p5.textAlign('center', 'center');
    this.p5.textSize(this.fontsize);
    this.p5.text(this.title, 0.5 * this.p5.windowWidth, 0.06 * this.p5.windowHeight);

    this.p5.textSize(0.03 * this.p5.windowHeight);
    this.p5.fill(0);
    this.p5.rect(0.9 * this.p5.windowWidth, 0.9 * this.p5.windowHeight, 0.1 * this.p5.windowWidth, 0.1 * this.p5.windowHeight);
    this.p5.fill(255);
    this.p5.textAlign('left', 'center');
    this.p5.text(this.p5.int(this.p5.frameRate()), 0.94 * this.p5.windowWidth, 0.94 * this.p5.windowHeight);

  }

  windowResized(): void {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
    this.p5.background(0);
    this.fontsize = 0.1 * this.p5.windowHeight;
    this.p5.textSize(this.fontsize);
  }
}
