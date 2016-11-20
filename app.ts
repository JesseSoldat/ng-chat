import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {userServiceInjectables} from './ts/services/UserService'

@Component({
	selector: 'chat-app',
	template: `
	<div>
		Chat
	</div>
	`
})

class ChatApp {
	
}

bootstrap(ChatApp);