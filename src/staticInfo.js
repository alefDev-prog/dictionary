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
        var partArr = information[0].meanings.map(element => {
            return <span>{element.partOfSpeech}</span>;
        });
        
        
    }
    return(
        <div className="StaticInfo">
            <section id="name-section" className="static-section">
                {
                information === null ?
                <div></div>:
                <article>
                    <p>{word}</p>
                    <p>Pronounciation: {phonetic}</p>
                    {partArr}</article>
                
                }
            </section>
        </div>
    )
}

export default StaticInfo;