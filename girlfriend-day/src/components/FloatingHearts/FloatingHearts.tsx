import "./FloatingHearts.css";

export default function FloatingHearts() {

    return (

        <>

            {Array.from({ length: 40 }).map((_, index) => (

                <span
                    key={index}
                    className="heart"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${8 + Math.random() * 8}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        fontSize: `${12 + Math.random() * 18}px`
                    }}
                >

                    ❤️

                </span>

            ))}

        </>

    );

}