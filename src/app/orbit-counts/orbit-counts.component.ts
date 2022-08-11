import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	type: string[]=["Communication", "Probe", "Space Station", "Telescope", "Space Debris","Positioning"];
	orbitType: string[]=["HIGH","LOW"];
  constructor() { }

  ngOnInit() {
  }
 
  countByType(type: string): number {
	let count = 0;
	
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }
 countByOrbitType(orbitType: string): number {
	let count = 0;
	
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].orbitType === orbitType) {
			count++;
		 }
	  }
	}
	return count;
 }
}