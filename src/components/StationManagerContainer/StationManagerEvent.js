import StationManagerRender from "./StationManagerRender.js";

export default class StationManagerEvent extends StationManagerRender {
  constructor() {
    super();
    console.log("--StationManagerEvent--");
    this.eventDOM();
  }

  eventDOM() {
    this.stationNameForm.addEventListener("submit", (e) =>
      this._onSubmitStationName(e)
    );
  }

  _onSubmitStationName(e) {
    e.preventDefault();
    const target = e.target;
    const stationNameInput = target[0];
    const stationName = stationNameInput.value;

    stationNameInput.value = "";
    if (!this.isValidStationName(stationName)) return;

    console.log(stationName);
  }

  isValidStationName() {}
}
