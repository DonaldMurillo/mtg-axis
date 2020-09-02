import React from 'react';
import { Card } from '../Models/card.model';
import { ScryfallCard } from '../Models/scryfallCard.model';
import cardNames from '../Data/cardNames.json';

const MtgCard = () => {

    const cards: string[] = cardNames.data;

    const daCard = () => fetch("https://api.scryfall.com/cards/named?exact=" + inputVal)
                    .then(res => res.json()).then(
                        (result: ScryfallCard) => setCard({name: result?.name, imgUrl: result?.image_uris?.normal, type: result?.type_line}))
                    .catch(() => setError(true));

    const inputChange = (event: any) => {
        setInputVal(event.target.value);
        setFilteredList(cards.filter(name => name.toLowerCase().includes(event.target.value.toLowerCase())))
        console.log(inputVal);
        console.log(filteredList);
    }

    // const onButtonClick = () => daCard();
    const [card, setCard] = React.useState<Card>({});
    const [inputVal, setInputVal] = React.useState<string>("");
    const [filteredList, setFilteredList] = React.useState<string[]>(cards)
    const [error, setError] = React.useState<boolean>(false);
    // React.useEffect(() => {
    //     daCard();
    // }, []);

    return (
        <div>
            <input list="cardlist" name="cards" id="cards" value={inputVal} onChange={(event) => inputChange(event)}/>
            <button onClick={() => daCard()}>Press me</button>
            <datalist id="cardlist">
                {filteredList.map((name, key) => inputVal.length > 2 && key < 50? <option key={key} value={name} /> : null)}
            </datalist>
            {!error ? 
                <div> 
                    <h1>{card.name}</h1>
                    <h3>{card.type}</h3>
                    <img src={card.imgUrl} alt=""/>
                </div>
            : <div>error</div>}

        </div>
    );
}

export default MtgCard;