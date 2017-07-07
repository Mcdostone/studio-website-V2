import bragi from 'bragi-browser';
import loglevel from 'loglevel';

class Logger {

	info(msg, obj = '') {
			this.log('INFO', msg, obj);
	}

	debug(msg, obj = '') {
		bragi.log('DEBUG:' + this.getTimestamp(), msg, obj);
	}

	log(group, msg, obj = '') {
		bragi.log(group.toUpperCase() + ':'  + this.getTimestamp(), msg, obj);
	}

	react(msg, obj = '') {
    this.log('REACT', msg, obj);
  }

	trace(msg, obj = '') {
		loglevel.trace(this.prefix('TRACE') + msg, obj);
	}

	warn(msg, obj = '') {
		loglevel.warn(this.prefix('WARN') + msg, obj);
	}

	error(msg, obj = '') {
		loglevel.error(this.prefix('ERROR') + msg, obj);
	}

	on() {
		bragi.options.groupsEnabled = true;
		loglevel.enableAll();
  }

	off () {
		bragi.options.groupsEnabled = false;
		loglevel.disableAll()
	}

	getTimestamp() {
		let now = new Date();
		return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}T`
			+ `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}Z`;
  }

	prefix (prefix = '') {
		let timestamp = this.getTimestamp();
		return (prefix !== '') ? '[ ' + prefix + ':' + timestamp + '  ]  ' : '[ ' + timestamp + '  ]  ';
  }

}

export default new Logger();
