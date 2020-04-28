import { Drawable } from '@/services/providers/draw-toolkit'

export class Waveform implements Drawable {
    data:number[]

    constructor (data:number[]) {
      this.data = data
    }

    draw (ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement) {
      ctx.translate(0, canvas.offsetHeight / 2) // Set Y = 0 to be in the middle of the canvas

      const width = canvas.offsetWidth / this.data.length
      const height = canvas.offsetHeight
      const padding = 10
      for (let i = 0; i < this.data.length; i++) {
        let x = i * width
        let y = this.data[i] * (height / 2) - padding

        this.strokeLine(ctx, x, y)
      }
    }

    strokeLine (ctx : CanvasRenderingContext2D, x : number, y : number) {
      ctx.lineWidth = 0.5
      ctx.strokeStyle = '#1976D2'
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, -y)
      ctx.lineTo(x, y)
      ctx.stroke()
    }
}