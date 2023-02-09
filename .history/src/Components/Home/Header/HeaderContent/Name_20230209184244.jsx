import Classes from "./Name.module.css"

const Name = () => {
    return (
        <div className="body">

            <ul className={Classes.name}>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>K</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>H</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>A</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>L</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>I</div>
                </li>
                <li className="me-5">
                    <input type="checkbox" />
                    <div>D</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>H</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>O</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>S</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>S</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>A</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>I</div>
                </li>
                <li className={Classes.lists}>
                    <input type="checkbox" />
                    <div>N</div>
                </li>
            </ul>
        </div>
    );
}

export default Name;
