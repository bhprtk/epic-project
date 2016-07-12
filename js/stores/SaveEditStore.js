import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

class SaveEditStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {

			switch(action.actionType) {
				case ActionTypes.SAVE_EDIT:
					console.log('action in SaveEditStore', action);
					this.emit('saveEdit');
					break;
				default:
			}
		})
	}

	saveEdit() {
		console.log('saveEdit in SaveEditStore');
	}
}

export default new SaveEditStore();
