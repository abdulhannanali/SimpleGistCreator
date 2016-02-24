var $ = require("jquery")
var jsRender = require("jsrender")($)

module.exports = function (octopus) {

	var listView = {
		init: function () {
			this.gistsListView = document.getElementById("gistsListView")
			this.gistsCount = document.getElementById("gistsCount")

			this.gistItemTemplate = $.templates("#template-gistItem")

			this.render(octopus.getAllGists())
		},
		addGist: function (gist, length) {
			var gistItem = $(this.gistItemTemplate.render(gist))

			gistItem.find(".clearGist")
				.click(this.clearGist)

			$("#gistsListView").append(gistItem)

			this.updateGistsCount()
		},
		render: function (gists) {
			var gistsHTML = ""


			gists.forEach(function (gist) {
				gistsHTML += this.gistItemTemplate.render(gist)
			}.bind(this))


			this.gistsListView.innerHTML = gistsHTML

			this.updateGistsCount()		
			$(".clearGist").click(function (event) {
				this.clearGist(event.target)
				this.updateGistsCount()
			}.bind(this))
		},
		clearGist: function (target) {
			var id = $(target).data("id")
			octopus.removeGist(id)
			$(target).parent(".gistsListItem").remove()
		},
		updateGistsCount: function () {
			var count = octopus.getGistsLength()
			console.log(count)
			this.gistsCount.innerHTML = count + " gist" + (count > 1 ? "s" : "") + " saved :)" 
		}
	}

	return listView
}