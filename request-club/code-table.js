var SPREADSHEET_ID_AND_TAB =
	'1l08Sdxv8DRXcq9InKoGzVIIGw-yL3_teI-2C1wcHK6s/posted';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;
				let requestIndex = $(
					`<span><p class="date"  data-filter-type="` +
						entry.date +
						`">` +
						entry.date +
						`</p>
						<p class="user" data-filter-type="` +
						entry.user +
						`">` +
						entry.user +
						`</p>
						<p class="request" data-filter-type="` +
						entry.request +
						`">` +
						entry.request +
						`</p></span><div><a target="_blank" href="` +
						entry.link +
						`" data-filter-type="` +
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
