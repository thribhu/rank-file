import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer, Inject } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { StateService } from '../state-name-data.service';
import { DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state;
  previous_id;
  state_id;
  state_name: any;
  constructor(private stateService: StateService, private elRef: ElementRef, @Inject(DOCUMENT) document) { }
  ngOnInit() {
    // this.newState();
    this.state_fucntion();
    // this.changeCol('hi');
  }
/*
  newFunction() {
    setInterval(() => {
      let __state;
      __state = this.stateService.getStateObject();
      this.stateService.new_state(__state.name);
      this.state_name = __state.name;
      console.log(this.state_name);
      this.state_id = __state.id;

      // document.getElementById(this.previous_id).style.fill = '#D3D3D3';
      document.getElementById(this.state_id).style.fill = 'black';
      // console.log(__state.name);
      // document.getElementById(this.state_id).style.fill = 'green';
      __state = '';
      this.state_name = '';
      console.log(this.state_name);
      this.previous_id = this.state_id;
      this.state_id = '';
    }, 3000);
  }
  */
/*
  changeCol(id) {
    console.log('hi!');
    let state_cond = true;
    while (state_cond) {
      document.getElementById(id).style.fill = '#d3d3d3';
      setInterval( () => {
        state_cond = false;
      }, 2000);
    }
  }
  */

  public state_fucntion() {
    setInterval(() => {
      this.state = this.stateService.getStateObject();
      this.state_name = this.state.name;
      this.stateService.new_state(this.state_name);
      this.state_id = this.state.id;
      document.getElementById(this.state_id).style.fill = 'green';
      setTimeout(() => {
        document.getElementById(this.state_id).style.fill = '#d3d3d3';
        this.state = '';
        this.state_name = '';
        this.state_id = '';
      }, 2000);
    }, 3000);
  }
  /*public newState() {
    this.state = this.stateService.getStateObject();
    console.log(this.state);
    this.state_id = this.state.id;
    this.stateService.new_state(this.state.name);
    document.getElementById(this.state_id).style.fill = 'black';
    this.state = '';
    console.log(this.state + 'empty');

  }
  */
}

