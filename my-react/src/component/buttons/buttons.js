import { useState } from "react";

export function Buttons() {
    let [check, setCheck] = useState("gentleman__icon");
    function checked() {
        setCheck((check = "gentleman__icon--fix"));
    }
    return (
        <>
            <i
                className={"icon " + check + " fas fa-check"}
                onClick={checked}
            ></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </>
    );
}
