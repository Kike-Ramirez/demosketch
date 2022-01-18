import { Component, OnInit } from '@angular/core';
import { P5JSInvoker } from 'src/app/p5-jsinvoker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends P5JSInvoker implements OnInit {
  title = 'demosketch';
  public x = -50;
  public y = 0;
  public radius = 10;

  constructor() {
    super();
    this.startP5JS(document.body);
  }
  ngOnInit(): void {
  }

  setup() {
    this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight);
    this.y = this.p5.windowHeight * 0.5;
    this.radius = 30 + 70 * this.p5.random();
    this.p5.noFill();
    this.p5.strokeWeight(2);
    this.p5.background(0);
  }

  draw() {
    this.x += 10;
    if (this.x > this.p5.windowWidth + 50) {
      this.x = -50;
      this.y = this.p5.windowHeight * this.p5.random();
      this.radius = 30 + 70 * this.p5.random();
    }
    this.p5.stroke(255, 100);
    this.p5.circle(this.x, this.y, this.radius);
  }
}
