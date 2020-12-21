import './List.css';
import Card from './Card';


function List(props) {
    console.log()
//I understand the .map in principle, but don't understand props.cards as a wording
//see store.  Also don't understand how the Card props interact with these props on 
//each instance. Is the "card" in .map the cardIds array from the Item?
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card) =>
                <Card
                    key={card.id}
                    title={card.title}
                    content={card.conten}
                />
            )}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    )
};

export default List;