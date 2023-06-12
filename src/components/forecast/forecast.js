import './forecast.css'
const Forecast = ({ data }) => {
    const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const todayIs = new Date().getDate();
    const nextDays = weekDays.slice(todayIs, 7).concat(weekDays.slice(0, todayIs));
    return (
        <>
            {data.list.slice(0, 7).map((value, index) => {
                return (

                    <div className="daily-item">
                        <span >
                            <div className="day">{nextDays[index]}</div>
                            <img alt='weather' className="icon-small" src={`weather-icons/icons-png/${value.weather[0].icon}.png`} />
                            <div className="degrees">{Math.round(value.main.temp)}°C</div>

                        </span>
                    </div>

                )

            })}


        </>
    )
}

export default Forecast;