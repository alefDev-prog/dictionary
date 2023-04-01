import { useSelector } from "react-redux";

function StaticInfo() {

    const {information} = useSelector((store) => store.getWord);
    const determinePhonetics = (first, second) => {
        if(first != null) {
            return first;
        }
        if(second != null) {
            return second;
        }
    }
    if(information !== null) {
        var word = information[0].word;

        //fonetics
        var phonetic1 = information[0].phonetic;
        if(information[0].phonetics[1] != undefined) var phonetic2 = information[0].phonetics[1].text;
        var phonetic = determinePhonetics(phonetic1, phonetic2);

        //partOfSpeech
        var partArr = information[0].meanings.map((element, index) => {
            return <span key={element.elementId}>{element.partOfSpeech}</span>;
        });
        
        
    }
    
    if(information !== null) return(
        <div className="section-wrapper">
            <div id="static-section" className="section">
                {
                information === null ?
                <div></div>:
                <article>
                    <h2 id="word">{word}</h2>
                    <h3 id="phonetics">Pronounciation: {phonetic}</h3>
                    <h3>Part of speech: {partArr}</h3>
                </article>
                
                }
            </div>
        </div>
       
            
       
    )
    else return; 
}

export default StaticInfo;