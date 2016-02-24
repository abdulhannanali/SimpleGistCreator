var store = require("store")
var jquery = require("jquery")
var gists = require("./lib/gists.js")()

// Models
// gistModel for all the gists
var gistModel = require("./models/gistModel.js")

var majorOctopus = {
	init: function () {
		gistModel.init()
	},
	initViews: function (views) {
		views.forEach(function (view) {
			view.init()
		})
	},
	submitGist: function (values) {
		gists.createGist(values.description, values.filename, values.content, true)
			.then(function (gistObject) {
				editView.clear()
				gistModel.addGist(gistObject)
				listView.addGist(gistObject, this.getGistsLength())
			}.bind(this))
	},
	getGistsLength: function () {
		return gistModel.getGistsLength()
	},
	// function related to gists
	getAllGists: function () {	
		return gistModel.getAllGists()
	},
	removeGist: function (id) {
		gistModel.removeGist(id)
	}
}
// Views
// 
var editView = require("./views/editView.js")(majorOctopus)
var listView = require("./views/listView")(majorOctopus)


majorOctopus.init()
majorOctopus.initViews([editView, listView])