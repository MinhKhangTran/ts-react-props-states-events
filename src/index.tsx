import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import TodoListe from "./TodoListe";
import UserSearch from "./UserSearch";

const rootElement = document.getElementById("root");
render(<UserSearch />, rootElement);
