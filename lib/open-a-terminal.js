var path, exec, CompositeDisposable, OpenATerminal;

path = require('path');
exec = require('child_process').exec;

CompositeDisposable = require('atom').CompositeDisposable;

module.exports = OpenATerminal = {
	subscriptions: null,

	activate: function(state) {
		var self = this;

		this.subscriptions = new CompositeDisposable();

		this.subscriptions.add(
			atom.commands.add(
				'.tree-view',
				{
					'open-a-terminal:openroot': function() { return self.openroot(); },
					'open-a-terminal:openhere': function() { return self.openhere(); }
				}
			)
		);
	},

	deactivate: function() {
		return this.openATerminal.destroy();
	},

	openroot: function() {
		var project_path_array, project_path, command_line;

		console.log('Open A Terminal on the Project command fired!');

		project_path_array = atom.project.getPaths();
		project_path = project_path_array[0];

		command_line = "open -a /Applications/Admin/iTerm.app \"" + project_path + "\"";

		console.log(command_line);

		exec(command_line);
	},

	openhere: function() {
		var editor, file, command_line, directory, file_path;

		console.log('Open A Terminal Here command fired!');

		// debugger;

		editor = atom.workspace.getActivePaneItem();
		file = editor.buffer.file;
		file_path = file.path;
		directory = path.dirname(file_path);

		command_line = "open -a /Applications/Admin/iTerm.app \"" + directory + "\"";

		console.log(command_line);

		exec(command_line);
	}
};
