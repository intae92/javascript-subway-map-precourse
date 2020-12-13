import LineManagerRender from "./LineManagerRender.js";
import { DOM_LINE } from "../../utils/constants.js";

export default class LineManagerEvent extends LineManagerRender {
  constructor(stateId) {
    super(stateId);
    console.log("--LineManagerEvent--");
    this.eventDOM();
  }

  eventDOM() {
    document
      .getElementById(DOM_LINE.LINE_NAME_FORM_ID)
      .addEventListener("submit", (e) => this._onSubmitLine(e));
  }

  _onSubmitLine(e) {
    e.preventDefault();

    const target = e.target;
    const lineName = target[0].value;
    const startStation = this.stations[target[1].options.selectedIndex];
    const endStation = this.stations[target[2].options.selectedIndex];

    const lineInfo = {
      lineName,
      line: [startStation, endStation],
    };

    console.log(lineInfo);

    this.lines.push(lineInfo);
    this.saveLocalStorageValue(this.localStorageKey, this.lines);
  }
}
