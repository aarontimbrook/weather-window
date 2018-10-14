export enum SummarizationType {
    none = 'none',
    mean = 'mean',
    maximum = 'maximum',
    minimum = 'minimum',
    Item12hourly = 'Item12hourly',
    Item24hourly = 'Item24hourly',
    national = 'national',
    conus = 'conus',
    alaska = 'alaska'
}

export enum AreaType {
    circle,
    rectangle
}

export enum DataType {
    forecast,
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
    averagetemperatureabovenormal,
    averagetemperaturebelownormal,
    averageprecipitationabovenormal,
    averageprecipitationbelownormal
}

export enum QualifierType {
    Item,
    Item1,
    Item2,
    Item3
}

export enum UncertaintyType {
    analysiserror,
    forecasterror,
    likelihood
}

export enum CategoriesType {
    ekdmoscdfpercentiles,
    ekdmosqpfprobabilities
}

export enum ProbabilityType {
    nonexceedance,
    exceedance
}

export enum TemperatureType {
    maximum,
    ekdmosmaximum,
    minimum,
    ekdmosminimum,
    hourly,
    rtmahourly,
    ekdmoshourly,
    dewpoint,
    rtmadewpoint,
    ekdmosdewpoint,
    heatindex,
    windchill,
    apparent,
    ekdmosapparent,
    Item814dayanomolies,
    monthlyanomolies,
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
    rtmaliquid,
    ekdmosliquid,
    snow,
    ice,
    Item814dayanomolies,
    monthlyanomolies,
    seasonalanomolies
}

export enum PrecipitationUnits {
    inches = 'inches',
    centimeters = 'centimeters',
    hundredthsOfInches = 'hundredths-of-inches',
    hundredthsOfCentimeters = 'hundredths-of-centimeters',
    meters = 'meters',
    kilogramsPerMeterSquared = 'kilograms-per-meter-squared'
}

export enum ProbabilityOfPrecipitationType {
    Item12hour = 'Item12hour',
    floating = 'floating',
    ekdmos6hour = 'ekdmos6hour'
}

export enum FireWeatherValueType {
    NoAreas,
    CriticalAreas,
    ExtremelyCriticalAreas
}

export enum FireWeatherType {
    riskfromwindandrelativehumidity,
    riskfromdrythunderstorms
}

export enum ConvectiveHazardOutlookValueType {
    NoThunderstorms,
    GeneralThunderstorms,
    SlightRiskofSevereThunderstorms,
    ModerateRiskofSevereThunderstorms,
    HighRiskofSevereThunderstorms
}

export enum ConvectiveHazardSevereComponentType {
    tornadoes,
    hail,
    damagingthunderstormwinds,
    extremetornadoes,
    extremehail,
    extremethunderstormwinds,
    severethunderstorms,
    extremeseverethunderstorms
}

export enum WindSpeedType {
    sustained,
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
    meterssecond,
    percent,
    milesperhour
}

export enum DirectionType {
    wind = 'wind',
    rtmaWind = 'rtma-wind',
    swell = 'swell'
}

export enum CloudAmountType {
    total = 'total',
    rtmaTotal = 'rtma-total'
}

export enum HumidityType {
    relative = 'relative',
    maximumRelative = 'maximumrelative',
    minimumRelative = 'minimumrelative'
}

export enum VisibilityUnits {
    statuteMiles = 'statute-miles',
    kilometers = 'kilometers',
    meters = 'meters'
}

export enum CoverageType {
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
    periodsof,
    frequent,
    intermittent,
    none
}

export enum WeatherConditionsType {
    freezingdrizzle,
    freezingrain,
    snowshowers,
    blowingsnow,
    blowingdust,
    rainshowers,
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
    freezingspray,
    icefog,
    freezingfog,
    waterspouts,
    volcanicash,
    icecrystals,
    blowingsand
}

export enum IntensityType {
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
    forecastNWS
}

export enum HazardPhenomenaType {
    Ashfall,
    AirQuality,
    AirStagnation,
    BlowingSnow,
    BriskWind,
    Blizzard,
    CoastalFlood,
    DustStorm,
    BlowingDust,
    ExcessiveCold,
    ExcessiveHeat,
    ExcessiveWind,
    ArealFlood,
    FlashFlood,
    DenseFog,
    Flood,
    Frost,
    RedFlag,
    FireWeather,
    Freeze,
    Gale,
    HurricaneForceWind,
    HurricaneWind,
    HeavySnow,
    Heat,
    Hurricane,
    HighWind,
    HardFreeze,
    Sleet,
    IceStorm,
    LakeEffectSnowandBlowingSnow,
    LakeEffectSnow,
    LowWater,
    LakeshoreFlood,
    LakeWind,
    Marine,
    SpecialMarine,
    SmallCraftforRoughBar,
    SnowandBlowingSnow,
    SmallCraft,
    HazardousSeas,
    SmallCraftforWinds,
    DenseSmoke,
    Snow,
    Storm,
    HighSurf,
    SevereThunderstorm,
    SmallCraftforHazardousSeas,
    TropicalStormWind,
    Tornado,
    TropicalStorm,
    Tsunami,
    Typhoon,
    FreezingSpray,
    WindChill,
    Wind,
    WinterStorm,
    WinterWeather,
    FreezingFog,
    FreezingRain,
    RecordHighTemperaturePossible,
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
    longduration,
    shortduration
}

export enum PressureType {
    barometer,
    absolute,
    meansealevel
}

export enum PressureUnits {
    millibars,
    pascals,
    kilopascals,
    hectopascals,
    poundspersquareinch,
    inchesofmercury,
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
    UTC = 'UTC',
    local = 'local'
}

export enum DatumType {
    surface = 'surface',
    meansealevel = 'mean-sea-level'
}

export enum HeightUnits {
    feet = 'feet',
    meters = 'meters'
}

export enum RadiusUnits {
    statutemiles = 'statute-miles',
    kilometers = 'kilometers'
}

export enum FieldType {
    meteorological
}

export enum CategoryType {
    analysis,
    forecast,
    analysisandforecast,
    currentobservationsandforecast,
    observations,
    guidance
}

export enum ConciseNameType {
    timeseries = 'time-series',
    glance = 'glance',
    tabulardigital = 'tabular-dgitial',
    digitalzone = 'digital-zone',
    dwmlByDay = 'dwml-by-day'
}

export enum OperationalModeType {
    official = 'official',
    developmental = 'developmental',
    experimental = 'experimental',
    test = 'test'
}

export enum SrsNameType {
    WGS1984 = 'WGS 1984'
}
