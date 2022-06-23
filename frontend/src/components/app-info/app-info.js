import "./app-info.css";

const AppInfo = ({day, month, year, dol}) => {
    let dolar = Math.round(parseFloat(dol) * 100) / 100;
    return (
        <div className="app-info">
            <h1>Заказы на {day}:{month}:{year}</h1>
            <h2>Курс долара: {dolar}</h2>
        </div>
    )
}

export default AppInfo;