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
                <div id="definition-section"className="section">
                    <h2>{partOfSpeech}</h2>
                    <article>
                        <h3>{definitions}</h3>
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