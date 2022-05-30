import { chapters } from "../../model/dates";
import { Buttons } from "../buttons/buttons";

export function Card() {
    return chapters.map((item) => {
        return (
            <>
                <li className="gentleman">
                    <div className="gentleman__avatar-container">
                        <img
                            className="gentleman__avatar"
                            src={"/img/" + item.picture}
                            alt={item.alternativeText}
                        />
                        <span className="gentleman__initial">F</span>
                    </div>
                    <div className="gentleman__data-container">
                        <h2 className="gentleman__name">{item.name}</h2>
                        <ul className="gentleman__data-list">
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Profession:
                                </span>
                                {item.profession}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Status:
                                </span>
                                {item.status}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Twitter:
                                </span>
                                {item.twitter}
                            </li>
                        </ul>
                    </div>
                    <Buttons></Buttons>
                </li>
            </>
        );
    });
}
