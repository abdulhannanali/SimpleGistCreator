/*
 * gists.js
 * a module for creating the gists on the github server
 */

var $ = require("jquery")

module.exports = function () {
	var baseUrl = "https://api.github.com"

	function createGist(description, filename, content, pub) {
		if (!description || !filename || !content) {
			console.log("One or more required things not provided in order to create a gist")
		}

		var data = {
			files: {
			}
		}

		data["public"] = pub || false

		data.files[filename] = {}
		data.files[filename].content = content

		var settings = {
			url: baseUrl + "/gists",
			method: "POST",
			data: JSON.stringify(data)
		}

		return $.ajax(settings)
	}

	return {
		createGist: createGist
	}
}