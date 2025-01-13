import "./styles.scss";
import description from "src/data/description";
import DOMPurify from "dompurify";
import Typewriter from "typewriter-effect";
import { useState, useRef } from "react";

const Description = () => {
    const typewriterRef = useRef(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const cleanContent = DOMPurify.sanitize(description.content, {
        ALLOWED_TAGS: ["br", "strong"],
    });

    const showFullText = () => {
      setIsCompleted(true);  // Marque l'état comme "complété"
      typewriterRef.current?.stop();  // Stoppe le défilement de texte
    };

    return (
        <div className="description p-5 my-5 md:mx-8">
          <div className="flex align-items-center align-content-center">
            <p className="description__title font-bold text-2xl text-center mb-5 flex-1">{description.title}</p>
            <button onClick={showFullText} className="px-4 py-2 bg-blue-700 text-white rounded ml-auto"> Arreter le défilement </button>
          </div>
            {isCompleted ? <p className="font-semibold" dangerouslySetInnerHTML={{ __html: cleanContent }} /> : (
              <Typewriter
                onInit={(typewriter) => {
                    typewriterRef.current = typewriter;
                    typewriter
                        .typeString(cleanContent)
                        .start();
                }}
                options={{
                    autoStart: true,
                    delay: 10,
                    wrapperClassName: "font-semibold",
                }}
              />
            )}
            
            <div>
              
            </div>
        </div>
    );
};

export default Description;
