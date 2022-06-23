import './sheets-list-item.css';

const SheetsListItem = (props) =>{
    const {nomer, zakaz, price_d, price_r, data, dol} = props;
    
    let classNames = "list-group-item d-flex justify-content-between";
    let rub = Math.round(parseFloat(dol * price_d) * 100) / 100;
    return (
        <li className={classNames}>
            <span className="list-group-item-label">{nomer}</span>
            <span className="list-group-item-label">{zakaz}</span>
            <span className="list-group-item-label">{price_d}</span>
            <span className="list-group-item-label">{rub}</span>
            <span className="list-group-item-label">{data}</span>
        </li>
    )
        
}

export default SheetsListItem;