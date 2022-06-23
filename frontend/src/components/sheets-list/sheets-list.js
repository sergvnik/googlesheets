import SheetsListItem from "../sheets-list-item/sheets-list-item"
import './sheets-list.css';

const SheetsList = ({datas, onToggleProp, dol}) => {

    const elements = datas.map(item => {
        const {id, ...itemProps} = item;
        return (
            <SheetsListItem 
                key={item.nomer}
                dol={dol}
                {...itemProps} 
                onToggleProp={
                    (e) => onToggleProp(e)
                }
            />
        )
    })
    let classNames = "list-group-item d-flex justify-content-between";
    return (
        <>
        <ul className="app-list app-group">
            <li className={classNames}>
                <span className="list-group-item-label" >№</span>
                <span className="list-group-item-label">№ заказа</span>
                <span className="list-group-item-label">Цена $</span>
                <span className="list-group-item-label">Цена руб.</span>
                <span className="list-group-item-label">Дата</span>
            </li>
            {elements}
        </ul>
        </>
    )
}

export default SheetsList;

