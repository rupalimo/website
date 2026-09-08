var SPREADSHEET_ID_AND_TAB =
	'1l08Sdxv8DRXcq9InKoGzVIIGw-yL3_teI-2C1wcHK6s/submissions';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;
				let requestIndex = $(
					`<span data-filter="` +
						entry.new +
						`"><p class="date" data-filter="` +
						entry.Date +
						`">` +
						entry.Date +
						`</p>
						<span><p class="user" data-filter="` +
						entry.Name +
						`">` +
						entry.Name +
						`</p><pre>&#60;anonymous&#62;</pre></span>
						<p class="request" data-filter="` +
						entry.Request +
						`">` +
						entry.Request +
						`</p></span><div data-filter="` +
						entry.link +
						`"><a target="_blank" href="` +
						entry.link +
						`">` +
						entry.title +
						` | ` +
						entry.artist +
						` | ` +
						entry.year +
						` | ` +
						entry.album +
						`</a></div>`,
				).appendTo('#requestIndex');
			});
		},
	);
});
