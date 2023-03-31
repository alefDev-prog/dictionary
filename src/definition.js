import { useSelector } from "react-redux";


function Definiton (){
    const {information} = useSelector(store => store.getWord);

    if(information !== null) {
        var meanings = information[0].meanings;

        var dynamicInfo = meanings.map((el, index) => {
            const partOfSpeech = el.partOfSpeech;
            const definitions = el.definitions.map((def, index) => {
                return <p className="definition" key={def}>{def.definition}</p>
            })

            return(
                <div id="definition-section"className="section">
                    <h2 id="definition-title" key={el}>{partOfSpeech}</h2>
                    <article>
                        <h3 key={index}>{definitions}</h3>
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