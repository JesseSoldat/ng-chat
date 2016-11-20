import {Injectable, bind} from 'angular2/core';
import {Subject, Observable} from 'rxjs';
import {User, Thread, Message} from '../models';

let initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
	(messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
//a stream to publish new messages only once
newMessages: Subject<Message> = newSubject<Message>();
 // `messages` is a stream that emits an array of the most up to date messages
 messages: Observable<Message[]>;
 
}