import { injectable } from 'inversify-props'
// @ts-ignore
import Worker from 'worker-loader!../../workers/essentia'
import { EssentiaMessage } from '@/workers/essentia-message'

export interface FFT{
  of(data:Float32Array):Promise<number[]>;
}

@injectable()
export class FFTEssentia implements FFT {
  of (data:Float32Array):Promise<number[]> {
    return new Promise((resolve, reject) => {
      const worker = new Worker()
      let msg:EssentiaMessage = new EssentiaMessage(EssentiaMessage.SPECTRUM, Array.from(data))
      worker.postMessage(msg)
      worker.onmessage = (event:MessageEvent) => {
        if (msg.isForMe(event.data)) {
          resolve(Array.from(event.data.payload))
        }
      }
    })
  }
}
