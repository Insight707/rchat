import {IClientOptions, MqttClient} from "mqtt";
import {RChatConnectionOptions} from "./models/options";
import * as MQTT from 'mqtt';
import * as events from 'events';

export class RChat extends events.EventEmitter {
    private client: MqttClient;

    constructor() {
        super();
    }

    public on(event: string, listener: (...args: any[]) => void) {
        super.on(event, listener);
    }

    public emit(event: string, ...args: any[]) {
        return super.emit(event, ...args);
    }

    public connect(chatServerURL:string, options: IClientOptions): this {
        this.client = MQTT.connect(chatServerURL, options);

        return this;
    }

    public addMessage(channel:string, data: any): void {
        this.client.publish(channel, data);
    }
}