/*
 * gistModel.js
 * localStorage model for gists using store
 * 
 * this doesn't make any assumption on how you fetch gist
 * all it cares about is storing the gists in the localStorage and outputting 
 * them to other components of the program
 *
 */ 

var gists = require("../lib/gists.js")
var store = require("store")

var dbName = "gistStorage"

var gistModel = {
	init: function () {
		this.checkStore()
	},
	getGists: function () {
		return store.get(dbName)
	},
	getAllGists: function () {
		var gists = this.getGists()
		var ids = Object.keys(gists)

		return ids.map(function (id) {
			return gists[id]
		})
	},
	getGist: function (id) {
		return getGists()[id]
	},
	removeGist: function (id) {
		var gists = this.getGists()
		if (gists[id]) {
			delete gists[id]
		}

		store.set(dbName, gists)
	},
	addGist: function (gistObject) {
		var gists = this.getGists()
		gists[gistObject.id] = gistObject

		store.set(dbName, gists)
	},
	getGistsLength: function () {
		return Object.keys(this.getGists()).length
	},
	checkStore: function () {
		var gists = this.getGists()
		if (!gists) {
			store.set(dbName, {})
		}
	}
}


gistModel.init()

module.exports = gistModel