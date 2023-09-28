import PropTypes from "prop-types";
import "./WordBody.css";

//I know this is a mess

const WordBody = ({ wordData, wordError }) => {
  const meanings = wordData[0].meanings;
  if ((wordData || wordError) && wordData.length > 0) {
    return (
      <div className="wb-container">
        {meanings.map((meaning, index) => (
          <div key={index} className="wb-container-body">
            <div className="wb-wordClass-container">
              <h3 className="wb-wordclass">{meaning.partOfSpeech}</h3>
              <div className="wb-line"></div>
            </div>
            <div className="wb-meaning-container">
              <h3 className="wb-title">Meaning</h3>
              <ul className="wb-definitions-container">
                {meaning.definitions.map((definition, index) => {
                  if (index <= 2)
                    return (
                      <div key={index} className="wb-definition-container">
                        <li className="wb-definition">
                          {definition.definition}
                        </li>

                        {definition.example && (
                          <li className="wb-definition-example">
                            &quot;{definition.example}&quot;
                          </li>
                        )}
                      </div>
                    );
                })}
              </ul>
              {meaning.synonyms.length > 0 && (
                <div className="wb-synonyms-container">
                  <h3 className="wb-title">Synonyms</h3>
                  {meaning.synonyms.map((synonym, index) => {
                    return (
                      <a key={index} className="wb-synonym">
                        {synonym}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

WordBody.propTypes = {
  wordData: PropTypes.array.isRequired,
  wordError: PropTypes.bool.isRequired,
};

export default WordBody;
