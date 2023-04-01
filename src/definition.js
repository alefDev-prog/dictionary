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
                <div className="section definition-section">
                    <h2 className="definition-title" key={el}>{partOfSpeech}</h2>
                    <article>
                        <h3 key={index}>{definitions}</h3>
                    </article>
                </div>
                
            )
        })
    }

    return (
        <div className="section-wrapper">
            {dynamicInfo}
        </div>
        
    )
}

export default Definiton;