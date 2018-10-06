export class ForecastDataModel {
    timestamp: string;
    temperature: number; // degree f
    dewPoint: number; // degree f
    windChill: number; // degree f
    windSpeedSustained: number; // mph
    windSpeedGust: number; // mph
    windDirection: number;
    compass: string;
    precipitationPotential: number; // %
    cloudCover: number; // %
    relativeHumidity: number; // %
    qpf: number; // inches
    weatherConditionType: string; // rain, snow, freezing rain, null
    weatherConditionCoverage: string; // occassional, likely, chance, slight chance, null
    // fog data

    private degreeToCompass(heading: number): string {
        let compass = '';

        const direction = [
            'N',
            'NNE',
            'NE',
            'ENE',
            'E',
            'ESE',
            'SE',
            'SSE',
            'S',
            'SSW',
            'SW',
            'WSW',
            'W',
            'WNW',
            'NW',
            'NNW'
        ];

        if (heading) {
            const val = Math.floor(heading / 22.5 + 0.5);
            compass = direction[val % 16];
        }

        return compass;
    }
}
