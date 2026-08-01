import "./FloatingPetals.css";

export default function FloatingPetals() {

    return (

        <>

            {Array.from({ length: 25 }).map((_, index) => (

                <span
                    key={index}
                    className="petal"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${8 + Math.random() * 6}s`
                    }}
                >

                    🌸

                </span>

            ))}

        </>

    );

}