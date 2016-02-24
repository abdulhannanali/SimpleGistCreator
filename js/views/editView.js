module.exports = function (octopus) {
	var editView = {
		init: function () {
			this.gistDescription = document.getElementById("gistDescription")
			this.gistFilename = document.getElementById("gistFilename")
			this.submitButton = document.getElementById("submitGist")
			this.gistContent = document.getElementById("gistContent")
			
			var self = this
			// On Submission call the method on Octopus to be implemented later
			self.submitButton.addEventListener("click", function (event) {
				octopus.submitGist(self.getValues())
			}, false)
		},
		getValues: function () {
			return {
				description: this.gistDescription.value,
				filename: this.gistFilename.value,
				content: this.gistContent.value
			}
		},
		clear: function () {
			this.gistDescription.value = ""
			this.gistFilename.value = ""
			this.gistContent.value = ""
		}
	}

	return editView	
}


