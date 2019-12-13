/** Declaration file generated by dts-gen */

export class AnalyserNode {
    constructor(admission: any, context: any);

    getByteFrequencyData(...args: any[]): any;

    getByteTimeDomainData(...args: any[]): any;

    getFloatFrequencyData(...args: any[]): any;

    getFloatTimeDomainData(...args: any[]): any;

    static $JSONKeys: string[];

}

export class AudioBuffer {
    constructor(admission: any, context: any, numberOfChannels: any, length: any, sampleRate: any);

    copyFromChannel(...args: any[]): any;

    copyToChannel(...args: any[]): any;

    getChannelData(...args: any[]): any;

    toJSON(): any;

}

export class AudioBufferSourceNode {
    constructor(admission: any, context: any);

    $stateAtTime(when: any): any;

    start(...args: any[]): any;

    stop(...args: any[]): any;

    static $JSONKeys: string[];

}

export class AudioContext {
    constructor();

    $process(when: any): void;

    $processTo(when: any): void;

    $reset(): void;

    close(...args: any[]): any;

    createAnalyser(...args: any[]): any;

    createAudioWorker(...args: any[]): any;

    createBiquadFilter(...args: any[]): any;

    createBuffer(...args: any[]): any;

    createBufferSource(...args: any[]): any;

    createChannelMerger(...args: any[]): any;

    createChannelSplitter(...args: any[]): any;

    createConvolver(...args: any[]): any;

    createDelay(...args: any[]): any;

    createDynamicsCompressor(...args: any[]): any;

    createGain(...args: any[]): any;

    createMediaElementSource(...args: any[]): any;

    createMediaStreamDestination(...args: any[]): any;

    createMediaStreamSource(...args: any[]): any;

    createOscillator(...args: any[]): any;

    createPanner(...args: any[]): any;

    createPeriodicWave(...args: any[]): any;

    createScriptProcessor(...args: any[]): any;

    createStereoPanner(...args: any[]): any;

    createWaveShaper(...args: any[]): any;

    decodeAudioData(...args: any[]): any;

    resume(...args: any[]): any;

    suspend(...args: any[]): any;

    toJSON(): any;

    static WEB_AUDIO_TEST_API_VERSION: string;

}

export class AudioDestinationNode {
    constructor(admission: any, context: any);

    static $JSONKeys: any[];

}

export class AudioListener {
    constructor(admission: any, context: any);

    setOrientation(...args: any[]): any;

    setPosition(...args: any[]): any;

    setVelocity(...args: any[]): any;

}

export class AudioNode {
    constructor(admission: any, spec: any);

    $isConnectedFrom(destination: any, ...args: any[]): any;

    $isConnectedTo(destination: any, ...args: any[]): any;

    $process(inNumSamples: any, tick: any): void;

    connect(...args: any[]): any;

    disconnect(destination: any, output: any, input: any, ...args: any[]): any;

    toJSON(memo: any): any;

    static $JSONKeys: any[];

}

export class AudioParam {
    constructor(admission: any, node: any, name: any, defaultValue: any);

    $isConnectedFrom(destination: any, ...args: any[]): any;

    $process(inNumSamples: any, tick: any): void;

    $valueAtTime(when: any): any;

    cancelScheduledValues(...args: any[]): any;

    exponentialRampToValueAtTime(...args: any[]): any;

    linearRampToValueAtTime(...args: any[]): any;

    setTargetAtTime(...args: any[]): any;

    setValueAtTime(...args: any[]): any;

    setValueCurveAtTime(...args: any[]): any;

    toJSON(memo: any): any;

    static $exponentialRampToValueAtTime(v: any, v0: any, v1: any, t: any, t0: any, t1: any): any;

    static $linearRampToValueAtTime(v: any, v0: any, v1: any, t: any, t0: any, t1: any): any;

    static $setTargetAtTime(v0: any, v1: any, t: any, t0: any, tau: any): any;

    static $setValueCurveAtTime(v: any, t: any, t0: any, t1: any, curve: any): any;

}

export class AudioProcessingEvent {
    constructor(admission: any, node: any);

}

export class BiquadFilterNode {
    constructor(admission: any, context: any);

    getFrequencyResponse(...args: any[]): any;

    static $JSONKeys: string[];

}

export class ChannelMergerNode {
    constructor(admission: any, context: any, numberOfInputs: any);

    static $JSONKeys: any[];

}

export class ChannelSplitterNode {
    constructor(admission: any, context: any, numberOfOutputs: any);

    static $JSONKeys: any[];

}

export class ConvolverNode {
    constructor(admission: any, context: any);

    static $JSONKeys: string[];

}

export class DelayNode {
    constructor(admission: any, context: any, maxDelayTime: any);

    static $JSONKeys: string[];

}

export class DynamicsCompressorNode {
    constructor(admission: any, context: any);

    static $JSONKeys: string[];

}

export class Event {
    constructor(name: any, target: any);

}

export class EventTarget {
    constructor();

    $addListener(event: any, listener: any): any;

    $emit(...args: any[]): any;

    $getMaxListeners(): any;

    $listenerCount(type: any): any;

    $listeners(event: any): any;

    $on(event: any, listener: any): any;

    $once(event: any, listener: any): any;

    $removeAllListeners(event: any): any;

    $removeListener(event: any, listener: any): any;

    $setMaxListeners(event: any, listener: any): any;

    addEventListener(...args: any[]): any;

    dispatchEvent(...args: any[]): any;

    removeEventListener(...args: any[]): any;

}

export class GainNode {
    constructor(admission: any, context: any);

    static $JSONKeys: string[];

}

export class MediaElementAudioSourceNode {
    constructor(admission: any, context: any, mediaElement: any);

    static $JSONKeys: any[];

}

export class MediaStreamAudioSourceNode {
    constructor(admission: any, context: any, mediaStream: any);

    static $JSONKeys: any[];

}

export class OfflineAudioCompletionEvent {
    constructor(admission: any, node: any);

}

export class OfflineAudioContext {
    constructor(numberOfChannels: any, length: any, sampleRate: any);

    close(): any;

    resume(): any;

    startRendering(...args: any[]): any;

    suspend(): any;

    static WEB_AUDIO_TEST_API_VERSION: string;

}

export class OscillatorNode {
    constructor(admission: any, context: any);

    $stateAtTime(when: any): any;

    setPeriodicWave(...args: any[]): any;

    start(...args: any[]): any;

    stop(...args: any[]): any;

    static $JSONKeys: string[];

}

export class PannerNode {
    constructor(admission: any, context: any);

    setOrientation(...args: any[]): any;

    setPosition(...args: any[]): any;

    setVelocity(...args: any[]): any;

    static $JSONKeys: string[];

}

export class PeriodicWave {
    constructor(admission: any, context: any, real: any, imag: any);

}

export class ScriptProcessorNode {
    constructor(admission: any, context: any, bufferSize: any, numberOfInputChannels: any, numberOfOutputChannels: any);

    static $JSONKeys: any[];

}

export class StereoPannerNode {
    constructor(admission: any, context: any);

    static $JSONKeys: string[];

}

export class WaveShaperNode {
    constructor(admission: any, context: any);

    static $JSONKeys: string[];

}

export const VERSION: string;

export const sampleRate: number;

export function Element(...args: any[]): any;

export function HTMLElement(...args: any[]): any;

export function HTMLMediaElement(...args: any[]): any;

export function MediaStream(...args: any[]): any;

export function MediaStreamAudioDestinationNode(admission: any, context: any): any;

export function getState(name: any): any;

export function setState(name: any, value: any): void;

export function unuse(): void;

export function use(): void;

export namespace MediaStreamAudioDestinationNode {
    const $JSONKeys: any[];

}

export namespace utils {
    class Configuration {
        constructor();

        getState(name: any): any;

        setState(name: any, value: any): any;

        static getInstance(): any;

    }

    class Immigration {
        constructor();

        apply(fn: any): any;

        check(token: any, errorCallback: any): void;

        static getInstance(): any;

    }

}

