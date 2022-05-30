import { useState } from "react";

export function Buttons() {
    let [check, setCheck] = useState(false);
    function checked() {
        setCheck((prev) => !prev);
    }
    return (
        <>
            <i
                className={
                    check
                        ? "icon fas fa-check gentleman__icon--fix"
                        : "icon fas fa-check gentleman__icon"
                }
                onClick={checked}
            ></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </>
    );
}
