import React, { Component } from "react";
import * as Icon from "react-weather-icons";
import "./index.css";

export default class App extends Component {
	render() {
		let color = "#000000",
			size = 40;

		return (
			<div className="icons-container">
				<div className="icon-wrapper">
					<Icon.Alien color={color} size={size} />
					<span className="icon-name">Alien</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Barometer color={color} size={size} />
					<span className="icon-name">Barometer</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Celsius color={color} size={size} />
					<span className="icon-name">Celsius</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Cloud color={color} size={size} />
					<span className="icon-name">Cloud</span>
				</div>
				<div className="icon-wrapper">
					<Icon.CloudDown color={color} size={size} />
					<span className="icon-name">CloudDown</span>
				</div>
				<div className="icon-wrapper">
					<Icon.CloudRefresh color={color} size={size} />
					<span className="icon-name">CloudRefresh</span>
				</div>
				<div className="icon-wrapper">
					<Icon.CloudUp color={color} size={size} />
					<span className="icon-name">CloudUp</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Cloudy color={color} size={size} />
					<span className="icon-name">Cloudy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.CloudyGusts color={color} size={size} />
					<span className="icon-name">CloudyGusts</span>
				</div>
				<div className="icon-wrapper">
					<Icon.CloudyWindy color={color} size={size} />
					<span className="icon-name">CloudyWindy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayCloudy color={color} size={size} />
					<span className="icon-name">DayCloudy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayCloudyGusts color={color} size={size} />
					<span className="icon-name">DayCloudyGusts</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayCloudyHigh color={color} size={size} />
					<span className="icon-name">DayCloudyHigh</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayCloudyWindy color={color} size={size} />
					<span className="icon-name">DayCloudyWindy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayFog color={color} size={size} />
					<span className="icon-name">DayFog</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayHail color={color} size={size} />
					<span className="icon-name">DayHail</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayHaze color={color} size={size} />
					<span className="icon-name">DayHaze</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayLightning color={color} size={size} />
					<span className="icon-name">DayLightning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayLightWind color={color} size={size} />
					<span className="icon-name">DayLightWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayRain color={color} size={size} />
					<span className="icon-name">DayRain</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayRainMix color={color} size={size} />
					<span className="icon-name">DayRainMix</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayRainWind color={color} size={size} />
					<span className="icon-name">DayRainWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayShowers color={color} size={size} />
					<span className="icon-name">DayShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySleet color={color} size={size} />
					<span className="icon-name">DaySleet</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySleetStorm color={color} size={size} />
					<span className="icon-name">DaySleetStorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySnow color={color} size={size} />
					<span className="icon-name">DaySnow</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySnowThunderstorm color={color} size={size} />
					<span className="icon-name">DaySnowThunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySnowWind color={color} size={size} />
					<span className="icon-name">DaySnowWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySprinkle color={color} size={size} />
					<span className="icon-name">DaySprinkle</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayStormShowers color={color} size={size} />
					<span className="icon-name">DayStormShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySunny color={color} size={size} />
					<span className="icon-name">DaySunny</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DaySunnyOvercast color={color} size={size} />
					<span className="icon-name">DaySunnyOvercast</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayThunderstorm color={color} size={size} />
					<span className="icon-name">DayThunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DayWindy color={color} size={size} />
					<span className="icon-name">DayWindy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Degrees color={color} size={size} />
					<span className="icon-name">Degrees</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionDown color={color} size={size} />
					<span className="icon-name">DirectionDown</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionDownLeft color={color} size={size} />
					<span className="icon-name">DirectionDownLeft</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionDownRight color={color} size={size} />
					<span className="icon-name">DirectionDownRight</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionLeft color={color} size={size} />
					<span className="icon-name">DirectionLeft</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionRight color={color} size={size} />
					<span className="icon-name">DirectionRight</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionUp color={color} size={size} />
					<span className="icon-name">DirectionUp</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionUpLeft color={color} size={size} />
					<span className="icon-name">DirectionUpLeft</span>
				</div>
				<div className="icon-wrapper">
					<Icon.DirectionUpRight color={color} size={size} />
					<span className="icon-name">DirectionUpRight</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Dust color={color} size={size} />
					<span className="icon-name">Dust</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Earthquake color={color} size={size} />
					<span className="icon-name">Earthquake</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Fahrenheit color={color} size={size} />
					<span className="icon-name">Fahrenheit</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Fire color={color} size={size} />
					<span className="icon-name">Fire</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Flood color={color} size={size} />
					<span className="icon-name">Flood</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Fog color={color} size={size} />
					<span className="icon-name">Fog</span>
				</div>
				<div className="icon-wrapper">
					<Icon.GaleWarning color={color} size={size} />
					<span className="icon-name">GaleWarning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Hail color={color} size={size} />
					<span className="icon-name">Hail</span>
				</div>
				<div className="icon-wrapper">
					<Icon.HorizonAlt color={color} size={size} />
					<span className="icon-name">Horizon</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Horizon color={color} size={size} />
					<span className="icon-name">HorizonAlt</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Hot color={color} size={size} />
					<span className="icon-name">Hot</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Humidity color={color} size={size} />
					<span className="icon-name">Humidity</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Hurricane color={color} size={size} />
					<span className="icon-name">Hurricane</span>
				</div>
				<div className="icon-wrapper">
					<Icon.HurricaneWarning color={color} size={size} />
					<span className="icon-name">HurricaneWarning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Lightning color={color} size={size} />
					<span className="icon-name">Lightning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.LunarEclipse color={color} size={size} />
					<span className="icon-name">LunarEclipse</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Meteor color={color} size={size} />
					<span className="icon-name">Meteor</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltFirstQuarter color={color} size={size} />
					<span className="icon-name">MoonAltFirstQuarter</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltFull color={color} size={size} />
					<span className="icon-name">MoonAltFull</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltNew color={color} size={size} />
					<span className="icon-name">MoonAltNew</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltThirdQuarter color={color} size={size} />
					<span className="icon-name">MoonAltThirdQuarter</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningCrescent1 color={color} size={size} />
					<span className="icon-name">MoonAltWaningCrescent1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningCrescent2 color={color} size={size} />
					<span className="icon-name">MoonAltWaningCrescent2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningCrescent3 color={color} size={size} />
					<span className="icon-name">MoonAltWaningCrescent3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningCrescent4 color={color} size={size} />
					<span className="icon-name">MoonAltWaningCrescent4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningCrescent5 color={color} size={size} />
					<span className="icon-name">MoonAltWaningCrescent5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningCrescent6 color={color} size={size} />
					<span className="icon-name">MoonAltWaningCrescent6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningGibbous1 color={color} size={size} />
					<span className="icon-name">MoonAltWaningGibbous1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningGibbous2 color={color} size={size} />
					<span className="icon-name">MoonAltWaningGibbous2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningGibbous3 color={color} size={size} />
					<span className="icon-name">MoonAltWaningGibbous3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningGibbous4 color={color} size={size} />
					<span className="icon-name">MoonAltWaningGibbous4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningGibbous5 color={color} size={size} />
					<span className="icon-name">MoonAltWaningGibbous5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaningGibbous6 color={color} size={size} />
					<span className="icon-name">MoonAltWaningGibbous6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingCrescent1 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingCrescent1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingCrescent2 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingCrescent2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingCrescent3 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingCrescent3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingCrescent4 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingCrescent4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingCrescent5 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingCrescent5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingCrescent6 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingCrescent6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingGibbous1 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingGibbous1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingGibbous2 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingGibbous2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingGibbous3 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingGibbous3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingGibbous4 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingGibbous4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingGibbous5 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingGibbous5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonAltWaxingGibbous6 color={color} size={size} />
					<span className="icon-name">MoonAltWaxingGibbous6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonFirstQuarter color={color} size={size} />
					<span className="icon-name">MoonFirstQuarter</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonFull color={color} size={size} />
					<span className="icon-name">MoonFull</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonNew color={color} size={size} />
					<span className="icon-name">MoonNew</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Moonrise color={color} size={size} />
					<span className="icon-name">Moonrise</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Moonset color={color} size={size} />
					<span className="icon-name">Moonset</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonThirdQuarter color={color} size={size} />
					<span className="icon-name">MoonThirdQuarter</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningCrescent1 color={color} size={size} />
					<span className="icon-name">MoonWaningCrescent1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningCrescent2 color={color} size={size} />
					<span className="icon-name">MoonWaningCrescent2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningCrescent3 color={color} size={size} />
					<span className="icon-name">MoonWaningCrescent3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningCrescent4 color={color} size={size} />
					<span className="icon-name">MoonWaningCrescent4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningCrescent5 color={color} size={size} />
					<span className="icon-name">MoonWaningCrescent5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningCrescent6 color={color} size={size} />
					<span className="icon-name">MoonWaningCrescent6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningGibbous1 color={color} size={size} />
					<span className="icon-name">MoonWaningGibbous1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningGibbous2 color={color} size={size} />
					<span className="icon-name">MoonWaningGibbous2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningGibbous3 color={color} size={size} />
					<span className="icon-name">MoonWaningGibbous3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningGibbous4 color={color} size={size} />
					<span className="icon-name">MoonWaningGibbous4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningGibbous5 color={color} size={size} />
					<span className="icon-name">MoonWaningGibbous5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaningGibbous6 color={color} size={size} />
					<span className="icon-name">MoonWaningGibbous6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingCrescent1 color={color} size={size} />
					<span className="icon-name">MoonWaxingCrescent1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingCrescent2 color={color} size={size} />
					<span className="icon-name">MoonWaxingCrescent2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingCrescent3 color={color} size={size} />
					<span className="icon-name">MoonWaxingCrescent3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingCrescent4 color={color} size={size} />
					<span className="icon-name">MoonWaxingCrescent4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingCrescent5 color={color} size={size} />
					<span className="icon-name">MoonWaxingCrescent5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingCrescent6 color={color} size={size} />
					<span className="icon-name">MoonWaxingCrescent6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingGibbous1 color={color} size={size} />
					<span className="icon-name">MoonWaxingGibbous1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingGibbous2 color={color} size={size} />
					<span className="icon-name">MoonWaxingGibbous2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingGibbous3 color={color} size={size} />
					<span className="icon-name">MoonWaxingGibbous3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingGibbous4 color={color} size={size} />
					<span className="icon-name">MoonWaxingGibbous4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingGibbous5 color={color} size={size} />
					<span className="icon-name">MoonWaxingGibbous5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.MoonWaxingGibbous6 color={color} size={size} />
					<span className="icon-name">MoonWaxingGibbous6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Na color={color} size={size} />
					<span className="icon-name">Na</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltCloudy color={color} size={size} />
					<span className="icon-name">NightAltCloudy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltCloudyGusts color={color} size={size} />
					<span className="icon-name">NightAltCloudyGusts</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltCloudyHigh color={color} size={size} />
					<span className="icon-name">NightAltCloudyHigh</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltCloudyWindy color={color} size={size} />
					<span className="icon-name">NightAltCloudyWindy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltHail color={color} size={size} />
					<span className="icon-name">NightAltHail</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltLightning color={color} size={size} />
					<span className="icon-name">NightAltLightning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltPartlyCloudy color={color} size={size} />
					<span className="icon-name">NightAltPartlyCloudy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltRain color={color} size={size} />
					<span className="icon-name">NightAltRain</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltRainMix color={color} size={size} />
					<span className="icon-name">NightAltRainMix</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltRainWind color={color} size={size} />
					<span className="icon-name">NightAltRainWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltShowers color={color} size={size} />
					<span className="icon-name">NightAltShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltSleet color={color} size={size} />
					<span className="icon-name">NightAltSleet</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltSleetStorm color={color} size={size} />
					<span className="icon-name">NightAltSleetStorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltSnow color={color} size={size} />
					<span className="icon-name">NightAltSnow</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltSnowThunderstorm color={color} size={size} />
					<span className="icon-name">NightAltSnowThunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltSnowWind color={color} size={size} />
					<span className="icon-name">NightAltSnowWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltSprinkle color={color} size={size} />
					<span className="icon-name">NightAltSprinkle</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltStormShowers color={color} size={size} />
					<span className="icon-name">NightAltStormShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightAltThunderstorm color={color} size={size} />
					<span className="icon-name">NightAltThunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightClear color={color} size={size} />
					<span className="icon-name">NightClear</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightCloudy color={color} size={size} />
					<span className="icon-name">NightCloudy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightCloudyGusts color={color} size={size} />
					<span className="icon-name">NightCloudyGusts</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightCloudyHigh color={color} size={size} />
					<span className="icon-name">NightCloudyHigh</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightCloudyWindy color={color} size={size} />
					<span className="icon-name">NightCloudyWindy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightFog color={color} size={size} />
					<span className="icon-name">NightFog</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightHail color={color} size={size} />
					<span className="icon-name">NightHail</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightLightning color={color} size={size} />
					<span className="icon-name">NightLightning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightPartlyCloudy color={color} size={size} />
					<span className="icon-name">NightPartlyCloudy</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightRain color={color} size={size} />
					<span className="icon-name">NightRain</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightRainMix color={color} size={size} />
					<span className="icon-name">NightRainMix</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightRainWind color={color} size={size} />
					<span className="icon-name">NightRainWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightShowers color={color} size={size} />
					<span className="icon-name">NightShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightSleet color={color} size={size} />
					<span className="icon-name">NightSleet</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightSleetStorm color={color} size={size} />
					<span className="icon-name">NightSleetStorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightSnow color={color} size={size} />
					<span className="icon-name">NightSnow</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightSnowThunderstorm color={color} size={size} />
					<span className="icon-name">NightSnowThunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightSnowWind color={color} size={size} />
					<span className="icon-name">NightSnowWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightSprinkle color={color} size={size} />
					<span className="icon-name">NightSprinkle</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightStormShowers color={color} size={size} />
					<span className="icon-name">NightStormShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.NightThunderstorm color={color} size={size} />
					<span className="icon-name">NightThunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Rain color={color} size={size} />
					<span className="icon-name">Rain</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Raindrop color={color} size={size} />
					<span className="icon-name">Raindrop</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Raindrops color={color} size={size} />
					<span className="icon-name">Raindrops</span>
				</div>
				<div className="icon-wrapper">
					<Icon.RainMix color={color} size={size} />
					<span className="icon-name">RainMix</span>
				</div>
				<div className="icon-wrapper">
					<Icon.RainWind color={color} size={size} />
					<span className="icon-name">RainWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.RefreshAlt color={color} size={size} />
					<span className="icon-name">Refresh</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Refresh color={color} size={size} />
					<span className="icon-name">RefreshAlt</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Sandstorm color={color} size={size} />
					<span className="icon-name">Sandstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Showers color={color} size={size} />
					<span className="icon-name">Showers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Sleet color={color} size={size} />
					<span className="icon-name">Sleet</span>
				</div>
				<div className="icon-wrapper">
					<Icon.SmallCraftAdvisory color={color} size={size} />
					<span className="icon-name">SmallCraftAdvisory</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Smog color={color} size={size} />
					<span className="icon-name">Smog</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Smoke color={color} size={size} />
					<span className="icon-name">Smoke</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Snow color={color} size={size} />
					<span className="icon-name">Snow</span>
				</div>
				<div className="icon-wrapper">
					<Icon.SnowflakeCold color={color} size={size} />
					<span className="icon-name">SnowflakeCold</span>
				</div>
				<div className="icon-wrapper">
					<Icon.SnowWind color={color} size={size} />
					<span className="icon-name">SnowWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.SolarEclipse color={color} size={size} />
					<span className="icon-name">SolarEclipse</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Sprinkle color={color} size={size} />
					<span className="icon-name">Sprinkle</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Stars color={color} size={size} />
					<span className="icon-name">Stars</span>
				</div>
				<div className="icon-wrapper">
					<Icon.StormShowers color={color} size={size} />
					<span className="icon-name">StormShowers</span>
				</div>
				<div className="icon-wrapper">
					<Icon.StormWarning color={color} size={size} />
					<span className="icon-name">StormWarning</span>
				</div>
				<div className="icon-wrapper">
					<Icon.StrongWind color={color} size={size} />
					<span className="icon-name">StrongWind</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Sunrise color={color} size={size} />
					<span className="icon-name">Sunrise</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Sunset color={color} size={size} />
					<span className="icon-name">Sunset</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Thermometer color={color} size={size} />
					<span className="icon-name">Thermometer</span>
				</div>
				<div className="icon-wrapper">
					<Icon.ThermometerExterior color={color} size={size} />
					<span className="icon-name">ThermometerExterior</span>
				</div>
				<div className="icon-wrapper">
					<Icon.ThermometerInternal color={color} size={size} />
					<span className="icon-name">ThermometerInternal</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Thunderstorm color={color} size={size} />
					<span className="icon-name">Thunderstorm</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time1 color={color} size={size} />
					<span className="icon-name">Time1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time2 color={color} size={size} />
					<span className="icon-name">Time2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time3 color={color} size={size} />
					<span className="icon-name">Time3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time4 color={color} size={size} />
					<span className="icon-name">Time4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time5 color={color} size={size} />
					<span className="icon-name">Time5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time6 color={color} size={size} />
					<span className="icon-name">Time6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time7 color={color} size={size} />
					<span className="icon-name">Time7</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time8 color={color} size={size} />
					<span className="icon-name">Time8</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time9 color={color} size={size} />
					<span className="icon-name">Time9</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time10 color={color} size={size} />
					<span className="icon-name">Time10</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time11 color={color} size={size} />
					<span className="icon-name">Time11</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Time12 color={color} size={size} />
					<span className="icon-name">Time12</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Tornado color={color} size={size} />
					<span className="icon-name">Tornado</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Train color={color} size={size} />
					<span className="icon-name">Train</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Tsunami color={color} size={size} />
					<span className="icon-name">Tsunami</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Umbrella color={color} size={size} />
					<span className="icon-name">Umbrella</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Volcano color={color} size={size} />
					<span className="icon-name">Volcano</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort0 color={color} size={size} />
					<span className="icon-name">WindBeaufort0</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort1 color={color} size={size} />
					<span className="icon-name">WindBeaufort1</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort2 color={color} size={size} />
					<span className="icon-name">WindBeaufort2</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort3 color={color} size={size} />
					<span className="icon-name">WindBeaufort3</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort4 color={color} size={size} />
					<span className="icon-name">WindBeaufort4</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort5 color={color} size={size} />
					<span className="icon-name">WindBeaufort5</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort6 color={color} size={size} />
					<span className="icon-name">WindBeaufort6</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort7 color={color} size={size} />
					<span className="icon-name">WindBeaufort7</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort8 color={color} size={size} />
					<span className="icon-name">WindBeaufort8</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort9 color={color} size={size} />
					<span className="icon-name">WindBeaufort9</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort10 color={color} size={size} />
					<span className="icon-name">WindBeaufort10</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort11 color={color} size={size} />
					<span className="icon-name">WindBeaufort11</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindBeaufort12 color={color} size={size} />
					<span className="icon-name">WindBeaufort12</span>
				</div>
				<div className="icon-wrapper">
					<Icon.WindDeg color={color} size={size} />
					<span className="icon-name">WindDeg</span>
				</div>
				<div className="icon-wrapper">
					<Icon.Windy color={color} size={size} />
					<span className="icon-name">Windy</span>
				</div>
			</div>
		);
	}
}
