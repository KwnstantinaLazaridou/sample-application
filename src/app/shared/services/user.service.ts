import { Injectable } from '@angular/core';
import { Constants } from '../../app.constants';
import { Coordinates } from '../models/coordinates';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserCoordinates(): Coordinates {
    const userCoordinates =  new Coordinates();
    userCoordinates.lat = Constants.lat;
    userCoordinates.lng = Constants.lng;

    return userCoordinates;
  }
}