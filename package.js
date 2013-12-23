Package.describe({
  summary: "Meteor Packaged jquery-hotkeys (from John Resig https://github.com/jeresig/jquery.hotkeys)"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery.hotkeys.js', 'client');
});
