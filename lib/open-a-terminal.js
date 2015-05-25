var CompositeDisposable, OpenATerminal;

path = require('path');

CompositeDisposable = require('atom').CompositeDisposable;

module.exports = OpenATerminal = {
	subscriptions: null,

	activate: function(state) {
		this.subscriptions = new CompositeDisposable();
		return this.subscriptions.add(atom.commands.add('.platform-darwin .tree-view', {
			'open-a-terminal:open': (function(_this) {
				return function() {
					return _this.open();
				};
			})(this)
		}));
	},
	deactivate: function() {
		return this.openATerminal.destroy();
		},

	open: function() {
		var file_path;

		debugger;

		console.log('Open A Terminal Here command fired!');

		file_path = atom.workspace.getActivePaneItem();
		file_dir = path.dirname(file_path);

		console.log(file_dir);
	}
};
