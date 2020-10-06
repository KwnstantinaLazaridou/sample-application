import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { Coordinates } from 'src/app/shared/models/coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  userCoordinates: Coordinates;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userCoordinates = this.userService.getUserCoordinates();
  }
}
