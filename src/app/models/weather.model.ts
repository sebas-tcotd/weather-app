import { WeatherGroups } from '../constants/weatherGroups';

export class Weather {
  constructor(
    public temperature: number,
    public city: string,
    public country: string,
    public description: string,
    public category: WeatherGroups,
    public pristine: boolean
  ) {}
}
