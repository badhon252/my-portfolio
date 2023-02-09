import Classes from "./Name.module.css"

const Name = () => {
    return (
        <div className={Classes.body}>

            <ul className={Classes.name}>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>K</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>H</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>A</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>L</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>I</div>
                </li>
                <li className="me-5">
                    <input type="checkbox" />
                    <div className={Classes.char}>D</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>H</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>O</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>S</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>S</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>A</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>I</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div className={Classes.char}>N</div>
                </li>
            </ul>
        </div>
    );
}

export default Name;
