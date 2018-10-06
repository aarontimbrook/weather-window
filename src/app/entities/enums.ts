export enum SummarizationType {
    none,
    mean,
    maximum,
    minimum,
    // [System.Xml.Serialization.XmlEnumAttribute('12hourly')]
    Item12hourly,
    // [System.Xml.Serialization.XmlEnumAttribute('24hourly')]
    Item24hourly,
    national,
    conus,
    alaska
}

export enum AreaType {
    circle,
    rectangle
}

export enum DataType {
    forecast,
    // [System.Xml.Serialization.XmlEnumAttribute('current observations')]
    currentobservations,
    analysis,
    guidance
}

export enum ItemsChoiceType {
    cityNameList,
    data,
    head,
    latLonList,
    minResolution
}

export enum DataSourceType {
    NDFD,
    RTMA
}

export enum ItemChoiceType {
    ge,
    gt,
    le,
    lt
}

export enum AnomalyType {
    // [System.Xml.Serialization.XmlEnumAttribute('average temperature above normal')]
    averagetemperatureabovenormal,
    // [System.Xml.Serialization.XmlEnumAttribute('average temperature below normal')]
    averagetemperaturebelownormal,
    // [System.Xml.Serialization.XmlEnumAttribute('average precipitation above normal')]
    averageprecipitationabovenormal,
    // [System.Xml.Serialization.XmlEnumAttribute('average precipitation below normal')]
    averageprecipitationbelownormal
}

export enum QualifierType {
    // [System.Xml.Serialization.XmlEnumAttribute('+/-')]
    Item,
    // [System.Xml.Serialization.XmlEnumAttribute('+')]
    Item1,
    // [System.Xml.Serialization.XmlEnumAttribute('-')]
    Item2,
    // [System.Xml.Serialization.XmlEnumAttribute('%')]
    Item3
}

export enum UncertaintyType {
    // [System.Xml.Serialization.XmlEnumAttribute('analysis error')]
    analysiserror,
    // [System.Xml.Serialization.XmlEnumAttribute('forecast error')]
    forecasterror,
    likelihood
}

export enum CategoriesType {
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-cdf-percentiles')]
    ekdmoscdfpercentiles,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-qpf-probabilities')]
    ekdmosqpfprobabilities
}

export enum ProbabilityType {
    nonexceedance,
    exceedance
}

export enum TemperatureType {
    maximum,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-maximum')]
    ekdmosmaximum,
    minimum,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-minimum')]
    ekdmosminimum,
    hourly,
    // [System.Xml.Serialization.XmlEnumAttribute('rtma-hourly')]
    rtmahourly,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-hourly')]
    ekdmoshourly,
    // [System.Xml.Serialization.XmlEnumAttribute('dew point')]
    dewpoint,
    // [System.Xml.Serialization.XmlEnumAttribute('rtma-dew point')]
    rtmadewpoint,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-dew point')]
    ekdmosdewpoint,
    // [System.Xml.Serialization.XmlEnumAttribute('heat index')]
    heatindex,
    // [System.Xml.Serialization.XmlEnumAttribute('wind chill')]
    windchill,
    apparent,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-apparent')]
    ekdmosapparent,
    // [System.Xml.Serialization.XmlEnumAttribute('8-14 day anomolies')]
    Item814dayanomolies,
    // [System.Xml.Serialization.XmlEnumAttribute('monthly anomolies')]
    monthlyanomolies,
    // [System.Xml.Serialization.XmlEnumAttribute('seasonal anomolies')]
    seasonalanomolies
}

export enum TemperatureUnits {
    Fahrenheit,
    Celsius
}

export enum LikelihoodUnits {
    percent
}

export enum PrecipitationType {
    liquid,
    // [System.Xml.Serialization.XmlEnumAttribute('rtma-liquid')]
    rtmaliquid,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-liquid')]
    ekdmosliquid,
    snow,
    ice,
    // [System.Xml.Serialization.XmlEnumAttribute('8-14 day anomolies')]
    Item814dayanomolies,
    // [System.Xml.Serialization.XmlEnumAttribute('monthly anomolies')]
    monthlyanomolies,
    // [System.Xml.Serialization.XmlEnumAttribute('seasonal anomolies')]
    seasonalanomolies
}

export enum PrecipitationUnits {
    inches,
    centimeters,
    // [System.Xml.Serialization.XmlEnumAttribute('hundredths of inches')]
    hundredthsofinches,
    // [System.Xml.Serialization.XmlEnumAttribute('hundredths of centimeters')]
    hundredthsofcentimeters,
    meters,
    // [System.Xml.Serialization.XmlEnumAttribute('kilograms per meter squared')]
    kilogramspermetersquared
}

export enum ProbabilityOfPrecipitationType {
    // [System.Xml.Serialization.XmlEnumAttribute('12 hour')]
    Item12hour,
    floating,
    // [System.Xml.Serialization.XmlEnumAttribute('ekdmos-6 hour')]
    ekdmos6hour
}

export enum FireWeatherValueType {
    // [System.Xml.Serialization.XmlEnumAttribute('No Areas')]
    NoAreas,
    // [System.Xml.Serialization.XmlEnumAttribute('Critical Areas')]
    CriticalAreas,
    // [System.Xml.Serialization.XmlEnumAttribute('Extremely Critical Areas')]
    ExtremelyCriticalAreas
}

export enum FireWeatherType {
    // [System.Xml.Serialization.XmlEnumAttribute('risk from wind and relative humidity')]
    riskfromwindandrelativehumidity,
    // [System.Xml.Serialization.XmlEnumAttribute('risk from dry thunderstorms')]
    riskfromdrythunderstorms
}

export enum ConvectiveHazardOutlookValueType {
    // [System.Xml.Serialization.XmlEnumAttribute('No Thunderstorms')]
    NoThunderstorms,
    // [System.Xml.Serialization.XmlEnumAttribute('General Thunderstorms')]
    GeneralThunderstorms,
    // [System.Xml.Serialization.XmlEnumAttribute('Slight Risk of Severe Thunderstorms')]
    SlightRiskofSevereThunderstorms,
    // [System.Xml.Serialization.XmlEnumAttribute('Moderate Risk of Severe Thunderstorms')]
    ModerateRiskofSevereThunderstorms,
    // [System.Xml.Serialization.XmlEnumAttribute('High Risk of Severe Thunderstorms')]
    HighRiskofSevereThunderstorms
}

export enum ConvectiveHazardSevereComponentType {
    tornadoes,
    hail,
    // [System.Xml.Serialization.XmlEnumAttribute('damaging thunderstorm winds')]
    damagingthunderstormwinds,
    // [System.Xml.Serialization.XmlEnumAttribute('extreme tornadoes')]
    extremetornadoes,
    // [System.Xml.Serialization.XmlEnumAttribute('extreme hail')]
    extremehail,
    // [System.Xml.Serialization.XmlEnumAttribute('extreme thunderstorm winds')]
    extremethunderstormwinds,
    // [System.Xml.Serialization.XmlEnumAttribute('severe thunderstorms')]
    severethunderstorms,
    // [System.Xml.Serialization.XmlEnumAttribute('extreme severe thunderstorms')]
    extremeseverethunderstorms
}

export enum WindSpeedType {
    sustained,
    // [System.Xml.Serialization.XmlEnumAttribute('rtma-sustained')]
    rtmasustained,
    gust,
    transport,
    cumulative34,
    cumulative50,
    cumulative64,
    incremental34,
    incremental50,
    incremental64
}

export enum WindSpeedUnits {
    knots,
    // [System.Xml.Serialization.XmlEnumAttribute('meters/second')]
    meterssecond,
    percent,
    // [System.Xml.Serialization.XmlEnumAttribute('miles per hour')]
    milesperhour
}

export enum DirectionType {
    wind,
    // [System.Xml.Serialization.XmlEnumAttribute('rtma-wind')]
    rtmawind,
    swell
}

export enum CloudAmountType {
    total,
    // [System.Xml.Serialization.XmlEnumAttribute('rtma-total')]
    rtmatotal
}

export enum HumidityType {
    relative,
    // [System.Xml.Serialization.XmlEnumAttribute('maximum relative')]
    maximumrelative,
    // [System.Xml.Serialization.XmlEnumAttribute('minimum relative')]
    minimumrelative
}

export enum VisibilityUnits {
    // [System.Xml.Serialization.XmlEnumAttribute('statute miles')]
    statutemiles,
    kilometers,
    meters
}

export enum CoverageType {
    // [System.Xml.Serialization.XmlEnumAttribute('slight chance')]
    slightchance,
    chance,
    likely,
    occasional,
    definitely,
    isolated,
    scattered,
    numerous,
    patchy,
    areas,
    widespread,
    // [System.Xml.Serialization.XmlEnumAttribute('periods of')]
    periodsof,
    frequent,
    intermittent,
    none
}

export enum WeatherConditionsType {
    // [System.Xml.Serialization.XmlEnumAttribute('freezing drizzle')]
    freezingdrizzle,
    // [System.Xml.Serialization.XmlEnumAttribute('freezing rain')]
    freezingrain,
    // [System.Xml.Serialization.XmlEnumAttribute('snow showers')]
    snowshowers,
    // [System.Xml.Serialization.XmlEnumAttribute('blowing snow')]
    blowingsnow,
    // [System.Xml.Serialization.XmlEnumAttribute('blowing dust')]
    blowingdust,
    // [System.Xml.Serialization.XmlEnumAttribute('rain showers')]
    rainshowers,
    // [System.Xml.Serialization.XmlEnumAttribute('ice pellets')]
    icepellets,
    frost,
    rain,
    hail,
    snow,
    thunderstorms,
    drizzle,
    fog,
    haze,
    smoke,
    // [System.Xml.Serialization.XmlEnumAttribute('freezing spray')]
    freezingspray,
    // [System.Xml.Serialization.XmlEnumAttribute('ice fog')]
    icefog,
    // [System.Xml.Serialization.XmlEnumAttribute('freezing fog')]
    freezingfog,
    // [System.Xml.Serialization.XmlEnumAttribute('water spouts')]
    waterspouts,
    // [System.Xml.Serialization.XmlEnumAttribute('volcanic ash')]
    volcanicash,
    // [System.Xml.Serialization.XmlEnumAttribute('ice crystals')]
    icecrystals,
    // [System.Xml.Serialization.XmlEnumAttribute('blowing sand')]
    blowingsand
}

export enum IntensityType {
    // [System.Xml.Serialization.XmlEnumAttribute('very light')]
    verylight,
    light,
    moderate,
    heavy,
    none
}

export enum AdditiveType {
    and,
    or
}

export enum ConditionsIconType {
    // [System.Xml.Serialization.XmlEnumAttribute('forecast-NWS')]
    forecastNWS
}

export enum HazardPhenomenaType {
    Ashfall,
    // [System.Xml.Serialization.XmlEnumAttribute('Air Quality')]
    AirQuality,
    // [System.Xml.Serialization.XmlEnumAttribute('Air Stagnation')]
    AirStagnation,
    // [System.Xml.Serialization.XmlEnumAttribute('Blowing Snow')]
    BlowingSnow,
    // [System.Xml.Serialization.XmlEnumAttribute('Brisk Wind')]
    BriskWind,
    Blizzard,
    // [System.Xml.Serialization.XmlEnumAttribute('Coastal Flood')]
    CoastalFlood,
    // [System.Xml.Serialization.XmlEnumAttribute('Dust Storm')]
    DustStorm,
    // [System.Xml.Serialization.XmlEnumAttribute('Blowing Dust')]
    BlowingDust,
    // [System.Xml.Serialization.XmlEnumAttribute('Excessive Cold')]
    ExcessiveCold,
    // [System.Xml.Serialization.XmlEnumAttribute('Excessive Heat')]
    ExcessiveHeat,
    // [System.Xml.Serialization.XmlEnumAttribute('Excessive Wind')]
    ExcessiveWind,
    // [System.Xml.Serialization.XmlEnumAttribute('Areal Flood')]
    ArealFlood,
    // [System.Xml.Serialization.XmlEnumAttribute('Flash Flood')]
    FlashFlood,
    // [System.Xml.Serialization.XmlEnumAttribute('Dense Fog')]
    DenseFog,
    Flood,
    Frost,
    // [System.Xml.Serialization.XmlEnumAttribute('Red Flag')]
    RedFlag,
    // [System.Xml.Serialization.XmlEnumAttribute('Fire Weather')]
    FireWeather,
    Freeze,
    Gale,
    // [System.Xml.Serialization.XmlEnumAttribute('Hurricane Force Wind')]
    HurricaneForceWind,
    // [System.Xml.Serialization.XmlEnumAttribute('Hurricane Wind')]
    HurricaneWind,
    // [System.Xml.Serialization.XmlEnumAttribute('Heavy Snow')]
    HeavySnow,
    Heat,
    Hurricane,
    // [System.Xml.Serialization.XmlEnumAttribute('High Wind')]
    HighWind,
    // [System.Xml.Serialization.XmlEnumAttribute('Hard Freeze')]
    HardFreeze,
    Sleet,
    // [System.Xml.Serialization.XmlEnumAttribute('Ice Storm')]
    IceStorm,
    // [System.Xml.Serialization.XmlEnumAttribute('Lake Effect Snow and Blowing Snow')]
    LakeEffectSnowandBlowingSnow,
    // [System.Xml.Serialization.XmlEnumAttribute('Lake Effect Snow')]
    LakeEffectSnow,
    // [System.Xml.Serialization.XmlEnumAttribute('Low Water')]
    LowWater,
    // [System.Xml.Serialization.XmlEnumAttribute('Lakeshore Flood')]
    LakeshoreFlood,
    // [System.Xml.Serialization.XmlEnumAttribute('Lake Wind')]
    LakeWind,
    Marine,
    // [System.Xml.Serialization.XmlEnumAttribute('Special Marine')]
    SpecialMarine,
    // [System.Xml.Serialization.XmlEnumAttribute('Small Craft, for Rough Bar')]
    SmallCraftforRoughBar,
    // [System.Xml.Serialization.XmlEnumAttribute('Snow and Blowing Snow')]
    SnowandBlowingSnow,
    // [System.Xml.Serialization.XmlEnumAttribute('Small Craft')]
    SmallCraft,
    // [System.Xml.Serialization.XmlEnumAttribute('Hazardous Seas')]
    HazardousSeas,
    // [System.Xml.Serialization.XmlEnumAttribute('Small Craft, for Winds')]
    SmallCraftforWinds,
    // [System.Xml.Serialization.XmlEnumAttribute('Dense Smoke')]
    DenseSmoke,
    Snow,
    Storm,
    // [System.Xml.Serialization.XmlEnumAttribute('High Surf')]
    HighSurf,
    // [System.Xml.Serialization.XmlEnumAttribute('Severe Thunderstorm')]
    SevereThunderstorm,
    // [System.Xml.Serialization.XmlEnumAttribute('Small Craft, for Hazardous Seas')]
    SmallCraftforHazardousSeas,
    // [System.Xml.Serialization.XmlEnumAttribute('Tropical Storm Wind')]
    TropicalStormWind,
    Tornado,
    // [System.Xml.Serialization.XmlEnumAttribute('Tropical Storm')]
    TropicalStorm,
    Tsunami,
    Typhoon,
    // [System.Xml.Serialization.XmlEnumAttribute('Freezing Spray')]
    FreezingSpray,
    // [System.Xml.Serialization.XmlEnumAttribute('Wind Chill')]
    WindChill,
    Wind,
    // [System.Xml.Serialization.XmlEnumAttribute('Winter Storm')]
    WinterStorm,
    // [System.Xml.Serialization.XmlEnumAttribute('Winter Weather')]
    WinterWeather,
    // [System.Xml.Serialization.XmlEnumAttribute('Freezing Fog')]
    FreezingFog,
    // [System.Xml.Serialization.XmlEnumAttribute('Freezing Rain')]
    FreezingRain,
    // [System.Xml.Serialization.XmlEnumAttribute('Record High Temperature Possible')]
    RecordHighTemperaturePossible,
    // [System.Xml.Serialization.XmlEnumAttribute('Record Low Temperature Possible')]
    RecordLowTemperaturePossible,
    none
}

export enum HazardSignificanceType {
    Watch,
    Statement,
    Warning,
    Advisory,
    none
}

export enum HazardDurationType {
    // [System.Xml.Serialization.XmlEnumAttribute('long duration')]
    longduration,
    // [System.Xml.Serialization.XmlEnumAttribute('short duration')]
    shortduration
}

export enum PressureType {
    barometer,
    absolute,
    // [System.Xml.Serialization.XmlEnumAttribute('mean sea level')]
    meansealevel
}

export enum PressureUnits {
    millibars,
    pascals,
    kilopascals,
    hectopascals,
    // [System.Xml.Serialization.XmlEnumAttribute('pounds per square inch')]
    poundspersquareinch,
    // [System.Xml.Serialization.XmlEnumAttribute('inches of mercury')]
    inchesofmercury,
    // [System.Xml.Serialization.XmlEnumAttribute('millimeters of mercury')]
    millimetersofmercury
}

export enum ProbabilisticConditionType {
    LAMP_VIS,
    LAMP_VISCAT,
    LAMP_CVIS,
    LAMP_CVISCAT,
    LAMP_CLD,
    LAMP_TP2,
    LAMP_TC2
}

export enum SeasType {
    combined
}

export enum SeasUnits {
    feet,
    meters
}

export enum SwellType {
    wind
}

export enum SwellUnits {
    feet,
    meters
}

export enum WavesType {
    wind,

    significant
}

export enum WavesUnits {
    feet,
    meters
}

export enum TimeCoordinateType {
    UTC,
    local
}

export enum DatumType {
    surface,
    // [System.Xml.Serialization.XmlEnumAttribute('mean sea level')]
    meansealevel
}

export enum HeightUnits {
    feet,
    meters
}

export enum RadiusUnits {
    // [System.Xml.Serialization.XmlEnumAttribute('statute miles')]
    statutemiles,
    kilometers
}

export enum FieldType {
    meteorological
}

export enum CategoryType {
    analysis,
    forecast,
    // [System.Xml.Serialization.XmlEnumAttribute('analysis and forecast')]
    analysisandforecast,
    // [System.Xml.Serialization.XmlEnumAttribute('current observations and forecast')]
    currentobservationsandforecast,
    observations,
    guidance
}

export enum ConciseNameType {
    // [System.Xml.Serialization.XmlEnumAttribute('time-series')]
    timeseries,
    glance,
    // [System.Xml.Serialization.XmlEnumAttribute('tabular-digital')]
    tabulardigital,
    // [System.Xml.Serialization.XmlEnumAttribute('digital-zone')]
    digitalzone,
    dwmlByDay
}

export enum OperationalModeType {
    official,
    developmental,
    experimental,
    test
}

export enum SrsNameType {
    // [System.Xml.Serialization.XmlEnumAttribute('WGS 1984')]
    WGS1984
}
