import { useSelector } from "react-redux";
function Definiton (){
    const {information} = useSelector(store => store.getWord);

    if(information !== null) {
        var meanings = information[0].meanings;

        var dynamicInfo = meanings.map(el => {
            const partOfSpeech = el.partOfSpeech;
            const definitions = el.definitions.map(def => {
                return def.definition
            })

            return(
                <div className="container">
                    <h2>{partOfSpeech}</h2>
                    <article>
                        <p>{definitions}</p>
                    </article>
                </div>
                
            )
        })
    }

    return (
        <div className="definitions">
            {dynamicInfo}
        </div>
        
    )
}

export default Definiton;