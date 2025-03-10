export class ClockController {

  constructor() {
    this.drawClock()
    setInterval(this.drawClock, 1000)

  }


  drawClock() {
    const currentTime = new Date()

    document.getElementById('clock').innerText = `${currentTime.toLocaleTimeString()}`

  }


}